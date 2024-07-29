import './App.css';
import { Router, Route, Link, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import { Toaster } from 'react-hot-toast';
import user from './store/user';
import { useSelector } from 'react-redux';

function App() {
  
  const {isLogin} = useSelector(state => state.user)
  
  return (
    <>
      <Toaster position='top-right' />
      {isLogin && <h1>AAAAAAAAAAAAAAAAA</h1>}
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
      </Routes>
    </>
  );
}

export default App;
