import React from 'react';
import { Link } from 'wouter';

function neoClan() {
    return (
        <div>
            <header className="App-header">
                <img src="https://camo.githubusercontent.com/6ed198a4949cfc8b26cc3af493c629835e24f66a2c9c4deaee001934ed254954/68747470733a2f2f692e696d6775722e636f6d2f765343754642632e706e67" alt="Hero Image"/>

                <h1 className="primary">Your club check-in app</h1>

                <p>If you're keen to leave Google Sheets behind and move to a mobile-first check-in app, neoClan offers a user-friendly web interface to get your members checked in.</p>
            </header>
            <section>
                <h2 className="primary">Features</h2>
                <ul>
                    <li><i class="icon-placeholder"></i> Mobile Optimization</li>
                    <li><i class="icon-placeholder"></i> Easy Check-in</li>
                    <li><i class="icon-placeholder"></i> Attendance Visualization</li>
                </ul>
            </section>
            <section>
                <h2>What our users are saying</h2>
                <blockquote>
                    "I love being able to check people in at Climbing Clan using my phone" - <cite>Matt</cite>
                </blockquote>
            </section>
            <section>
                <h2>Get neoClan</h2>
                <div className="button-container">
                    <Link className="big-button primary" href="/download">Download neoClan Now</Link>
                </div>
            </section>
        </div>
    );
}

export default neoClan;
