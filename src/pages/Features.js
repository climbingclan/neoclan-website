import React from 'react';
import { Box } from '@mantine/core';
import Header from '../components/Header';

function Features() {
    return (
        <Box>
            <Header />
            <header>

            </header>

            <section id="overview">
                <p>NeoClan is a modern attendance management and check-in system designed for real-time synchronization across mobile and desktop devices. Originally built for The Climbing Clan to replace the legacy "Matrix" Google Sheets system, it's now being eyed by other communities like The Caving Crew!</p>
            </section>


            <section id="checkin-process">
                <h2 className="primary">Easy Check-in Process</h2>
                <p>The process is straightforward: Upon a member's arrival, the volunteer asks for their name, locates them in the system, and checks them in. All relevant information and any necessary actions pop up, ensuring nothing is missed. After the event concludes, the system updates the attendance records automatically. All this magic happens across all platforms: Web, Android, and iOS.</p>
            </section>

            <section id="integration">
                <h2 className="primary">Integration</h2>
                <p>NeoClan currently supports manual setup for Woocommerce integration. A dedicated plugin is in our roadmap for a future release.</p>
            </section>

            <section id="upcoming-features">
                <h2 className="primary">Upcoming in v1.0</h2>
                <p>Stay tuned for our Version 1.0 release! We're committed to constantly improving and innovating, ensuring that neoClan remains the go-to attendance management system for clubs.</p>
            </section>

            <section id="testimonials">
                <blockquote className="primary">
                    "I love being able to check people in at Climbing Clan using my phone" - <cite>Matt</cite>
                </blockquote>
            </section>
        </Box>
);
}

export default Features;
