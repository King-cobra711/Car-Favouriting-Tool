const Favourites = ({ favourites, setFavourites }) => {
  const listFavourites = (favourites) => {
    return favourites.map((f, key) => (
      <li className="list-group-item" key={key}>
        {f}
        <button
          className="btn btn-outline-danger float-end"
          onClick={() => removeFromFavourites(f)}
        >
          <i className="bi bi-dash"></i>
        </button>
      </li>
    ));
  };
  const removeFromFavourites = (deleteCar) => {
    setFavourites(favourites.filter((item) => item !== deleteCar));
  };

  return (
    <ul className="list-group text-start">{listFavourites(favourites)}</ul>
  );
};

export default Favourites;
