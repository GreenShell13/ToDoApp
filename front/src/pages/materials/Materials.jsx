import React, { memo } from 'react';
import './topics-style.css';

import topics from './topics';

const Materials = () => {
    return <>
        <h1>Materials</h1>
        <div className="topics">
            {topics.map((topic, key) => 
                <div className="topic-item" key={key}>
                    {topic.label}
                </div>
            )}
        </div>
    </>
};

export default memo(Materials);