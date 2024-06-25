import React from 'react';
import { Image } from '@mantine/core';
import { Link } from 'wouter';
import Header from '../components/Header';

function neoClan() {
    return (
        <div>
            <Header />
            <header className="App-header">
                <Image src="/logo.png" alt="Hero Image"/>

                <h1 className="primary">Your event check-in app</h1>

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
                <div className="button-container">
                    <Link className="big-button primary" href="/download">Download neoClan Now</Link>
                </div>
            </section>
        </div>
);
}

export default neoClan;
