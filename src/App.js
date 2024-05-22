import {BrowserRouter, Routes, Route} from 'react-router-dom';


import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

import Home from './component/Home';
import Profile from './component/Profile';
import WritingDiary from './component/WritingDiary';
import Search from './component/Search';
// import MainPanel from './component/MainPanel';
// import SidePanel from './component/SidePanel';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
    {/* <BrowserRouter> */}
      <Routes>
        {/* <Route path='/login' render={() => (isLogin ? <Redirect to='/' /> : <Login />)} /> */}
        <Route path='/search' element={<Search />} />
        <Route path='/makediary' element={<WritingDiary />} />
        {/* <Route path='/notification' element={} /> */}
        <Route path='/profile' element={<Profile />} />
        <Route path='/' exact element={<Home />} />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
