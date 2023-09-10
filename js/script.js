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
const clientKm=document.getElementById('client-km');
const ageSelected =document.getElementById('age-select');
const kmPrice = 0.21;
let message = '';
let offerMessage = '';
//Discount
const discountUnder18 = 20;
const discountOver65 = 40;
const ticketDefault =document.getElementById('ticket-default')
const ticketUnder18 =document.getElementById('ticket-under-18')
const ticketOver65 =document.getElementById('ticket-over-65')
//Data validation


/***********************************************************************/

const btnTicket = document.getElementById('btn-ticket');

btnTicket.addEventListener('click', function(){
  //Name Assing
  const nome = userName.value;
  document.getElementById('user-name-assigned').innerHTML = nome;
  //Default Ticket
  const km = clientKm.value;
  const ticketPrice = (kmPrice * km);
  let finalTicket = ticketPrice;

  //Discount Ticket
  if ((ageSelected).value === 'Minorenne'){
    finalTicket *= 1- (discountUnder18/100);
    message = finalTicket + '€';
    offerMessage = 'Biglietto Under18';
    document.getElementById('final-ticket').innerHTML = message;
    document.getElementById('offer').innerHTML = offerMessage;
  }
  else if ((ageSelected).value === 'Over65'){
    finalTicket *= 1- (discountOver65/100);
    message = finalTicket + '€';
    offerMessage = `Biglietto Over65`
    document.getElementById('final-ticket').innerHTML = message;
    document.getElementById('offer').innerHTML = offerMessage;
  }
  else{
    offerMessage = `Biglietto Standard`
    document.getElementById('final-ticket').innerHTML = finalTicket;
    document.getElementById('offer').innerHTML = offerMessage;
  }

  //Carrozza Random 
  const randomCarriage =parseInt(Math.random() * 25 + 1);
  document.getElementById('rdm-carriage').innerHTML = randomCarriage;

  //Codice Random 
  const randomCode =parseInt(Math.random() * 99999 + 1);
  document.getElementById('rdm-code').innerHTML = randomCode;
  
  //Reset button 
  const btnReset = document.getElementById('btn-reset');
  btnReset.addEventListener('click', function(){
   document.querySelector('.form-text').innertext = '';
  });
});


