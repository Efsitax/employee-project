import './App.css';
import Header from './Header'
import Employee from './pages/Employee';
import EmployeeInfo from './pages/EmployeeInfo';
import EmployeeAdd from './pages/EmployeeAdd';
import EmployeeUpdate from './pages/EmployeeUpdate';
import { createBrowserRouter, Outlet, RouterProvider} from 'react-router-dom';

const Dashboard = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
    children: [
      {
        path: "/",
        element: <Employee />
      },
      {
        path: "/employeeInfo/:id",
        element: <EmployeeInfo />
      },
      {
        path: "/employeeAdd",
        element: <EmployeeAdd />
      },
      {
        path: "/employeeUpdate/:id",
        element: <EmployeeUpdate />
      }
    ]
  },
]);

function App() {
  
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
