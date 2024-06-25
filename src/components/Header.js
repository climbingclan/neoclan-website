import React from 'react';
import { Tabs } from '@mantine/core';
import { Link } from 'wouter';

function Header({ location, handleTabChange }) {
    console.log('Header component rendered with props:', { location, handleTabChange });
    return (
        <header>
            <Tabs value={location} onChange={handleTabChange}>
                <Tabs.List>
                    <Tabs.Tab value="/" component={Link} to="/">neoClan</Tabs.Tab>
                    <Tabs.Tab value="/features" component={Link} to="/features">Features</Tabs.Tab>
                    <Tabs.Tab value="/download" component={Link} to="/download">Download</Tabs.Tab>
                    <Tabs.Tab value="/contribute" component={Link} to="/contribute">Contribute</Tabs.Tab>
                </Tabs.List>
            </Tabs>
        </header>
    );
}

export default Header;
