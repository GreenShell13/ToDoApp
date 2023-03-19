import React, { memo } from 'react';

const Menu = () => {
    return <>
        <nav className="nav">
            <a href="/" className="site-title">Main</a>
            <ul>
                <li>
                    <a href="/monitor-activity">Monitor Activity</a>
                </li>
                <li>
                    <a href="/materials">Materials</a>
                </li>
            </ul>
        </nav>
    </>;
}

export default memo(Menu);