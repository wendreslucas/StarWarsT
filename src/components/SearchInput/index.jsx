import { SearchWrapper, SearchInput, SearchIcon, Container } from './styles';

const SearchInputComponent = (props) => {
  const { placeholder, type, value, onChange } = props;

  return (
    <Container>
      <SearchWrapper>
        <SearchInput
          onChange={onChange}
          type={type}
          value={value}
          placeholder={placeholder}
        />
        <SearchIcon />
      </SearchWrapper>
    </Container>
  );
};

export default SearchInputComponent;
