import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';


Clock.propTypes = {};
function formatDate() {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    return `${hours}:${minutes}:${seconds}`;
}

function Clock() {
    const [timeString, settTmeString] = useState('')

    useEffect(() => {
        const clockinterval = setInterval(() => {
            const now = new Date()
            const newTimeString = formatDate(now)
            settTmeString(newTimeString)
        }, 1000);

        return () => {
            console.log('Clock cleanup')
            clearInterval(clockinterval)
        }
    }, [])
    return (
        <div>
            <p style={{ fontSize: '42px' }}>{timeString}</p>
        </div>
    );
}

export default Clock;