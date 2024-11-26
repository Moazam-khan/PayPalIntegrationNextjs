'use client';

import { useEffect, ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  useEffect(() => {
    const clientId = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID;
    if (!clientId) {
      console.error("PayPal Client ID is missing");
      return;
    }

    const script = document.createElement('script');
    script.src = `https://www.paypal.com/sdk/js?client-id=${clientId}&currency=USD`;
    script.async = true;
    document.body.appendChild(script);

    return () => {
      if (script && document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <html lang="en">
      <head>
        <title>My App</title>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
