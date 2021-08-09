/* eslint-disable @next/next/no-img-element */
import { Typography, Button } from '@material-ui/core';
import { ITVShow } from 'models/TVShow';
import { TrendingHeroWrapper, Cover, InfoBackdrop, InfoPanel } from './styles';

interface Props {
  data: ITVShow;
}

const DESCRIPTION_CHAR_LIMIT = 200;

const TrendingHero: React.FC<Props> = ({ data: { attributes } }) => {
  const formatedDescription = attributes.description.substring(
    0,
    DESCRIPTION_CHAR_LIMIT
  );

  return (
    <TrendingHeroWrapper>
      <Cover src={attributes.coverImage.original} alt="Cover Image" />

      <InfoBackdrop>
        <InfoPanel>
          <Typography className="trending" component="h2" variant="h5">
            <span className="trending-indicator">#1</span> Trending
          </Typography>

          <Typography className="title" component="h2" variant="h1">
            {attributes.canonicalTitle}
          </Typography>

          <Typography className="description" variant="h5">
            {`${formatedDescription}...`}
          </Typography>

          <Button size="large" variant="contained">
            Watch now
          </Button>
        </InfoPanel>
      </InfoBackdrop>
    </TrendingHeroWrapper>
  );
};

export default TrendingHero;
