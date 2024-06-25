import React from 'react';
import { Tabs, Header as MantineHeader, Container } from '@mantine/core';
import { Link } from 'wouter';

function Header({ location, handleTabChange }) {
    console.log('Header component rendered with props:', { location, handleTabChange });
    return (
        <MantineHeader height={60} p="xs">
            <Container>
                <Tabs value={location} onTabChange={handleTabChange}>
                    <Tabs.List>
                        <Tabs.Tab value="/" component={Link} to="/">neoClan</Tabs.Tab>
                        <Tabs.Tab value="/features" component={Link} to="/features">Features</Tabs.Tab>
                        <Tabs.Tab value="/download" component={Link} to="/download">Download</Tabs.Tab>
                        <Tabs.Tab value="/contribute" component={Link} to="/contribute">Contribute</Tabs.Tab>
                    </Tabs.List>
                </Tabs>
            </Container>
        </MantineHeader>
    );
}

export default Header;
