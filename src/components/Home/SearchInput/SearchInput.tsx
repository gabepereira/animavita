import Icon from '@mdi/react';
import { mdiMagnify } from '@mdi/js';
import { InputWrapper, Input } from './styles';

const SearchInput = () => {
  return (
    <InputWrapper>
      <Input placeholder="Search your favorite animes" />

      <Icon path={mdiMagnify} size={2} />
    </InputWrapper>
  );
};

export default SearchInput;
