import { useState } from 'react';
import './App.css';

import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './AppRoutes';

function App() {

  const [newData, setNewData] = useState([])

  return (
    <div className="App">
      <BrowserRouter>
        <AppRoutes newData={newData} setNewData={setNewData}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
