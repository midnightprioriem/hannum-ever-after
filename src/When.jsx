import Grid from '@material-ui/core/Grid';
import Block from './Block';
import Countdown from 'react-countdown';
import ScheduleIcon from '@material-ui/icons/Schedule';
import styles from './when.module.css'
// @ts-ignore
import blockStyles from './block.module.css'
import React from 'react';
import clock from './assets/clock.svg';


const When = (props) => {

    const countdownRenderer = ({ days, hours, minutes, seconds }) => {
        let dayText = days !== 1 ? 'DAYS' : 'DAY';
        let hourText = hours !== 1 ? 'HOURS' : 'HOUR';
        let minuteText = minutes !== 1 ? 'MINUTES' : 'MINUTE';
        let secondText = seconds !== 1 ? 'SECONDS' : 'SECOND';
        return <p className={styles.paragraphBlockText}>{days} {dayText}, {hours} {hourText}, {minutes} {minuteText}, AND {seconds} {secondText} LEFT!</p>;
    };

    return (
        <Block blockTitle="When" {...props}>
            <div className={styles.blockDivStyle}>
                <img src={clock} alt="" style={{ height: '200px' }} />
                <h2 className={blockStyles.headerTwoBlockText}>November 6th, 2021</h2>
                <h2 className={blockStyles.headerTwoBlockText}>4:00 PM</h2>
                <div className={styles.countdownContainer}>
                    <Countdown renderer={countdownRenderer} date={new Date('November 6, 2021 15:00:00 EST')} />
                </div>
            </div>
        </Block>
    );
};

export default When;