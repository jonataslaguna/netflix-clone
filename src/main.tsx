import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { BrowserRouter } from 'react-router-dom';
import MoviesProvider from './Context/ProviderContext.tsx';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <MoviesProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </MoviesProvider>
)
