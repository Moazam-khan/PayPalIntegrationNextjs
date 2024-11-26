import React from 'react';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';

interface PayPalButtonProps {
  amount: number;
  onSuccess: (details: { payer?: { name?: { given_name?: string } } }) => void;
}

const PayPalButton: React.FC<PayPalButtonProps> = ({ amount, onSuccess }) => {
  return (
    <PayPalScriptProvider options={{ clientId: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID!, currency: "USD" }}>
      <PayPalButtons
        style={{ layout: 'vertical', shape: 'rect' }}
        createOrder={(data, actions) => {
          return actions.order.create({
            intent: "CAPTURE",
            purchase_units: [{
              amount: {
                currency_code: "USD",
                value: amount.toString(),
              },
            }],
          });
        }}
        onApprove={(data, actions) => {
          if (actions.order) {
            return actions.order.capture().then(details => {
              if (details.payer && details.payer.name && details.payer.name.given_name) {
                onSuccess(details);
              } else {
                console.error('Payer details are missing');
              }
            });
          }
          return Promise.reject(new Error('Order is undefined'));
        }}
      />
    </PayPalScriptProvider>
  );
};

export default PayPalButton;