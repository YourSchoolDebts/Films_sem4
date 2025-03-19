
import './App.css';
import React from 'react';
import { Header } from './header/header';
import { Footer } from './footer/footer';
import { Main } from './main';

function App() {
  return (
    <React.Fragment>
      <Header />
      <Main />
      <Footer />
    </React.Fragment>
  );
}

export default App;
