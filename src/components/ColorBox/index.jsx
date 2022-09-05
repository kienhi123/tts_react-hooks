import React, { useState } from 'react';
import PropTypes from 'prop-types';
import "./ColorBox.scss"

ColorBox.propTypes = {

};
function getRamdomColor() {
    const ListColor = ['deeppink', 'black', 'blue'];
    const radomIndex = Math.trunc(Math.random() * 3);
    return ListColor[radomIndex]
}


function ColorBox() {
    const [color, setColor] = useState('green')

    function handleBoxClick() {
        // eslint-disable-next-line no-undef
        const newColor = getRamdomColor();
        setColor(newColor);
    }
    return (
        <div className='color-box' style={{ background: color }} onClick={handleBoxClick}>

        </div>
    );
}

export default ColorBox;