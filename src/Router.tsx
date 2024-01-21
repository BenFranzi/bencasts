import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import Home from '@/app/Home';
import Layout from '@/app/Layout';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={ <Layout/> } path='/'>
          <Route element={ <Home /> } path='/' />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}



