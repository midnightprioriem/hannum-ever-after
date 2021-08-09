import React from 'react';

import Block from 'components/Block';
import Countdown from 'react-countdown';
import styles from 'components/when.module.css'


const When = (props) => {

    const handleButtonClick = () => {
        console.log("Button clicked!");
    }

    const countdownRenderer = ({ days, hours, minutes, seconds }) => {
        let dayText = days !== 1 ? 'days' : 'day';
        let hourText = hours !== 1 ? 'hours' : 'hour';
        let minuteText = minutes !== 1 ? 'minutes' : 'minute';
        let secondText = seconds !== 1 ? 'seconds' : 'second';
        return <p>{days} {dayText}, {hours} {hourText}, <br /> {minutes} {minuteText}, and<br />{seconds} {secondText} left!</p>;
    };

    return (
        <Block blockTitle="When" {...props} button buttonText="add to calendar" onClick={handleButtonClick} useHeight>
            <div>
                <h2 >Nov 6th, 2021<br />4:00 PM</h2>
                <Countdown className={styles.p} renderer={countdownRenderer} date={new Date('November 6, 2021 15:00:00 EST')} />
            </div>
        </Block>
    );
};

export default When;