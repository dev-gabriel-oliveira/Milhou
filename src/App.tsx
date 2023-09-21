import { BrowserRouter } from 'react-router-dom';

import './App.css';

import Header from './components/header';
import AppRoutes from './routes/routes';
import Footer from './components/footer';

export default function App() {
  return (
    <>
    <BrowserRouter>
      <Header/>
      
      <div id="main">
        <AppRoutes />
      </div>
      <Footer />

    </BrowserRouter>
    </>
  )
}