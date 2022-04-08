import './App.css';
import Registration from './Registration';
import Authorization from './Autorization';
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {







  return (
    <BrowserRouter>
      <div className="App">
        <Routes >
          <Route path="/" element={<Registration />} />
          <Route path="/autorization" element={<Authorization />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
