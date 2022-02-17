import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Cart: React.LazyExoticComponent<React.FC> = lazy(() => import('./pages/cart'));
const Home: React.LazyExoticComponent<React.FC> = lazy(() => import('./pages/home'));

export const AppRoutes: React.FC = (): JSX.Element => {
  return (
    <Router>
      <Routes>
        <Route
          path="/cart"
          element={
            <Suspense fallback={<>...</>}>
              <Cart />
            </Suspense>
          }
        />
        <Route
          path="/"
          element={
            <Suspense fallback={<>...</>}>
              <Home />
            </Suspense>
          }
        />
      </Routes>
    </Router>
  );
};
