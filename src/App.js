import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import GameBoard from './components/GameBoard/GameBoard';
import PlayState from './components/PlayState/PlayState';


function App() {


  return (
    <div className="App">
      <div className='MainBoard'>
       <h1 className='page-title'>TIC TAC TOE</h1>
        <Routes >
          <Route path='GameBoard' element={ <GameBoard />} />
          <Route path='/' element={ <PlayState />}/>
        </Routes>
        </div>        
        <Footer title={'Created By Saurabh Jaiswal'} />
    </div>
  );
}

export default App;
