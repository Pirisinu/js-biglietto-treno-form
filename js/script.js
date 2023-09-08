/* 
  Scrivere un programma che chieda all’utente:
 -Il numero di chilometri da percorrere
  -Età del passeggero Sulla base di queste informazioni dovrà calcolare il prezzo   totale del biglietto di viaggio, secondo le seguenti regole:
    -il prezzo del biglietto è definito in base ai km (0.21 € al km)
    -va applicato uno sconto del 20% per i minorenni
    -va applicato uno sconto del 40% per gli over 65.

  1.Prendere i dati che ci servono per poter svolgere i calcoli
*/
//Gen
const userName=document.getElementById('user-name');
const clientKm=parseFloat(document.getElementById('client-km'));
const kmPrice = 0.21;
const userNameAssigned = userName;

const btnTicket = document.getElementById('btn-ticket').innerHTML;

btnTicket.addeventListener('click', function(){
  document.getElementById('user-name-assigned') = userNameAssigned.innerHTML;
});


