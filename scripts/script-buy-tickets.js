function Buy(){
  
  const numberOfTickets = document.getElementById('quantity').value;
  const valueOfTickets = document.getElementById('value').innerHTML;
  const nameValue = document.getElementById('nameValue').value;
  const lastNameValue = document.getElementById('lastNameValue').value;
  const mailValue = document.getElementById('mailValue').value;
  
  const discountValue = discount();
  
  if (nameValue !== '' && lastNameValue !== '' && mailValue !== '') {
    amountToPay(numberOfTickets, valueOfTickets, discountValue);
    } else {
    alert('Faltan compretar datos')
  }



  console.log(`Usted selecciono ${numberOfTickets} ticket/s por un valor de ${valueOfTickets} cada uno y un descuento de ${discountValue}% haciendo un total de $ ${document.getElementById('amount').innerHTML}`)
  //console.log(`Costo de cada ticket $ ${valueOfTickets}`)
  //console.log(`Descuento de ${discountValue}%`)
}

function discount() {
  
  const disc = document.getElementById('inputState').value;

  switch(disc) {
    case 'Estudiante':
      return 20;
      break;
    case 'Trainee':
      return 50;
      break;
    case 'Junior':
      return 85;
      break;
  }
}

function amountToPay(t, v, d) {

  const total = ((t * v) * d / 100)
  
  document.getElementById('amount').innerHTML = total

}