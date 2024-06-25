import React from 'react';
import { Tabs, TabsList, TabsTab } from '@mantine/core';
import { Link } from 'wouter';

function Header({ location, handleTabChange }) {
    console.log('Header component rendered');
    console.log('Location:', location);
    console.log('handleTabChange:', handleTabChange);
    return (
        <header>
            <Tabs value={location} onTabChange={handleTabChange}>
                <TabsList>
                    <TabsTab label="neoClan" value="/" component={Link} to="/" />
                    <TabsTab label="Features" value="/features" component={Link} to="/features" />
                    <TabsTab label="Download" value="/download" component={Link} to="/download" />
                    <TabsTab label="Contribute" value="/contribute" component={Link} to="/contribute" />
                </TabsList>
            </Tabs>
        </header>
    );
}

export default Header;
