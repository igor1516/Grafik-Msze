# Grafik Mszy

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)
![PWA](https://img.shields.io/badge/PWA-enabled-orange.svg)

Aplikacja webowa do generowania dziennika pracy organisty. Działa jako **Progressive Web App** - można zainstalować na telefonie i używać bez dostępu do internetu.

## Główne funkcje

- Automatyczne generowanie kalendarza - tworzy harmonogram mszy na cały miesiąc
- Domyślne godziny mszy - oddzielne ustawienia dla dni powszednich, sobót i niedziel
- Rozpoznawanie świąt - automatycznie wykrywa święta kościelne (w tym ruchome święta wielkanocne)
- Wpisy niestandardowe - możliwość dodania jednorazowych mszy w wybranym dniu
- Edycja wpisów - zmiana godzin, dodawanie i usuwanie mszy
- Podsumowanie miesiąca - automatyczne zliczanie mszy i generowanie statystyk
- Eksport do pliku - generowanie raportu tekstowego z podsumowaniem
- Praca offline - pełna funkcjonalność bez internetu po zainstalowaniu
- Synchronizacja danych - dane zapisywane lokalnie w pamięci urządzenia

## Demo

[**Otwórz aplikację**](https://igor1516.github.io/Grafik-Msze/)

## Instalacja

### Metoda 1: Instalacja jako PWA (Zalecana)

#### Android (Chrome)
1. Otwórz aplikację w przeglądarce Chrome
2. Kliknij przycisk "Zainstaluj" w banerze aplikacji
3. LUB: Menu (⋮) → "Dodaj do ekranu głównego"
4. Ikona pojawi się na ekranie głównym

#### iOS (Safari)
1. Otwórz aplikację w przeglądarce Safari
2. Kliknij przycisk "Udostępnij" (□↑)
3. Przewiń w dół i wybierz "Dodaj do ekranu początkowego"
4. Nazwij aplikację i kliknij "Dodaj"

#### Desktop (Chrome/Edge)
1. Otwórz aplikację w przeglądarce
2. Kliknij ikonę instalacji (⊕) w pasku adresu
3. LUB: Menu (⋮) → "Zainstaluj Grafik Mszy"

### Metoda 2: Hosting własny

#### Szybki start z GitHub Pages
1. Fork tego repozytorium
2. Przejdź do Settings → Pages
3. Wybierz branch `main` jako źródło
4. Zapisz i otwórz wygenerowany link

#### Lokalnie
1. Sklonuj repozytorium:
```bash
git clone https://github.com/igor1516/Grafik-Msze.git
cd rejestr-mszy
```

2. Otwórz `index.html` w przeglądarce lub użyj serwera lokalnego:
```bash
# Python 3
python -m http.server 8000

# Node.js
npx serve

# PHP
php -S localhost:8000
```

3. Otwórz `http://localhost:8000` w przeglądarce

## Wymagania techniczne

### Przeglądarka
- Chrome 67+ (Android/Desktop)
- Safari 11.3+ (iOS/macOS)
- Firefox 68+
- Edge 79+

### System operacyjny
- Android 5.0+
- iOS 11.3+
- Windows 10+
- macOS 10.12+
- Linux (dowolna dystrybucja)

## Instrukcja użytkowania

### 1. Pierwsze uruchomienie
- Ustaw wynagrodzenie w polu "Stawka za mszę (zł)"
- Kliknij "Ustaw domyślne godziny mszy"
- Dodaj typowe godziny mszy dla dni powszednich, sobót i niedziel

### 2. Generowanie kalendarza
- Wybierz miesiąc z selektora
- Kliknij "Wygeneruj miesiąc"
- Aplikacja automatycznie utworzy wpisy dla wszystkich dni z mszami

### 3. Dodawanie niestandardowych mszy
- Kliknij "Dodaj niestandardowy"
- Wybierz datę i godzinę
- Kliknij "Dodaj"

### 4. Edycja wpisów
- Kliknij ikonę ✏️ przy wybranym dniu
- Zmień godziny lub dodaj nowe msze
- Kliknij "Zapisz"

### 5. Eksport danych
- Kliknij "Eksportuj"
- Plik tekstowy z raportem zostanie pobrany

## Prywatność i bezpieczeństwo

- 100% prywatności - wszystkie dane przechowywane lokalnie na Twoim urządzeniu
- Brak śledzenia - zero analytics, zero cookies, zero zewnętrznych połączeń
- Brak rejestracji - nie wymaga konta ani logowania
- Brak serwera - aplikacja działa wyłącznie w przeglądarce
- Pełna kontrola - możesz w każdej chwili usunąć dane z localStorage

## Technologie

- HTML5 - struktura aplikacji
- CSS3 - stylowanie i responsywność
- Vanilla JavaScript - logika aplikacji (bez frameworków)
- PWA** - Progressive Web App z Service Worker
- LocalStorage API** - przechowywanie danych lokalnie
- Cache API** - praca offline

## Struktura projektu
```
rejestr-mszy/
├── index.html          # Główny plik aplikacji
├── manifest.json       # Manifest PWA
├── service-worker.js   # Service Worker dla pracy offline
├── README.md           # Ten plik
├── LICENSE             # Licencja MIT
└── .gitignore          # Pliki ignorowane przez Git
```

## Znane problemy
- miOS Safari: Banner instalacji nie pojawia się automatycznie (użyj "Dodaj do ekranu początkowego")
- Firefox: Ograniczone wsparcie dla PWA na Androidzie

### Zgłaszanie błędów
Znalazłeś błąd? [Utwórz issue](https://github.com/igor1516/Grafik-Msze/issues)

### Propozycje funkcji
Masz pomysł na nową funkcję? [Otwórz issue z tagiem "enhancement"](https://github.com/igor1516/Grafik-Msze/issues)

### v1.0.0 (2025-01-16)
1. Pierwsza wersja publiczna
2. Generowanie kalendarza mszy
3. Obsługa świąt polskich i ruchomych świąt kościelnych
4. Wpisy niestandardowe
5. Eksport do pliku tekstowego
6. Pełne wsparcie PWA i pracy offline
7. Responsywny interfejs

## Licencja

Ten projekt jest udostępniony na licencji MIT - szczegóły w pliku [LICENSE]

## Autor

Igor Zagórski

## Podziękowania

Dziękujemy wszystkim użytkownikom za feedback i sugestie!
```












