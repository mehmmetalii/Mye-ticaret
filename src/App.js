
import { Container } from 'semantic-ui-react';
import './App.css';
import Dashboard from './layouts/Dashboard';
import 'semantic-ui-css/semantic.min.css'
import Navi from './layouts/Navi'
import Categories from './layouts/Categories';
import SignedOut from './layouts/SignedOut';
import { Route, Routes,Router } from "react-router-dom";

function App() {
  return (
    <div className="App">
     
      <Navi/>
      <Container className="main">
      <Dashboard/>
      </Container>
    
     
    </div>
  );
}

export default App;
