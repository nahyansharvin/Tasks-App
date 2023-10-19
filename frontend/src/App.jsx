import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import {AddTask, Home, UpdateTask} from './pages';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/add' element={<AddTask />} />
          <Route path='/update' element={<UpdateTask />} />
        </Routes>
        <Toaster />
      </BrowserRouter>
    </div>
  )
}

export default App
