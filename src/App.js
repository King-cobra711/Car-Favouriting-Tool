import { useState } from "react";

// CSS
import "./App.css";

// Components
import MakeAndModel from "./components/makeAndModel";
import Favourites from "./components/favourites";

function App() {
  // state
  const [favourites, setFavourites] = useState([]);

  return (
    <div className="App">
      <div className="container">
        <div className="row m-3">
          <h1>Car Favouriting Tool</h1>
        </div>
        <div className="row m-1">
          <div className="col-lg-6 p-2">
            <h3 className="mb-3">Search Cars</h3>
            <MakeAndModel
              favourites={favourites}
              setFavourites={setFavourites}
            />
          </div>
          <div className="col-lg-6 p-2">
            <h3 className="mb-3">Favourite Cars</h3>
            <Favourites favourites={favourites} setFavourites={setFavourites} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
