import { createContext, Dispatch, FC, PropsWithChildren, SetStateAction, useState } from 'react';

import { CryptoSymbol } from '@/types/getSymbols';

const Context = createContext({
  lists: [] as CryptoSymbol[],
  setLists: (() => void 0) as Dispatch<SetStateAction<[] | CryptoSymbol[]>>,
});

export const ListsContext: FC<PropsWithChildren> = ({ children }) => {
  const [lists, setLists] = useState<[] | CryptoSymbol[]>([]);

  return (
    <Context.Provider
      value={{
        lists,
        setLists,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default ListsContext;
