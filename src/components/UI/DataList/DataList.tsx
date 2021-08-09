import ResultCard, { ResultItemProps } from 'components/UI/ResultCard';
import { DataListWrapper } from './styles';

export interface Props {
  data: ResultItemProps[];
}

const DataList: React.FC<Props> = ({ data }) => {
  return (
    <DataListWrapper data-testid="DataList">
      {data.map(({ id, ...props }) => (
        <ResultCard
          key={id}
          style={{ marginBottom: 24, width: 300 }}
          {...props}
        />
      ))}
    </DataListWrapper>
  );
};

export default DataList;
