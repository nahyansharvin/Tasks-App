import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {AddTask, Home} from './pages';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/add' element={<AddTask />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
