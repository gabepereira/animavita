import React from 'react';
import { useScreenClass } from 'react-grid-system';
import { Typography } from '@material-ui/core';
import { getTrending } from 'services/SearchService';
import { ITVShow } from 'models/TVShow';
import TrendingHero from 'components/Home/TrendingHero';
import TrendingCard from 'components/Home/TrendingCard';
import { OtherTrendingsWrapper, TrendingList } from './styles';

const Trending = () => {
  const screenClass = useScreenClass();

  const [loading, setLoading] = React.useState(true);
  const [trending, setTrending] = React.useState<ITVShow[]>([]);

  React.useEffect(() => {
    const fetchTrending = async () => {
      try {
        const { data } = await getTrending();
        console.log(data);

        setTrending(data.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchTrending();
  }, []);

  const [mostTrending, ...otherTrendings] = trending;

  if (loading) {
    return null;
  }

  return (
    <section>
      {/* Main trending tv show section */}
      {mostTrending && <TrendingHero data={mostTrending} />}

      {/* Other trending tv shows section */}
      <OtherTrendingsWrapper>
        <Typography className="title" component="h4" variant="h4">
          TRENDING NOW
        </Typography>

        <TrendingList className={screenClass}>
          {otherTrendings.map((tvShow) => (
            <TrendingCard key={tvShow.id} data={tvShow} />
          ))}
        </TrendingList>
      </OtherTrendingsWrapper>
    </section>
  );
};

export default Trending;
