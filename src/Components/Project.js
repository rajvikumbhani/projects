import React from 'react'

import Styles from '../styles/Project.module.css'

export default function Project(props) {
    return (
        <div>
            <div className={`container`}>
                <div className='row align-items-center pt-5'>
                    <div className={`content ${Styles.content}`}>
                        <span className={`kp ${Styles.kp} text-${props.mode==='dark'?'light':'dark'} `}>Portfolio</span>
                        <h2 className={`ki ${Styles.ki}`}>PROJECT</h2>
                        <p className={`ko  text-${props.mode==='dark'?'light':'dark'} ${Styles.ko}`}>All these projects were 100% done and paid. These projects were created by
                            using third party apps on mobile phone/laptop which has been mentioned on
                            my skills. each photo  has details and links.</p>
                        <div className={`box ${Styles.box1}`}></div>
                        <div className={`box ${Styles.box2}`}></div>
                        <div className={`box ${Styles.box3}`}></div>
                    </div>
                </div>
            </div>
            <i className={`fa-brands fa-square-facebook ${Styles.icon}`}></i>
            <i className={`fa-brands fa-github ${Styles.icon2}`}></i>
            <i className={`fa-brands fa-square-instagram ${Styles.icon3}`}></i>
        </div>
    )
}
