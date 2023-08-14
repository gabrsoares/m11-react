import { useState } from 'react';
import './App.css';
import Cadastro from './Pages/Cadastro/Cadastro';
import Home from './Pages/Home/Home';
import Registro from './Pages/Registro/Registro';

function App() {

  const [newData, setNewData] = useState([])

  return (
    <div className="App">
      {/* <Home /> */}
      <Cadastro setNewData={setNewData} newData={newData}/>
      <Registro newData={newData} />
    </div>
  );
}

export default App;
