import React from 'react';
import { Tabs, Container } from '@mantine/core';
import { Link } from 'wouter';

function Header({ location, handleTabChange }) {
    return (
        <Container>
            {/* onTabChange is expected to handle tab change events */}
            <Tabs value={location} tabchange={handleTabChange}>
                <Tabs.List>
                    <Tabs.Tab value="/" component={Link} to="/">neoClan</Tabs.Tab>
                    <Tabs.Tab value="/features" component={Link} to="/features">Features</Tabs.Tab>
                    <Tabs.Tab value="/download" component={Link} to="/download">Download</Tabs.Tab>
                    <Tabs.Tab value="/contribute" component={Link} to="/contribute">Contribute</Tabs.Tab>
                </Tabs.List>
            </Tabs>
        </Container>
    );
}

export default Header;
