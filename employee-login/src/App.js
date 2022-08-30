
import './App.css';
import Dashboard from './Components/Dashboard';
import Login from './Components/Login';
import NavBar from './Components/NavBar';
import Register from './Components/Register';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar />
      
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/dashBoard" element={<Dashboard />} />
          <Route path="/register" element={<Register />} />
        </Routes>
       
      </BrowserRouter>
    </div>
  );
}

export default App;
