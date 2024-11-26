// captureOrder.js (located in src/app/api)
interface CaptureOrderResponse {
  // Define the structure of the response data here
  // For example:
  // id: string;
  // status: string;
}

export async function captureOrder(orderID: string): Promise<CaptureOrderResponse> {
  try {
    const response = await fetch(`/api/capture-order?orderID=${orderID}`, {
      method: 'POST',
    });
    const data: CaptureOrderResponse = await response.json();
    return data;
  } catch (error) {
    console.error('Error capturing order:', error);
    throw error;
  }
}
