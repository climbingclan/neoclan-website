import React from 'react';

function Download() {
    return (
        <div>
            <h1 className="primary">Download neoClan</h1>
            <section>
                <h2 className="primary">Prerequisites</h2>
                <p>Before you begin, ensure you have Node.js installed on your system. A basic understanding of Node.js and npm will be beneficial.</p>

                <h2 className="primary">Step 1: Clone from GitHub</h2>
                <pre><code>git clone https://github.com/tdobson/neoClan.git</code></pre>

                <h2 className="primary">Step 2: Install Dependencies</h2>
                <pre><code>npm install</code></pre>

                <h2 className="primary">Step 3: Run the App</h2>
                <pre><code>npm start</code></pre>

                <h2 className="primary">Step 4: Build</h2>
                <pre><code>npm run build</code></pre>
            </section>
        </div>
    );
}

export default Download;
