import React, { useState } from 'react';
import { Route, Router, useLocation } from 'wouter';
import { Container } from '@mantine/core';

import Header from './components/Header';
import Footer from './components/Footer';
import neoClan from './pages/neoClan';
import Download from './pages/Download';
import Features from './pages/Features';
import Contribute from './pages/Contribute';
import './App.css';

function App() {
    const [location, setLocation] = useLocation();
    const [activeTab, setActiveTab] = useState(location);

    const handleTabChange = (newTab) => {
        console.log('handleTabChange called with newTab:', newTab);
        setActiveTab(newTab);
        setLocation(newTab);
    };

    console.log('App component rendered with location:', location);

    return (
        <div className="App">
            <Container size="md">
                <Header location={activeTab} handleTabChange={handleTabChange} />
                <Router>
                    <Route path="/" component={neoClan} />
                    <Route path="/features" component={Features} />
                    <Route path="/download" component={Download} />
                    <Route path="/contribute" component={Contribute} />
                </Router>
                <Footer location={activeTab} handleTabChange={handleTabChange} />
            </Container>
        </div>
    );
}

export default App;
