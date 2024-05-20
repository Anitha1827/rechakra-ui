import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Dashboard from './Pages/Dashboard.jsx';
import AdminDashboard from './Pages/AdminDashboard.jsx';

function App() {
  return (
    <div className="">
      <Routes>
        <Route exact path='/' element={<Dashboard/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/admin' element={<AdminDashboard/>}/>
      </Routes>
    </div>
  );
}

export default App;
