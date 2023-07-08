import React from 'react';
import { useStyles } from './HeaderOfPage.c';
import humanzPic from './humanzSideImg.png'

const HeaderOfPage = () => {
    const classes = useStyles(); 
    return (
    <div className={classes.headerContainer}>
        <img src={humanzPic} alt="humanzIcon" className={classes.imageStyle}></img>
        <div className={classes.welcomeStyle}>Welcome to our app</div>
    </div>
    );
}
export default HeaderOfPage;