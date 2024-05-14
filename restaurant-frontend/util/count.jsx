import React, { useState, useEffect } from 'react';

export const Count = ({ count, tag, clsName, time }) => {
    const [initCount, setInitCount] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            if (initCount < count) {
                setInitCount(prevCount => prevCount + 1);
            } else {
                clearInterval(interval);
            }
        }, time ? time : 100);

        return () => clearInterval(interval);
    }, [initCount, count, time]);

    const Tag = tag;

    return (
        <Tag className={clsName}>{initCount}</Tag>
    );
}
