import { createRoot } from 'react-dom/client';
import {BrowserRouter} from "react-router-dom";
import PersonalNotesApp from "./component/PersonalNotesApp.jsx";

import './styles/style.css';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
      <PersonalNotesApp />
  </BrowserRouter>
);
