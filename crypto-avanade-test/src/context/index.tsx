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
  createdList: [] as string[],
  setCreatedList: (() => void 0) as Dispatch<SetStateAction<[] | string[]>>,
  fullList: [] as CryptoSymbol[],
  setFullList: (() => void 0) as Dispatch<SetStateAction<[] | CryptoSymbol[]>>,
  selectedItems: [] as string[],
  setSelectedItems: (() => void 0) as Dispatch<SetStateAction<[] | string[]>>,
});

export const ListsContext: FC<PropsWithChildren> = ({ children }) => {
  const [createdList, setCreatedList] = useState<[] | string[]>([]);
  const [selectedItems, setSelectedItems] = useState<[] | string[]>([]);
  const [fullList, setFullList] = useState<[] | CryptoSymbol[]>([]);

  return (
    <Context.Provider
      value={{
        createdList,
        setCreatedList,
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
