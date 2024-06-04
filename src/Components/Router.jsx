import React, { Suspense } from 'react';
import Navigation from './Navigation';
import Kardex from './Kardex/Menu';
import Inventario from './Inventario/Menu';
import History from './History/Menu';
import CRM from './CRM/Menu';


const routes = {
  '/': {
    component: Navigation,
    requiresAuth: "false"
  },
  '/Kardex': {
    component: Kardex,
    requiresAuth: "true"
  },
  '/Inventario': {
    component: Inventario,
    requiresAuth: "true"
  },
  '/History': {
    component: History,
    requiresAuth: "true"
  },
  '/CRM': {
    component: CRM,
    requiresAuth: "true"
  },
}

function Router() {
  const autenticado = localStorage.getItem("autenticado");
  const page = window.location.pathname;
  const requires = routes[page].requiresAuth
  console.log('Nesecita', requires);
  console.log('Tiene', autenticado);
  if (requires === autenticado) {
      const CurrentPage = routes[page].component;
      return (
        <div>
          <Navigation />
          <div className="container mt-3">
            <div className="p-5 mb-4 bg-body-tertiary rounded-3">
              <Suspense fallback={<div>Loading...</div>}>
                <CurrentPage />
              </Suspense>
            </div>
          </div>
        </div>
      );
    }else{
      return (
        <div>
          <Navigation />
          <div className="container mt-3">
            <div className="p-5 mb-4 bg-body-tertiary rounded-3">
              <Suspense fallback={<div>Loading...</div>}>
                <Navigation />
                <h1>Nesecita hacer Log In</h1>
              </Suspense>
            </div>
          </div>
        </div>
      );
    }
  return <h1>404 Página no encontrada 🥲</h1>;
}

export default Router;