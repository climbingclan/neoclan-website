import React from 'react';
import { Box, Title, Text } from '@mantine/core';

function Download() {
    return (
        <Box>
            <Title order={1} className="primary">Download neoClan</Title>
            <section>
                <Title order={2} className="primary">Prerequisites</Title>
                <Text>Before you begin, ensure you have Node.js installed on your system. A basic understanding of Node.js and npm will be beneficial.</Text>

                <pre><code>git clone https://github.com/tdobson/neoClan.git</code></pre>

                <h2 className="primary">Step 2: Install Dependencies</h2>
                <pre><code>npm install</code></pre>

                <h2 className="primary">Step 3: Run the App</h2>
                <pre><code>npm start</code></pre>

                <h2 className="primary">Step 4: Build</h2>
                <pre><code>npm run build</code></pre>
            </section>
            </section>
        </Box>
);
}

export default Download;
