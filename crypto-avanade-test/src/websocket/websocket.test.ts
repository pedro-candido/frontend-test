import { renderHook, act } from '@testing-library/react-hooks';

import useBinanceSocket from './path-to-your-hook-file';

// Mock da função getArrayAndCreateString
jest.mock('@/formatters', () => ({
  getArrayAndCreateString: jest.fn((list) => list.join('/')),
}));

describe('useBinanceSocket', () => {
  let mockWebSocket;

  beforeEach(() => {
    mockWebSocket = {
      send: jest.fn(),
      close: jest.fn(),
      onopen: null,
      onmessage: null,
      onerror: null,
      onclose: null,
    };

    global.WebSocket = jest.fn(() => mockWebSocket);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('deve estabelecer a conexão WebSocket e definir isLoading como false após abrir', () => {
    const { result } = renderHook(() => useBinanceSocket({ list: ['ethbtc'] }));

    // Simula a abertura da conexão
    act(() => {
      mockWebSocket.onopen();
    });

    expect(result.current.isLoading).toBe(false);
    expect(global.WebSocket).toHaveBeenCalledWith(
      'wss://data-stream.binance.com/stream?streams=ethbtc'
    );
  });

  it('deve atualizar values quando uma mensagem é recebida', () => {
    const { result } = renderHook(() => useBinanceSocket({ list: ['ethbtc'] }));

    // Simula a abertura da conexão
    act(() => {
      mockWebSocket.onopen();
    });

    // Simula uma mensagem recebida no WebSocket
    act(() => {
      mockWebSocket.onmessage({ data: JSON.stringify({ data: { s: 'ETHBTC', c: '0.005' } }) });
    });

    expect(result.current.values).toEqual([{ s: 'ETHBTC', c: '0.005' }]);
    expect(result.current.isLoading).toBe(false);
  });

  it('deve substituir um objeto existente quando uma nova mensagem com o mesmo símbolo é recebida', () => {
    const { result } = renderHook(() => useBinanceSocket({ list: ['ethbtc'] }));

    act(() => {
      mockWebSocket.onopen();
    });

    act(() => {
      mockWebSocket.onmessage({ data: JSON.stringify({ data: { s: 'ETHBTC', c: '0.005' } }) });
    });

    // Simula uma nova mensagem com o mesmo símbolo `s`
    act(() => {
      mockWebSocket.onmessage({ data: JSON.stringify({ data: { s: 'ETHBTC', c: '0.007' } }) });
    });

    expect(result.current.values).toEqual([{ s: 'ETHBTC', c: '0.007' }]);
  });

  it('deve adicionar novos objetos ao array quando mensagens com novos símbolos são recebidas', () => {
    const { result } = renderHook(() => useBinanceSocket({ list: ['ethbtc'] }));

    act(() => {
      mockWebSocket.onopen();
    });

    // Adiciona o primeiro símbolo
    act(() => {
      mockWebSocket.onmessage({ data: JSON.stringify({ data: { s: 'ETHBTC', c: '0.005' } }) });
    });

    // Adiciona um novo símbolo
    act(() => {
      mockWebSocket.onmessage({ data: JSON.stringify({ data: { s: 'BNBBTC', c: '0.008' } }) });
    });

    expect(result.current.values).toEqual([
      { s: 'ETHBTC', c: '0.005' },
      { s: 'BNBBTC', c: '0.008' },
    ]);
  });

  it('deve fechar o WebSocket ao desmontar o componente', () => {
    const { unmount } = renderHook(() => useBinanceSocket({ list: ['ethbtc'] }));

    act(() => {
      unmount();
    });

    expect(mockWebSocket.close).toHaveBeenCalled();
  });
});
