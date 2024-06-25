import React from 'react';
import { Tabs, TabsList, TabsTab } from '@mantine/core';
import { Link } from 'wouter';

function Footer({ location, handleTabChange }) {
    return (
        <footer>
            <Tabs value={location} onTabChange={handleTabChange}>
                <TabsList>
                    <TabsTab label="GitHub" value="https://github.com/tdobson/neoClan" component={Link} href="https://github.com/tdobson/neoClan" />
                    <TabsTab label="Contact" value="mailto:neoclan@climbingclan.com" component={Link} href="mailto:neoclan@climbingclan.com" />
                    <TabsTab label="Download" value="/download" component={Link} href="/download" />
                    <TabsTab label="Report an issue on JIRA" value="https://climbingclan.atlassian.net/jira/core/projects/COM/board" component={Link} href="https://climbingclan.atlassian.net/jira/core/projects/COM/board" />
                </TabsList>
            </Tabs>
        </footer>
    );
}

export default Footer;
