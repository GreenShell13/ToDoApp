import React, { memo } from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

const CustomLink = ({ to, children, ...other}) => {
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({ path: resolvedPath.pathname, end: true });
    
    return <li className={isActive ? 'active' : ''}>
        <Link to={to} {...other}>{children}</Link>
    </li>
}

export default memo(CustomLink);