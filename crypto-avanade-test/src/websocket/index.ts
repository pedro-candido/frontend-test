function getCoinInfo() {
  const socket = new WebSocket(`wss://data-stream.binance.com/stream?streams=ethbtc/bnbbtc`);

  socket.onopen = () => {
    console.log('WebSocket connection established');
  };

  socket.onmessage = (event) => {
    const data = JSON.parse(event.data);
    console.log('Real-time update:', data);
  };

  socket.onerror = (error) => {
    console.error('WebSocket error:', error);
  };

  socket.onclose = () => {
    console.log('WebSocket connection closed');
  };
}

export default getCoinInfo;
