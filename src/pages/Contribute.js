import React from 'react';
import {Box, Title, Text, Button, Anchor, Space} from '@mantine/core';

function Contribute() {
    return (
        <Box>
            <Title order={1} className="primary">Contribute to neoClan</Title>
            <Space />
            <section>
                <Title order={2} className="primary">Why Contribute?</Title>
                <Text>neoClan started as a solution for The Climbing Clan and has grown thanks to community contributions. </Text>

                <Title order={2} className="primary">Code Contribution</Title>
                <Text>We need frontend expertise and documentation writers. When making pull requests, please ensure they're structured well: a clear title, a detailed description, and linked to the related issue on JIRA.</Text>
                <Text>We welcome documentation bugs and fixes of all sizes.</Text>

                <Title order={2} className="primary">Engage with Our Community</Title>
                <Text>Join our community on <Anchor href="https://climbingclan.atlassian.net/jira/core/projects/COM/board" target="_blank" rel="noreferrer">JIRA</Anchor>. From there, you can file an issue, suggest new features, or participate in ongoing discussions.</Text>

                <Title order={2} className="primary">Documentation & Support</Title>
                <Text>Good documentation is as valuable as the code itself. If you can assist with creating or refining our docs, you're most welcome!</Text>

                <Title order={2} className="primary">Get in Touch</Title>
                <Text>If you need further information or want to collaborate in other ways, email us at <Anchor href="mailto:neoclan@climbingclan.com">neoclan@climbingclan.com</Anchor>.</Text>

                <Button className="cta-button" onClick={() => window.open("https://climbingclan.atlassian.net/jira/core/projects/COM/board", "_blank")}>
                    Report an issue on JIRA
                </Button>

            </section>
        </Box>
    );
}

export default Contribute;
