import logo from './logo.svg';
import './App.css';
import NamesTable from './NamesTable';
import { NamesTableClass } from './NamesTableClass';
const names = [{ 'fname': 'Anders', 'lname': 'Henriksen' }, { 'fname': 'Britta', 'lname': 'Albertsen' }, { 'fname': 'Kalle', 'lname': 'Fredborg' }]

function App() {

  return (
    <div className="App">

      <NamesTable names={names} test="Hello" />
      <NamesTableClass names={names} test="Dette er test" />
    </div>
  );
}

export default App;
