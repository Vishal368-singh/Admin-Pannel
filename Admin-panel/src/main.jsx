import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "@fortawesome/fontawesome-free/css/all.min.css";

import Home from './Navigation/Dashboard/Home';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Home/>
  </StrictMode>

)
