import React from 'react';
import '../src/styles/global.scss';
import HomePage from "./pages/HomePage/HomePage";
import PageNav from "./components/PageNav/PageNav";


function App() {
  return (
    <>
      <PageNav/>
      <HomePage/>
    </>
  );
}

export default App;
