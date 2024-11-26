// createOrder.js (located in src/app/api)
export async function createOrder() {
  try {
    const response = await fetch('/api/create-order', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    return data.orderID;
  } catch (error) {
    console.error('Error creating order:', error);
    throw error;
  }
}
