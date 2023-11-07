import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import * as Pages from './pages';
import Nav from './layouts/Nav';

import './App.css';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route index element={<Pages.HomePage />} />
          <Route path="/characters" element={<Pages.CharactersPage />} />
          <Route path="/characters/:id" element={<Pages.IndividualPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
