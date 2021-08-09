import ResultCard, { ResultItemProps } from 'components/UI/ResultCard';
import { DataListWrapper } from './styles';

interface Props {
  data: ResultItemProps[];
}

const DataList: React.FC<Props> = ({ data }) => {
  return (
    <DataListWrapper>
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
