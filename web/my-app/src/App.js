import Quiz from './pages/Quiz';
import MyInvestments from './pages/MyInvestments'
import MyPortfolio from './pages/MyPortfolio';
import Savings from './pages/Savings';
import { Routes, Route } from 'react-router-dom';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/quiz"/>} /> 
      <Route path="/quiz" element={<Quiz />}/>
      <Route path="/myinvestments" element={<MyInvestments />}/>
      <Route path="/myportfolio" element={<MyPortfolio />}/>
      <Route path="/savings" element={<Savings />}/>
      <Route path="/signup" element={<SignUp />} />
      <Route path="/signin" element={<SignIn />} />
    </Routes>
  )
}

export default App;
