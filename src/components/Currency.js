import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
const Currency = (props) => {
  const { dispatch, currencies } = useContext(AppContext);

  const submitEvent = (value) => {
    const item = {
      currency: value,
    };
    dispatch({
      type: "SET_CURRENCY",
      payload: item,
    });
  };

  return (
    <div className="alert alert-success">
      <span>Currency:&nbsp;</span>
      <select
        className="custom-select"
        id="inputGroupSelect01"
        onChange={(event) => submitEvent(event.target.value)}
      >
        {/* <option defaultValue>Choose...</option> */}
        {currencies.map((currency, index) => (
          <option key={index + 1} value={currency.name} name={currency.name}>
            {currency.symbol} {currency.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Currency;
