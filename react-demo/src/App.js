
import './App.css';
import Childcomponent from './Components/Childcomponent';
import FooterComponent from './Components/FooterComponent';
import HomeComponent from './Components/HomeComponent';
import MainComponent from './Components/MainComponent';
import SubmoduleComponent from './Components/SubmoduleComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Welcome to ReactJS (by using npm)</h2> 
        <HomeComponent/> 
        <MainComponent/>
        <SubmoduleComponent/>
        <Childcomponent/>
        <FooterComponent/>
      </header>
    </div>
  );
}

export default App;
