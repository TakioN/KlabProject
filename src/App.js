import {BrowserRouter, Routes, Route} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css'

import './App.css';
import Home from './component/Home';
import Profile from './component/Profile';
import WritingDiary from './component/WritingDiary';
// import MainPanel from './component/MainPanel';
// import SidePanel from './component/SidePanel';

function App() {
  return (
    // <div
    //   style={{
    //     display: 'flex',
    //     height: '100%'
    //   }}
    // >
    //   <SidePanel />
    //   <MainPanel />
    // </div>
    <BrowserRouter>
      <Routes>
        {/* <Route path='/login' render={() => (isLogin ? <Redirect to='/' /> : <Login />)} /> */}
        {/* <Route path='/search' element={} /> */}
        <Route path='/makediary' element={<WritingDiary />} />
        {/* <Route path='/notification' element={} /> */}
        <Route path='/profile' element={<Profile />} />
        <Route path='/' exact element={<Home />} />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
