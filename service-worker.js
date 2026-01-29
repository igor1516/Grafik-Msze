const CACHE_NAME = 'rejestr-mszy-v2';
const urlsToCache = [
  '.',
  './index.html',
  './manifest.json'
];

// Instalacja Service Worker
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Cache otwarty');
        return cache.addAll(urlsToCache);
      })
  );
  self.skipWaiting();
});

// Aktywacja Service Worker - automatyczne czyszczenie starego cache
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            console.log('Usuwanie starego cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => {
      console.log('Service Worker aktywowany, stary cache usunięty');
    })
  );
  self.clients.claim();
});

// Obsługa żądań - strategia Cache First
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Zwróć z cache jeśli istnieje
        if (response) {
          return response;
        }
        
        // W przeciwnym razie pobierz z sieci
        return fetch(event.request).then(response => {
          // Nie cache'uj jeśli odpowiedź nie jest OK
          if (!response || response.status !== 200 || response.type === 'error') {
            return response;
          }

          // Sklonuj odpowiedź
          const responseToCache = response.clone();

          caches.open(CACHE_NAME)
            .then(cache => {
              cache.put(event.request, responseToCache);
            });

          return response;
        });
      })
      .catch(() => {
        // Zwróć cached HTML jeśli offline
        return caches.match('./index.html');
      })
  );
});