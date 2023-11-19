function iniciarPayPalIntegration(totalCompra) {

  const element = document.getElementById('paypal-button-container');
  element.innerHTML = '';

  paypal.Buttons({
    style: {
      shape: 'rect',
      color: 'gold',
      layout: 'vertical',
      label: 'paypal',
    },

    createOrder: function(data, actions) {
      return actions.order.create({
        purchase_units: [{"amount":{"currency_code": "USD", "value": totalCompra.toFixed(2)}}]
      });
    },

    onApprove: function(data, actions) {
      return actions.order.capture().then(function(orderData) {
        console.log('Capture result', orderData, JSON.stringify(orderData, null, 2));

        element.innerHTML = '<h3>¡Gracias por tu pago!</h3>';
      });
    },

    onError: function(err) {
      console.log(err);
    }
  }).render('#paypal-button-container');
}
