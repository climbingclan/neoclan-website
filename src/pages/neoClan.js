import React from 'react';
import { Image, Button } from '@mantine/core';
import { Link } from 'wouter';

function neoClan() {
    return (
        <div>
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
                    <Button
                        component={Link}
                        to="/download"
                        variant="filled"
                        color="blue"
                        size="lg"
                        className="big-button"
                        style={{ transition: 'transform 0.2s' }}
                        onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                        onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                    >
                        Download neoClan Now
                    </Button>
                </div>
            </section>
        </div>
    );
}

export default neoClan;
