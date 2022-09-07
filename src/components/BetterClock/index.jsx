import useClock from '../../hooks/useClock';
import './betterClock.scss'

function BetterClock() {
    const { timeString } = useClock()

    return (
        <div className='better-clock'>
            <p className='better-clock_time'>{timeString}</p>
        </div>
    );
}

export default BetterClock;
