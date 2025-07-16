// App.jsx
import React from 'react';
import { useLocation } from 'react-router-dom';
// o'zingizning Navbar joylashgan joyiga qarab yo'lni to'g'rilang
import AppRoutes from './AppRoutes';
import { Navbar } from './components/Navbar/Navbar';

const App = () => {
  const location = useLocation();
  const hideNavbarRoutes = ['/signin', '/register'];
  const shouldShowNavbar = !hideNavbarRoutes.includes(location.pathname);

  return (
    <>
      {shouldShowNavbar && <Navbar />}
      <main>
        <AppRoutes />
      </main>
    </>
  );
};

export default App;
