import React from 'react';
import { Link, Route, Router, useLocation } from 'wouter';
import { Container, Tabs, Tab } from '@mantine/core';

import neoClan from './pages/neoClan';
import Download from './pages/Download';
import Features from './pages/Features';
import Contribute from './pages/Contribute';
import './App.css';

function App() {
    const [location, setLocation] = useLocation();

    const handleTabChange = (event, newTab) => {
        setLocation(newTab);
    };

    return (
        <div className="App">
            <Container maxWidth="md">
                <header>
                    <Tabs value={location} onChange={handleTabChange}>
                        <Tab label="neoClan" value="/" component={Link} to="/" />
                        <Tab label="Features" value="/features" component={Link} to="/features" />
                        <Tab label="Download" value="/download" component={Link} to="/download" />
                        <Tab label="Contribute" value="/contribute" component={Link} to="/contribute" />
                    </Tabs>
                </header>
                <Router>
                    <Route path="/" component={neoClan} />
                    <Route path="/features" component={Features} />
                    <Route path="/download" component={Download} />
                    <Route path="/contribute" component={Contribute} />
                </Router>
                <footer>
                    <ul>
                        <li><Link href="https://github.com/tdobson/neoClan">GitHub</Link></li>
                        <li><Link href="mailto:neoclan@climbingclan.com">Contact</Link></li>
                        <li><Link href="/download">Download</Link></li>
                        <li><Link href="https://climbingclan.atlassian.net/jira/core/projects/COM/board">Report an issue on JIRA</Link></li>
                    </ul>
                </footer>

            </Container>
    </Box>
);
}

export default App;
