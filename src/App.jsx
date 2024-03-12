import './App.css';
import Bala from './components/Bala';
import Tvenkinys from './components/secondTask/Tvenkinys';
import Jura from './components/thirdTask/Jura';
import Vandenynas from './components/fourthTask/Vandenynas';
import Pasaulis from './components/fifttask/Pasaulis';

function App() {
  return (
    <div className="App">
      <h2>Pirma uzduotis:</h2>
      <Bala/>
      <h2>Antra uzduotis:</h2>
      <Tvenkinys/>
      <h2>Trecia uzduotis:</h2>
      <Jura/>
      <h2>Ketvirta uzduotis:</h2>
      <Vandenynas/>
      <h2>Penkta uzduotis:</h2>
      <Pasaulis color="green"/>
    </div>
  );
}

export default App;
