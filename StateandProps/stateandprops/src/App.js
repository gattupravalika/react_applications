
import './App.css';
// import Employee from './components/Employee';
 import Product from './components/Classofstatesandprops';


function App() {
  return (
    <div className="App">
          
          <h1>Product Information</h1>
        <hr/>
       <Product id="1" name="abc" qty="30" price="300"/>
       <Product id="2" name="pqr" qty="50" price="500"/>
       <Product id="3" name="xyz" qty="90" price="800"/> 
        {/* <h1>Employee Information</h1>
        <hr/>
       <Employee id="1" name="prava"/>
       <Employee id="2" name="siri"/>
       <Employee id="3" name="Baghya"/> */}
    </div>
  );
}

export default App;

