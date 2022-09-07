import React from 'react';
import useMagicColor from '../../hooks/useMagicColor';
import './magicBox.scss';


function MagicBox() {
    const color = useMagicColor()
    return (
        <div className='magic-box' style={{ background: color }}></div>
    );
}

export default MagicBox;