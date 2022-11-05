/* eslint-disable react/jsx-pascal-case */
import logo from './logo.svg';
import './App.css';
import Sectiontwo_qone from './components/sectiontwo_qone';
import Sectiontwo_qtwo from './components/sectiontwo_qtwo';
import Sectionthree_qone from './components/sectionthree_qone';
import User_card from './components/user_card';

function App() {
  return (
    <div className="App">
     <Sectiontwo_qone /><br />
     <Sectiontwo_qtwo /><br />
     <Sectionthree_qone /><br />
     <User_card />
    </div>
  );
}

export default App;
