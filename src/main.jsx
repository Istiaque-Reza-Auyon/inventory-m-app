import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ProductProvider } from './context/productContext.jsx';

function AppProviders({ children }) {
  return (
    <ProductProvider>
      {children}
    </ProductProvider>

  );
}


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppProviders>
      <App />
    </AppProviders>
  </StrictMode>,
)
