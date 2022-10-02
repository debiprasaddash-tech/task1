import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import HeadandTail from './components/HeadandTail';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/h&t' element={<HeadandTail/>}/>

    </Routes>
    </>
  );
}

export default App;
