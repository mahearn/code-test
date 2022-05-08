import './styles/search-bar.css';

const SearchBar = () => {
  return (
    <div className='searchbar-container'>
      <form className='my-2 my-lg-0'>
        <input
          className='form-control mr-sm-2'
          type='search'
          placeholder='Search'
          aria-label='Search'
        />
        <button className='btn btn-outline-success my-2 my-sm-0' type='submit'>
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
