
import './App.css';
import CustomerList from './components/CustomerList';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import CreateCustomer from './components/CreateCustomer';
import UpdateCustomer from './components/UpdateCustomer';
import ViewCustomer from './components/ViewCustomer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
     <ul>
      <li><Link to="/create">CreateCustomer</Link></li>
      <li><Link to="/list">CustomerList</Link></li>
     </ul>
      
        <Routes>
          <Route path="/create" element={<CreateCustomer />}/>
          <Route path="/update/:id" element={<UpdateCustomer />} />
          <Route path="/list" element={<CustomerList />}/>
          <Route path="/view/:id" element={<ViewCustomer />} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
