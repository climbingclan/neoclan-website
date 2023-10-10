import React from 'react';

function Contribute() {
    return (
        <div>
            <h1 className="primary">Contribute to neoClan</h1>
            <section>
                <h2 className="primary">Why Contribute?</h2>
                <p>neoClan started as a solution for The Climbing Clan and has grown thanks to community contributions. Be a part of this exciting journey!</p>

                <h2 className="primary">Code Contribution</h2>
                <p>Help us improve! We need frontend expertise and documentation writers. When making pull requests, please ensure they're structured well: a clear title, a detailed description, and linked to the related issue on JIRA.</p>
                <p>We welcome documentation bugs and fixes of all sizes.</p>

                <h2 className="primary">Engage with Our Community</h2>
                <p>Join our community on <a href="https://climbingclan.atlassian.net/jira/core/projects/COM/board" target="_blank" rel="noreferrer">JIRA</a>. From there, you can file an issue, suggest new features, or participate in ongoing discussions.</p>

                <h2 className="primary">Documentation & Support</h2>
                <p>Good documentation is as valuable as the code itself. If you can assist with creating or refining our docs, you're most welcome!</p>

                <h2 className="primary">Get in Touch</h2>
                <p>If you need further information or want to collaborate in other ways, email us at <a href="mailto:neoclan@climbingclan.com">neoclan@climbingclan.com</a>.</p>

                <button className="cta-button" onClick={() => window.open("https://climbingclan.atlassian.net/jira/core/projects/COM/board", "_blank")}>
                    Report an issue on JIRA
                </button>

            </section>
        </div>
    );
}

export default Contribute;
