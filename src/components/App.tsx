// import logo from '../resources/logo.svg';
// import styles from './App.module.css';
import { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useAppSelector } from '../store/hooks';
import { Login } from './routes';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const Home = () => <div>Home</div>;

const theme = createTheme();

const App = () => {
  const user = useAppSelector((store) => store.user);
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/' element={user.isLogged ? <Home /> : <Navigate to='/login' />} />
          </Routes>
        </Suspense>
      </ThemeProvider>
    </Router>
  );
};

export default App;
