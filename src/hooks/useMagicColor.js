import { useEffect, useRef, useState } from 'react';

function randomColor(currentColor) {
    const ListColor = ['black', 'deepink', 'blue', 'yellow', 'green'];
    const currentIndex = ListColor.indexOf(currentColor)
    let newIndex = currentIndex;
    while (currentIndex === newIndex) {
        newIndex = Math.trunc(Math.random() * 5)
    }
    console.log(ListColor[newIndex])
    return ListColor[newIndex]

}

function useMagicColor(props) {
    const [color, setColor] = useState('red')
    const colorRef = useRef('red')

    useEffect(() => {
        const colorInterval = setInterval(() => {
            const newColor = randomColor(colorRef.current)
            setColor(newColor)
            colorRef.current = newColor
        }, 1000);
        return () => {
            clearInterval(colorInterval)
        }
    }, [])

    return color;
}

export default useMagicColor;