import React, { memo } from 'react';
import CustomLink from '../customLink/CustomLink';

const Menu = () => {
    return <>
        <nav className="nav">
            <a href="/" className="site-title">Main</a>
            <ul>
                <CustomLink href="/monitor-activity">Monitor activity</CustomLink>
                <CustomLink href="/materials">Materials</CustomLink>
            </ul>
        </nav>
    </>;
}

export default memo(Menu);