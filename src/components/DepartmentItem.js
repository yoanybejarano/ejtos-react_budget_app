import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { FaMinusCircle, FaPlusCircle } from "react-icons/fa";

const centerText = {
  textAlign: "center",
};

const DepartmentItem = (props) => {
  const { dispatch, selectedCurrency } = useContext(AppContext);
  const handleAddItem = () => {
    const item = {
      name: props.name,
    };
    dispatch({
      type: "ADD_ALLOCATED_BUDGET",
      payload: item,
    });
  };
  const handleDecreaseItem = () => {
    const item = {
      name: props.name,
    };
    dispatch({
      type: "DECREASE_ALLOCATED_BUDGET",
      payload: item,
    });
  };
  return (
    <tr>
      <td>{props.name}</td>
      <td style={centerText}>
        {selectedCurrency.symbol}{props.allocated_budget}
      </td>
      <td style={centerText}>
        <FaPlusCircle size="2.2em" color="green" onClick={handleAddItem}></FaPlusCircle>
      </td>
      <td style={centerText}>
        <FaMinusCircle size="2.2em" color="red" onClick={handleDecreaseItem}></FaMinusCircle>
      </td>
    </tr>
  );
};
export default DepartmentItem;
