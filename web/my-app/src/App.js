import Quiz from './pages/Quiz';
import MyInvestments from './pages/MyInvestments'
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <Routes>
      <Route path="/quiz" element={<Quiz />}/>
      <Route path="/myinvestments" element={<MyInvestments />}/>
    </Routes>
  )
}

export default App;
