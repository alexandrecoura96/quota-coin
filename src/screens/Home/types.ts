import {DataType} from '../../models/useGetMarketCoins/types';

export interface HomeViewProps {
  filteredData: DataType[] | null | undefined;
  hasError: boolean | undefined;
  handleSearch: (text: string) => void;
  onHandleKeyboardDismiss: () => void;
}
