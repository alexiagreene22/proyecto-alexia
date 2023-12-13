import React, { useEffect } from 'react';

const WhatsAppPage = ({ allProducts, total }) => {
  useEffect(() => {
    const redirectToWhatsApp = () => {
      const phoneNumber = '1234567890'; 


      const greeting = '¡Hola! Quiero realizar este pedido:';
      const orderDetails = allProducts.map(item => ({
        product: item.nameProduct || '',
        quantity: item.quantity || 0,
        subtotal: (item.price || 0) * (item.quantity || 0),
      }));


      const orderTotal = orderDetails.reduce((acc, item) => acc + item.subtotal, 0);

 
      const message = `${greeting}\n${orderDetails
        .map(item => `${item.product} - ${item.quantity} x $${item.subtotal.toFixed(2)}`)
        .join('\n')}\n\nTotal: $${orderTotal.toFixed(2)}`;

      const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
      window.location.href = whatsappUrl;
    };

    redirectToWhatsApp();
  }, [allProducts, total]);

  return (
    <div>
      <h2>Redirigiendo a WhatsApp...</h2>
    </div>
  );
};

export default WhatsAppPage;


