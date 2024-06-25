import React from 'react';
import {  } from '@mantine/core';
import { Link } from 'wouter';

function Footer({ location, handleTabChange }) {
    return (
        <footer>
            <ul> <!--  value={location} onTabChange={handleTabChange} -->
                <li><Link href="https://github.com/tdobson/neoClan">GitHub</Link></li>
                <li><Link href="mailto:neoclan@climbingclan.com">Contact</Link></li>
                <li><Link href="/download">Download</Link></li>
                <li><Link href="https://climbingclan.atlassian.net/jira/core/projects/COM/board">Report an issue on JIRA</Link></li>
            </ul>
        </footer>
    );
}

export default Footer;
