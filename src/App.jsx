import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import 'bootstrap/dist/js/bootstrap.bundle';
import Home from './components/home/Home';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import About from './components/about/About';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';

const router = createBrowserRouter([
  {
    path: '/', element: <Home />, children: [
      { path: '/', element: <About /> },
      { path: 'about', element: <About /> },
      { path: 'portfolio', element: <Portfolio /> },
      { path: 'contact', element: <Contact /> },
      
      {
        path: '*', element: <div className='d-flex justify-content-center align-items-center vh-100'>
          <h1>Not Found</h1>
        </div>
      },
    ]
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
