import {BrowserRouter, Routes, Route, Router} from 'react-router-dom'
import Home from './Home'
import View from './View'
import Create from './Create'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/Home"element={<Home/>}></Route>
      <Route path="/View"element={<View/>}></Route>
      <Route path="/Create"element={<Create/>}></Route>

    </Routes>
    </BrowserRouter>
    
  )
}

export default App