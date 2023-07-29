import React, { createContext, useReducer } from "react";
// 5. The reducer - this is used to update the state, based on the action
export const AppReducer = (state, action) => {
  let new_departments = [];
  switch (action.type) {
    case "SET_TOTAL_BUDGET":
      if (action.payload.totalBudget < 20001) {
        if (action.payload.totalBudget >= state.Spent) {
          state.TotalBudget = action.payload.totalBudget;
          return {
            ...state,
          };
        } else {
          alert(`You cannot reduce the budget value lower than spending`);
        }
      } else {
        alert(`The value cannot exceed ${state.selectedCurrency}20000`);
      }
    //break;
    case "ADD_ALLOCATED_BUDGET":
      if (state.Remaining >= 10) {
        state.departments.map((department) => {
          if (department.name === action.payload.name) {
            department.allocated_budget = department.allocated_budget + 10;
          }
          new_departments.push(department);
          return true;
        });
        state.departments = new_departments;
        action.type = "DONE";
      } else {
        alert(
          `The value cannot exceed the remaining funds ${state.selectedCurrency}${state.Remaining}`
        );
      }
      return {
        ...state,
      };
    case "DECREASE_ALLOCATED_BUDGET":
      if (state.Remaining >= 0) {
        state.departments.map((department) => {
          if (department.name === action.payload.name) {
            department.allocated_budget = department.allocated_budget - 10;
          }
          new_departments.push(department);
          return true;
        });
        state.departments = new_departments;
        action.type = "DONE";
      } else {
        alert(`The value cannot be negative`);
      }
      return {
        ...state,
      };
    case "ADD_ALLOCATEDBUDGET_AMOUNT":
      if (state.Remaining >= action.payload.quantity) {
        state.departments.map((department) => {
          if (department.name === action.payload.name) {
            department.allocated_budget =
              department.allocated_budget + action.payload.quantity;
          }
          new_departments.push(department);
          return true;
        });
        state.departments = new_departments;
        action.type = "DONE";
      } else {
        alert(
          `The value cannot exceed the remaining funds ${state.selectedCurrency}${state.Remaining}`
        );
      }
      return {
        ...state,
      };
    case "DECREASE_ALLOCATEDBUDGET_AMOUNT":
      if (state.Remaining >= 0) {
        state.departments.map((department) => {
          if (department.name === action.payload.name) {
            department.allocated_budget =
              department.allocated_budget - action.payload.quantity;
          }
          new_departments.push(department);
          return true;
        });
        state.departments = new_departments;
        action.type = "DONE";
      } else {
        alert(`The value cannot be negative`);
      }
      return {
        ...state,
      };
    case "SET_CURRENCY":
      state.currencies.map((currency) => {
        if (currency.name === action.payload.currency) {
          state.selectedCurrency = currency;
        }
        return true;
      });
      return {
        ...state,
      };
    default:
      return state;
  }
};
// 1. Sets the initial state when the app loads
const initialState = {
  departments: [
    { id: "Marketing", name: "Marketing", allocated_budget: 0 },
    { id: "Finance", name: "Finance", allocated_budget: 0 },
    { id: "Sales", name: "Sales", allocated_budget: 0 },
    { id: "Human Resources", name: "Human Resources", allocated_budget: 0 },
    { id: "IT", name: "IT", allocated_budget: 0 },
  ],
  currencies: [
    { id: "Dollar", name: "Dollar", symbol: "$" },
    { id: "Pound", name: "Pound", symbol: "£" },
    { id: "Euro", name: "Euro", symbol: "€" },
    { id: "Rupee", name: "Rupee", symbol: "₹" },
  ],
};
// 2. Creates the context this is the thing our components import and use to get the state
export const AppContext = createContext();
// 3. Provider component - wraps the components we want to give access to the state
// Accepts the children, which are the nested(wrapped) components
export const AppProvider = (props) => {
  // 4. Sets up the app state. takes a reducer, and an initial state
  const [state, dispatch] = useReducer(AppReducer, initialState);
  const Remaining = state.departments.reduce((total, item) => {
    return (total = total - item.allocated_budget);
  }, state.TotalBudget || 0);
  state.Remaining = Remaining;
  state.Spent = state.TotalBudget - Remaining || 0;

  return (
    <AppContext.Provider
      value={{
        departments: state.departments,
        TotalBudget: state.TotalBudget,
        Remaining: state.Remaining,
        Spent: state.Spent,
        currencies: state.currencies,
        selectedCurrency: state.selectedCurrency || state.currencies[0],
        dispatch,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
