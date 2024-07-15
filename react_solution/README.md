# Projekt Frontend-test

Bieżące repozytorium stanowi rozwiązanie zadania rekrutacyjnego.

## Projekt frontend-test

* Implementacja projektu osadzona została w React.
* Struktura katalogowa projektu `frontend_test\react_solution\src\`:
    * Katalog `components` stanowi zbiór trzech głównych komponentów. `Header.jsx` odpowiada za renderowanie headera, `Content.jsx` za centralną część strony, a `Footer.jsx` za stopkę.
    * `data\data.json` - Zbiór przykładowych danych niezbędnych do testowania funkcjonalności bloku drugiego aplikacji.
    * `scss\` - Pliki odpowiedzialne za stylowanie głównych komponentów aplikacji.

## Cel
Pomyślnie zrealizowany został główny cel aplikacji, tzn:

* Pocięta strona wypełnia całe okno przeglądarki. Głównym breakpointem odróżniającym aplikację uruchamianą w środowisku desktopowym, od środowiska mobilnego, jest breakpoint ustawiany na szerokość <960px. Wówczas stosowane są odrębne style w taki sposób, aby strona wyświetlała się prawidłowo na urządzeniach mobilnych.
* Header został przytwierdzony do top, a logo linkuje do "/".
* Radiobuttony zaimplementowane zostały w taki sposób, aby w jak najwierniejszy sposób oddać wygląd projektowy.
* Funkcjonalność związana z doklejaniem, oraz zastępowaniem tekstu działa w sposób prawidłowy, a całość zapisuje się do local storage przeglądarki.
* Przycisk `Pokaż` w stopce, wysuwa ramkę, z której przycisk `POKAŻ DANE OSOBOWE` dokleja imię i nazwisko autora w nagłówku, a `ZRESETUJ USTAWIENIA` przeładowuje stronę.

## Zadania dodatkowe
* [x] Venus
