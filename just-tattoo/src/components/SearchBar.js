import "./SearchBar.css";
function SearchBar(props) {
    const {valueSearchText, onValueChange} = props
  return (
    <div className="app-search">
      <input
        className="app-search-input"
        type="text"
        placeholder="Search here !!!"
        value={valueSearchText}
        onChange={(event) => {
            onValueChange(event.target.value);
        }}
      ></input>
    </div>
  );
}
export default SearchBar;