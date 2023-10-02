import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Home from './Pages/Home/Home';
import './App.css';

const App = () => {
  return (
    <div className="app-container">
      <Router>
        <Navbar />
        <main>
          <Switch>
            <Route path="/" exact component={Home} />
            <Redirect to="/" />
          </Switch>
        </main>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
