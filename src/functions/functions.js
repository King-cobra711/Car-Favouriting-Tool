export const ListCarMake = (cars) => {
  return cars.map((c, key) => <option key={key}>{c.make}</option>);
};
export const ListCarModel = (cars, carMake) =>
  cars.find((c) => c.make === carMake).model.map((mdl) => <li>{mdl}</li>);
