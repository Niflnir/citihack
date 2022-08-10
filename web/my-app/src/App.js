import Quiz from './pages/Quiz';
import MyInvestments from './pages/MyInvestments'
import MyPortfolio from './pages/MyPortfolio';
import Savings from './pages/Savings';
import { Routes, Route, Navigate } from 'react-router-dom';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/quiz"/>} /> 
      <Route path="/quiz" element={<Quiz />}/>
      <Route path="/myinvestments" element={<MyInvestments />}/>
      <Route path="/myportfolio" element={<MyPortfolio />}/>
      <Route path="/savings" element={<Savings />}/>
    </Routes>
  )
}

export default App;
