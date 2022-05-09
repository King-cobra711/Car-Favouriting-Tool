import { useState } from "react";
import cars from "../content/cars";

const MakeAndModel = ({ favourites, setFavourites }) => {
  // state
  const [carMake, setCarMake] = useState(cars[0].make);
  const [query, setQuery] = useState("");

  // functions

  const addToFavourites = (cmk, cmdl) => {
    let newFav = cmk + " " + cmdl;
    if (favourites.includes(newFav)) {
      // set error
    } else {
      setFavourites([...favourites, newFav]);
    }
  };

  const ListCarMake = (cars) => {
    return cars.map((c, key) => <option key={key}>{c.make}</option>);
  };

  const ListCarModel = (cars, carMake) => {
    // array of models for a particular make
    let models = cars.find((c) => c.make === carMake).model;

    let filteredModels = [];

    models.filter((model) => {
      // can also use .includes() instead of match()
      if (model.toLowerCase().match(query.toLowerCase())) {
        filteredModels.push(model);
      }
      return filteredModels;
    });

    return filteredModels.map((mdl, k) => {
      return (
        <li className="list-group-item" key={k}>
          {mdl}
          <button
            className="btn btn-outline-success float-end"
            onClick={() => addToFavourites(carMake, mdl)}
          >
            <i className="bi bi-plus "></i>
          </button>
        </li>
      );
    });
  };

  return (
    <div>
      <div className="row">
        <div className="input-group mb-3">
          <select
            className="form-select"
            id="inputGroupSelect01"
            onChange={(e) => setCarMake(e.target.value)}
          >
            {ListCarMake(cars)}
          </select>
        </div>
      </div>
      <div className="row">
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon2">
            <i className="bi bi-search"></i>
          </span>
          <input
            className="form-control"
            type="text"
            placeholder="filter car model..."
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
        <ul className="list-group text-start">{ListCarModel(cars, carMake)}</ul>
      </div>
    </div>
  );
};

export default MakeAndModel;
