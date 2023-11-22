import logo from './logo.svg';
import './App.css';
import Home from './components/home/Home';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import CountryDetails from './components/countryDetails/CountryDetails';

const router = createBrowserRouter([
  {
    path:'/home',
    element:<Home></Home>
  },
   {
     path:'/detail/:countryName',
    element:<CountryDetails></CountryDetails>
   }
])
function App() {
  return (
    <div className="App">
      <h1>font page</h1>
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
