alert('Mój pierwszy Javascript');

function zmien_tekst(numer_komorki)
{
    nazwa_komorki = `${numer_komorki}`;
    element = document.getElementById(nazwa_komorki);
    element.innerText = nazwa_komorki;

    if(numer_komorki < 9)
    {
        setTimeout(() => zmien_tekst(numer_komorki + 1), 500);
    }
}

setTimeout(() => zmien_tekst(1), 1000);