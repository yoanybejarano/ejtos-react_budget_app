
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AppProvider } from './context/AppContext';
import Budget from './components/Budget';
import Remaining from './components/Remaining';
import Spent from './components/Spent';
import Deparments from './components/Deparments';
import DepartmentSelected from "./components/DepartmentSelected";
import Currency from './components/Currency';

const App = () => {
  return (
      <AppProvider>
        <div className='container'>
          <h1 className='mt-3'>Company Budget Allocation</h1>
          <div className='row mt-3'>
            <div className='col-sm'>
              <Budget />
            </div>
            <div className='col-sm'>
              <Remaining />
            </div>
            <div className='col-sm'>
              <Spent />
            </div>
            <div className='col-sm'>
              <Currency />
            </div>
          </div>
          <h3 className='mt-3'>Allocations</h3>
          <div className='row '>
            <div className='col-sm'>
              <Deparments />
            </div>
          </div>
          <h3 className='mt-3'>Change Allocations</h3>
          <div className='row mt-3'>
            <div className='col-sm'>
              <DepartmentSelected/>
            </div>
          </div>
        </div>
      </AppProvider>
  );
};
export default App;
