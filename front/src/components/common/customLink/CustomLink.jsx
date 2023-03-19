import React, { memo } from 'react';

const CustomLink = ({ href, children, ...other}) => {
    const path = window.location.pathname;
    console.log(href);
    return <li className={path === href ? 'active' : ''}>
        <a href={href} {...other}>{children}</a>
    </li>
}

export default memo(CustomLink);