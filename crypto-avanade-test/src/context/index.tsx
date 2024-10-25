import {
  createContext,
  Dispatch,
  FC,
  PropsWithChildren,
  SetStateAction,
  useContext,
  useState,
} from 'react';

import { CryptoSymbol } from '@/types/getSymbols';

const Context = createContext({
  lists: [] as CryptoSymbol[],
  setLists: (() => void 0) as Dispatch<SetStateAction<[] | CryptoSymbol[]>>,
  fullList: [] as CryptoSymbol[],
  setFullList: (() => void 0) as Dispatch<SetStateAction<[] | CryptoSymbol[]>>,
  selectedItems: [] as CryptoSymbol[],
  setSelectedItems: (() => void 0) as Dispatch<SetStateAction<[] | CryptoSymbol[]>>,
});

export const ListsContext: FC<PropsWithChildren> = ({ children }) => {
  const [lists, setLists] = useState<[] | CryptoSymbol[]>([]);
  const [selectedItems, setSelectedItems] = useState<[] | CryptoSymbol[]>([]);
  const [fullList, setFullList] = useState<[] | CryptoSymbol[]>([]);

  return (
    <Context.Provider
      value={{
        lists,
        setLists,
        selectedItems,
        setSelectedItems,
        fullList,
        setFullList,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useListsContext = () => useContext(Context);
