import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import DepartmentItem from "./DepartmentItem";

const centerText = {
  textAlign: "center",
};

const Deparments = () => {
  const { departments } = useContext(AppContext);
  return (
    <table className="table">
      <thead className="thead-light">
        <tr>
          <th scope="col">Departments</th>
          <th scope="col"  style={centerText}>Allocated Budget</th>
          <th scope="col"  style={centerText}>Increase by 10</th>
          <th scope="col"  style={centerText}>Decrease by 10</th>
        </tr>
      </thead>
      <tbody>
        {departments.map((department) => (
          <DepartmentItem
            id={department.id}
            key={department.id}
            name={department.name}
            allocated_budget={department.allocated_budget}
          />
        ))}
      </tbody>
    </table>
  );
};
export default Deparments;
