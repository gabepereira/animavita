import React from 'react';
import { Typography } from '@material-ui/core';
import DataList from 'components/UI/DataList';
import { searchManga } from 'services/MangaService';
import { ResultItemProps } from 'components/UI/ResultCard';
import { MangaSectionWrapper } from './styles';

const FETCH_LIMIT = 12;

const MangaSection = () => {
  const [loading, setLoading] = React.useState(true);
  const [results, setResults] = React.useState<ResultItemProps[]>([]);

  React.useEffect(() => {
    const fetchManga = async () => {
      try {
        const { data } = await searchManga({ limit: FETCH_LIMIT });

        const parsedData = data.data.map(({ id, attributes }) => ({
          id,
          image: attributes.posterImage.original,
          title: attributes.canonicalTitle,
          description: attributes.description,
        }));

        setResults(parsedData);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchManga();
  }, []);

  if (loading) {
    return null;
  }

  return (
    <section>
      <MangaSectionWrapper>
        <Typography className="title" component="h4" variant="h4">
          Manga
        </Typography>

        <DataList data={results} />
      </MangaSectionWrapper>
    </section>
  );
};

export default MangaSection;
