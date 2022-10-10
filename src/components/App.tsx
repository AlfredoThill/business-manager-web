import logo from '../resources/logo.svg';
import styles from './App.module.css';
import { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useAppSelector } from '../store/hooks';
import { Login } from './routes';

const Home = () => {
  return (
    <div className={styles.App}>
      <header className={styles['App-header']}>
        <img src={logo} className={styles['App-logo']} alt='logo' />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className={styles['App-link']}
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

const App = () => {
  const user = useAppSelector((store) => store.user);
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/' element={user.isLogged ? <Home /> : <Navigate to='/login' />} />
          {/* <Route path='/' element={<Home />} /> */}
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
