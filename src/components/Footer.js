import React from 'react';
import {Tabs, Container, Anchor} from '@mantine/core';
import { Link } from 'wouter';

function Header({ location, handleTabChange }) {
    return (
        <Container>
            <Tabs value={location} tabchange={handleTabChange}>
                <Tabs.List>
                    <Tabs.Tab value="/" component={Link} to="/">neoClan</Tabs.Tab>
                    <Tabs.Tab value="/features" component={Link} to="/features">Features</Tabs.Tab>
                    <Tabs.Tab value="/download" component={Link} to="/download">Download</Tabs.Tab>
                    <Tabs.Tab value="/contribute" component={Link} to="/contribute">Contribute</Tabs.Tab>
                </Tabs.List>
            </Tabs>


            <Anchor href="https://github.com/tdobson/neoClan" target="_blank">GitHub</Anchor>
            <Anchor href="mailto:neoclan@climbingclan.com" target="_blank">Contact</Anchor>
            <Anchor href="https://climbingclan.atlassian.net/jira/core/projects/COM/board" target="_blank">Report an issue on JIRA</Anchor>
        </Container>
    );
}

export default Header;

