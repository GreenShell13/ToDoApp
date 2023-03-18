import React, { memo } from 'react';
import { Button } from '@material-ui/core';

const Menu = () => {
    return <>
        <Button style={{ backgroundColor: 'green' }}>Test it</Button>
    </>;
}

export default memo(Menu);