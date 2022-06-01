import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import NewBet from './pages/NewBet';
import BetList from './pages/BetList';

function App() {
  return (
    <div className='App'>
      <div>
      <h1>Ethereum Bet</h1>
      </div>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/NewBet' element={<NewBet />} />
                <Route path='/BetList' element={<BetList />} />
            </Routes>       
    </div>
)
}

export default App;