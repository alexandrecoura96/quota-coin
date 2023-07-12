import {DataType} from '../../models/useGetMarketCoins/types';

export interface DataContextValue {
  data: Array<DataType> | null;
  isLoading: boolean;
  hasError: boolean;
  fetchMarketCoinsList: () => Promise<void>;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}
