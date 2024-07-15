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
 ✅ Osadzenie całego zadania w jakimś JSowym frameworku (najlepiej Angular) - <b>Zastosowano React.</b>
<br /> ✅ Brak plików graficznych w końcowym projekcie (brak plików typu jpg, gif, png, svg).
<br /> ✅ CSS IS AWESOME w footerze - po najechaniu myszką ramka (bez tekstu) powinna wykonać animowany obrót.
<br /> ✅ Zastosowanie BEM.
<br /> ✅ Spełnianie zasad a11y.
<br /> ✅ Logiczne wykorzystanie jednostek rem, em, vh, vw (w efekcie jak najmniejsze użycie jednostki px) - w taki sposób by w efekcie responsywność spełniona została jak najmniejszą ilością kodu.
<br />⬜ Mobile first.
<br /> ✅ Doklejając treść sprawić by w ostatnim bloku treści były posortowane alfabetycznie.
<br /> ✅ Przy doklejaniu treści w przypadku niemożliwości spełnienia warunku by była unikalna wyświetlić stosowny komunikat (np. alert/dialog/modal).
<br /> ⬜ Button w footerze ("pokaż") wysuwający ramkę bez użycia JSa.
<br /> ✅ Rezultat prac wrzucić do podglądu na jakąś darmową platformę (np. netlify/heroku). - [Link](https://chipper-gingersnap-914633.netlify.app/)

## Instalacja programu
Wykonanie poniższych komend w terminalu, pozwoli na zainstalowanie projektu.
* `git clone https://github.com/TryUnder/frontend_test.git`
* `cd frontend_test/react_solution`
* `npm install`
* `npm start`

## Podgląd wersji desktopowej
![desktop](https://github.com/user-attachments/assets/a0daeae2-faf4-46cf-8510-534a482af88d)


## Podgląd wersji mobilnej
![mobile](https://github.com/user-attachments/assets/6e05b973-2d24-4a00-b4ba-c79374555a8c)
