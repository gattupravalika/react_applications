import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      const [haserror,seterrors]=useState(false);

      const[emplye,setemplye]=useState([]);
      async function fetchData() {

       const response=await fetch("http://localhost:3000/employees")

      response.json()

  .then(response=>setemplye(response))

  .catch(err=>seterrors(err));
}

useEffect(()=>{

    fetchData();

})
    </div>


  );
}

export default App;
