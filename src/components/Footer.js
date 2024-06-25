import React from 'react';
import { Group, Anchor } from '@mantine/core';

function Footer() {
    return (
        <footer>
            <Group position="center" spacing="xl" style={{ marginBottom: '20px' }}>
                <Anchor href="https://github.com/tdobson/neoClan" target="_blank">GitHub</Anchor>
                <Anchor href="mailto:neoclan@climbingclan.com" target="_blank">Contact</Anchor>
                <Anchor href="/download">Download</Anchor>
                <Anchor href="https://climbingclan.atlassian.net/jira/core/projects/COM/board" target="_blank">Report an issue on JIRA</Anchor>
            </Group>
        </footer>
    );
}

export default Footer;
