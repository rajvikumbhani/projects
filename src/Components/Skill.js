import React from 'react'
import styles from '../styles/Skill.module.css'
export default function Skill(props) {
    return (
        <div>
            <div className='container'>
                <div className='row align-items-center pt-5'>
                    <div className='w-50'>
                        <div className='content'>
                            <span className={`sub ${styles.sub} text-${props.mode==='dark'?'light':'dark'} `}>Self identity <div className={`line ${styles.line}`}></div></span>
                            <h2 className={`wer ${styles.wer}`}>ABOUT <span className={`per ${styles.per}`}> ME </span></h2>
                            <p className={`paragraph ${styles.paragraph} text-${props.mode==='dark'?'light':'dark'} `}>Im Jomar Llamo, 22 years old from Balabago Jaro Iloilo City, 3rd year college student of ACSI College Iloilo inc. Bachelor of science in Information system. I make digital arts online, Photography and video editing with cheap commission. Self studying roadmap course to fulfill my goals of becoming a web designer/web developer/programmer.
                            </p>
                        </div>
                    </div>
                    <div className='w-50'>
                        <div className={`box ${styles.box1}`}></div>
                        <div className={`box ${styles.box2}`}></div>
                        <div className={`box ${styles.box3}`}></div>
                        <div className={`box ${styles.box4}`}></div>
                    </div>
                </div>
                <div className='content-inner'>
                    <h2 className={`ski ${styles.ski}`}>SKILLS AND <span className={`her ${styles.her}`}>EXPERIENCE</span></h2>
                    <div className='d-flex'>
                        <ul className={`ai ${styles.ai}`}>
                            <li className={`ps ${styles.ps} text-${props.mode==='dark'?'light':'dark'} `}>Adobe Photoshop </li>
                            <li className={`ps ${styles.ps} text-${props.mode==='dark'?'light':'dark'} `}>Figma</li>
                            <li className={`ps ${styles.ps} text-${props.mode==='dark'?'light':'dark'} `}>Infinite design</li>
                        </ul>
                        <div className={`line1 ${styles.line1}`}></div>
                        <ul className={`ai ${styles.ai}`}>
                            <li className={`ps ${styles.ps} text-${props.mode==='dark'?'light':'dark'} `}>LBC Data encoder</li>
                            <li className={`ps ${styles.ps} text-${props.mode==='dark'?'light':'dark'} `}>Moderator at streamer</li>
                            <li className={`ps ${styles.ps} text-${props.mode==='dark'?'light':'dark'} `}>DITO Comm. Cellsite Helper </li>
                        </ul>
                    </div>
                    <i className={`fa-brands fa-square-facebook ${styles.icon}`}></i>
                    <i className={`fa-brands fa-github ${styles.icon2}`}></i>
                    <i className={`fa-brands fa-square-instagram ${styles.icon3}`}></i>
                </div>
            </div>
        </div>
    )
}
