import {RefreshControlProps} from 'react-native';
import {DataType} from '../../models/useGetMarketCoins/types';

export interface HomeViewProps {
  filteredData: DataType[] | null | undefined;
  hasError: boolean | undefined;
  handleSearch: (text: string) => void;
  onHandleKeyboardDismiss: () => void;
  onHandleTryAgain: () => void;
  onRefresh: () => void;
  isLoading?: boolean;
  error?: boolean;
  refreshControl?: React.ReactElement<RefreshControlProps> | undefined;
}
