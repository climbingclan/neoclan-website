import React from 'react';
import { Group, Anchor } from '@mantine/core';
import { Link } from 'wouter';

function Footer({ location, handleTabChange }) {
    return (
        <footer>
            <Group spacing="xs">
                <Anchor component={Link} href="https://github.com/tdobson/neoClan">GitHub</Anchor>
                <Anchor component={Link} href="mailto:neoclan@climbingclan.com">Contact</Anchor>
                <Anchor component={Link} href="/download">Download</Anchor>
                <Anchor component={Link} href="https://climbingclan.atlassian.net/jira/core/projects/COM/board">Report an issue on JIRA</Anchor>
            </Group>
        </footer>
    );
}

export default Footer;
