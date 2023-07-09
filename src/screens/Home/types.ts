import {DataType} from '../../models/useGetMarketCoins/types';

export interface HomeViewProps {
  data: DataType[] | null | undefined;
  hasError: boolean | undefined;
}
