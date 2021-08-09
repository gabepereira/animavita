import { Typography } from '@material-ui/core';
import { ITVShow } from 'models/TVShow';
import { TrendingCardWrapper, Poster } from './styles';

interface Props {
  data: ITVShow;
}

const TrendingCard: React.FC<Props> = ({ data: { attributes } }) => {
  return (
    <TrendingCardWrapper>
      <Poster src={attributes.posterImage.small} alt="Poster Image" />
      <Typography component="h4" variant="h4">
        {attributes.canonicalTitle}
      </Typography>
    </TrendingCardWrapper>
  );
};

export default TrendingCard;
