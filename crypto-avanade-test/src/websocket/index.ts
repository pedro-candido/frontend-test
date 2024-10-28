import { useEffect, useRef, useState } from 'react';

import { getArrayAndCreateString } from '@/formatters';

interface IUseBinanceSocket {
  list: string[];
}

function useBinanceSocket({ list }: IUseBinanceSocket) {
  const [isLoading, setIsLoading] = useState(true);
  const ref = useRef<WebSocket | null>(null);
  const [values, setValues] = useState<string[]>([]);
  const mountedStringUrl = `wss://data-stream.binance.com/stream?streams=${getArrayAndCreateString(list)}`;

  useEffect(() => {
    // Inicializa a conexão WebSocket
    ref.current = new WebSocket(mountedStringUrl);

    ref.current.onopen = () => {
      console.log('WebSocket connection established');

      setIsLoading(false);
    };

    ref.current.onmessage = (event) => {
      setIsLoading(true);
      const { data } = JSON.parse(event.data);
      setValues((prevValues) => {
        const existingIndex = prevValues.findIndex((item) => item.s === data.s);
        setIsLoading(false);

        if (existingIndex !== -1) {
          const updatedValues = [...prevValues];
          updatedValues[existingIndex] = data;

          return updatedValues;
        }

        return [...prevValues, data];
      });
    };

    ref.current.onerror = (error) => {
      console.error('WebSocket error:', error);
    };

    ref.current.onclose = () => {
      console.log('WebSocket connection closed');
    };

    // Limpa a conexão WebSocket ao desmontar o componente
    return () => {
      ref.current?.close();
    };
  }, []);

  return {
    values,
    isLoading,
  };
}

export default useBinanceSocket;
