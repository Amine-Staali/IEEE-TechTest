import './App.css';
import FormIEEE from './Pages/FormIEEE';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<FormIEEE />} />
      </Routes>
    </Router>
  );
}

export default App