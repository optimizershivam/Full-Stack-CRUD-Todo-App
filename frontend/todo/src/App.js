
import { Route, Routes, } from 'react-router-dom';
import './App.css';
import Todoapp from './components/Todoapp';
import Tododetails from './components/Tododetails';

function App() {
  
  return (
    <div className="App">
    <Routes>
    <Route path='/' element={<Todoapp/>}/>
    <Route path='/details/:id' element={<Tododetails/>}/>
    </Routes>
    </div>
  );
}

export default App;
