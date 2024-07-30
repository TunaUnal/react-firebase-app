import './App.css';
import { Route,Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import { Toaster } from 'react-hot-toast';
import { useSelector } from 'react-redux';
import UpdatePage from './pages/UpdatePage';

function App() {
   
  return (
    <>
      <Toaster position='top-right' />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/update' element={<UpdatePage />} />
      </Routes>
    </>
  );
}

export default App;
