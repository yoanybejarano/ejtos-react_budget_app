import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
const Budget = () => {
  const { dispatch, selectedCurrency } = useContext(AppContext);
  const [totalBudget, setTotalBudget] = useState("");

  const submitEvent = (value) => {
    setTotalBudget(value);
    const item = {
      totalBudget: parseInt(value),
    };
    dispatch({
      type: "SET_TOTAL_BUDGET",
      payload: item,
    });
  };

  return (
    <div className="input-group mb-3 alert alert-primary">
      <span className="input-group-text" id="inputGroup-sizing-default">
        Budget: {selectedCurrency.symbol}
      </span>
      <input
        type="number"
        className="form-control"
        aria-label="Sizing example input"
        aria-describedby="inputGroup-sizing-default"
        value={totalBudget}
        onChange={(event) => submitEvent(event.target.value)}
      />
    </div>
  );
};
export default Budget;
