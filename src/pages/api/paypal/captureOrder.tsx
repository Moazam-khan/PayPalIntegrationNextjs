interface CaptureOrderResponse {
  id: string;
  status: string;
  // Add other properties as needed
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