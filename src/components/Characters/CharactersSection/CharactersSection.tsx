import React from 'react';
import { Typography } from '@material-ui/core';
import DataList from 'components/UI/DataList';
import { searchCharacters } from 'services/CharacterService';
import { ResultItemProps } from 'components/UI/ResultCard';
import { CharactersSectionWrapper } from './styles';

const FETCH_LIMIT = 12;

const CharactersSection = () => {
  const [loading, setLoading] = React.useState(true);
  const [results, setResults] = React.useState<ResultItemProps[]>([]);

  React.useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const { data } = await searchCharacters({ limit: FETCH_LIMIT });

        const parsedData = data.data.map(({ id, attributes }) => ({
          id,
          image: attributes.image.original,
          title: attributes.canonicalName,
          description: attributes.description,
          otherNames: attributes.otherNames,
        }));

        setResults(parsedData);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchCharacters();
  }, []);

  if (loading) {
    return null;
  }

  return (
    <section>
      <CharactersSectionWrapper data-testid="CharactersSection">
        <Typography className="title" component="h4" variant="h4">
          CHARACTERS
        </Typography>

        <DataList data={results} />
      </CharactersSectionWrapper>
    </section>
  );
};

export default CharactersSection;
