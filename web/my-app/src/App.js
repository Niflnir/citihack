import Quiz from './pages/Quiz';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <Routes>
      <Route path="/quiz" element={<Quiz />}/>
    </Routes>
  )
}

export default App;
