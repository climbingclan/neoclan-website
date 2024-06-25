import React from 'react';
import { Header as MantineHeader, Title } from '@mantine/core';

function Header() {
    return (
        <MantineHeader height={60} p="xs">
            <Title order={1}>neoClan</Title>
        </MantineHeader>
    );
}

export default Header;
