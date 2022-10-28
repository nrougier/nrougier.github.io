function Buy(){
  
  const discountValue = discount();
  const mailValue = document.getElementById('mailValue').value;
  const nameValue = document.getElementById('nameValue').value;
  const numberOfTickets = document.getElementById('quantity').value;
  const lastNameValue = document.getElementById('lastNameValue').value;
  const valueOfTickets = document.getElementById('value').innerHTML;
  
  if (nameValue !== '' && lastNameValue !== '' && mailValue !== '') {
    amountToPay(numberOfTickets, valueOfTickets, discountValue);
    } else {
    alert('Faltan compretar datos')
  }

  console.log(`Usted selecciono ${numberOfTickets} ticket/s por un valor de ${valueOfTickets} cada uno y un descuento de ${discountValue}% haciendo un total de $ ${document.getElementById('amount').innerHTML}`)
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