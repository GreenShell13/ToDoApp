import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../customLink/CustomLink';

const Menu = () => {
    return <>
        <nav className="nav">
            <Link to="/" className="site-title">Main</Link>
            <ul>
                <CustomLink to="monitor-activity">Monitor activity</CustomLink>
                <CustomLink to="materials">Materials</CustomLink>
            </ul>
        </nav>
    </>;
}

export default memo(Menu);