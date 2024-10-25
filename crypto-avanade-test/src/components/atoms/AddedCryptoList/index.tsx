import { FlashList } from '@shopify/flash-list';

import { useListsContext } from '@/context';
import AddedCrypto from '@components/atoms/AddedCrypto';

function AddedCryptoList() {
  const { selectedItems } = useListsContext();
  return (
    <>
      <FlashList
        data={selectedItems}
        estimatedItemSize={20}
        renderItem={({ item }) => <AddedCrypto {...item} />}
      />
    </>
  );
}

export default AddedCryptoList;
