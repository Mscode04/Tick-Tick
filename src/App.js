import 'bootstrap/dist/css/bootstrap.css';
import SideBar from './Components/SideBar';
import MidilBar from './Components/MidilBar';
import Main from './Components/Main';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import Complete from './Pages/Complete';
import Day from './Pages/Day';
import Week from './Pages/Week';
import Trash from './Pages/Trash';
import Inbox from './Pages/Inbox';
import { useState } from 'react';
function App() {
  const [lists, setlist] = useState([])
  var arr=[]
  return (
    <Router>
      <div className="App">
        <SideBar />
        <MidilBar />
        <Routes>
          <Route path='/' element={<Main lists={lists} setLists={setlist} arr={arr}/>} />
          <Route path='/In' element={<Inbox />}/>
          <Route path='/Dy' element={<Day days={lists}/>}/>
          <Route path='/Wk' element={<Week />} />
          <Route path='/Cm' element={<Complete lists={lists} />} />
          <Route path='/Tr' element={<Trash arr={arr}/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;



