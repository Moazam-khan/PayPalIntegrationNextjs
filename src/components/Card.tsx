'use client';
import { useState } from 'react';
import PayPalButton from './PayPalButton'; // Assuming PayPalButton handles the PayPal button rendering
import Image from 'next/image';
const Card = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const amount = 40; // Fixed amount

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSuccess = (details: any) => {
    console.log('Transaction completed by ' + details.payer.name.given_name);
    handleCloseModal(); // Close modal after transaction
    window.open('/success', '_blank'); // Open the success route in a new tab
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#f4f4f4',
        margin: '0',
      }}
    >
      
      <div
        style={{
          backgroundColor: '#fff',
          borderRadius: '8px',
          padding: '20px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          maxWidth: '400px',
          width: '100%',
          textAlign: 'center',
        }}
      >
        <Image
        src="https://picsum.photos/300" // Replace with another valid image source
        alt="Cricket Bat"
        width={300}
        height={300}
        style={{ borderRadius: '10px' }}
      />
        <p style={{ marginBottom: '20px', color: '#555' }}>
          Purchase Item for ${amount}
        </p>

        <button
          style={{
            padding: '10px 20px',
            backgroundColor: '#0070f3',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontWeight: 'bold',
            transition: 'background-color 0.3s',
          }}
          onClick={handleOpenModal} // Open the modal when clicked
        >
          Buy
        </button>

        {/* Modal for PayPal Button */}
        {isModalOpen && (
          <div
            style={{
              position: 'fixed',
              top: '0',
              left: '0',
              width: '100%',
              height: '100%',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              zIndex: '1000',
            }}
          >
            <div
              style={{
                backgroundColor: '#fff',
                borderRadius: '8px',
                padding: '20px',
                maxWidth: '400px',
                width: '100%',
                textAlign: 'center',
                position: 'relative',
                zIndex: '1001',
              }}
            >
              <h3 style={{ marginBottom: '20px' }}>Complete Your Purchase</h3>
              <PayPalButton
                amount={amount}
                onSuccess={handleSuccess}
              />
              <button
                style={{
                  marginTop: '20px',
                  padding: '8px 16px',
                  backgroundColor: '#ff4d4d',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer',
                  fontWeight: 'bold',
                }}
                onClick={handleCloseModal}
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;