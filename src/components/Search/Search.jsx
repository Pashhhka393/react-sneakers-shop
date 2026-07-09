import "./search.css";

const Search = ({ search, setSearch }) => {
  return (
    <div className="search">
      <h1>Все кроссовки</h1>
      <div className="search-item">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-input"
          type="text"
          placeholder="Поиск..."
        />
        <div className="search-image">
          <img src="./search.svg" alt="search-img" />
        </div>
      </div>
    </div>
  );
};

export default Search;
