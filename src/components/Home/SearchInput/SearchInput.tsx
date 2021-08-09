import React from 'react';
import Icon from '@mdi/react';
import { mdiMagnify } from '@mdi/js';
import { searchAnimes } from 'services/SearchService';
import { ITVShow } from 'models/TVShow';
import ResultCard from 'components/UI/ResultCard';
import {
  InputWrapper,
  Input,
  InputDropdownWrapper,
  InputDropdown,
} from './styles';

const FETCH_LIMIT = 3;

const SearchInput = () => {
  const [results, setResults] = React.useState<ITVShow[]>([]);

  const handleSearch = async (value: string) => {
    console.log(value);

    try {
      const { data } = await searchAnimes(value, FETCH_LIMIT);

      console.log(data);

      setResults(data.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div style={{ zIndex: 1 }}>
      <InputWrapper>
        <Input
          onChange={(e) => handleSearch(e.target.value)}
          placeholder="Search your favorite animes"
        />

        <Icon path={mdiMagnify} size={2} />
      </InputWrapper>

      {!!results.length && (
        <InputDropdownWrapper>
          <InputDropdown>
            {results.map(({ id, attributes }, i) => (
              <ResultCard
                key={id}
                image={attributes.posterImage.tiny}
                title={attributes.canonicalTitle}
                description={attributes.description}
                style={{
                  marginBottom: i === FETCH_LIMIT - 1 ? 0 : 12,
                }}
              />
            ))}
          </InputDropdown>
        </InputDropdownWrapper>
      )}
    </div>
  );
};

export default SearchInput;
