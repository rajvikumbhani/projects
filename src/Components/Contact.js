import React from 'react'
import Styles from '../styles/Contact.module.css'
export default function Contact(props) {
    return (
        <div>
            <div className='container'>
                <div className='align-items-center'>
                    <div className={`con ${Styles.con}`}>
                        <span className={`inf ${Styles.inf} text-${props.mode==='dark'?'light':'dark'} `}>EMAIL INFO</span>
                        <h2 className={`cons ${Styles.cons}`}>CONTACT</h2>
                        <div className={`d-flex justify-content-center `}>
                            <h5 className={`emn ${Styles.emn}  text-${props.mode==='dark'?'light':'dark'} `}>SOCIAL MEDIA  </h5>
                            <h5 className={`emn ${Styles.emn}  text-${props.mode==='dark'?'light':'dark'} `}>PHONE CONTACT </h5>
                            <h5 className={`emn ${Styles.emn}  text-${props.mode==='dark'?'light':'dark'} `}>EMAILING</h5>
                        </div>
                        <div className='row text-center'>
                            <div className='col-md-4'>
                                <img src={require("../assets/Facebook-one (脸书).png")} alt='img' className={`${Styles.img}`} />
                                <p className={`rr ${Styles.rr} text-${props.mode==='dark'?'light':'dark'} `}>Diamond Jozuu</p>
                            </div>
                            <div className='col-md-4'>
                                <img src={require("../assets/Github (github ).png")} alt='img' className={`${Styles.img}`} />
                                <p className={`rr text-${props.mode==='dark'?'light':'dark'} ${Styles.rr}`}>www.github/jeezyjo</p>
                            </div>
                            <div className='col-md-4'> <img src={require("../assets/Instagram (instagram).png")} alt='img' className={`${Styles.img}`} />
                                <p className={`rr ${Styles.rr} text-${props.mode==='dark'?'light':'dark'} `}>www.instagram/jee</p></div>
                        </div>
                    </div>
                </div>

                <h5 className={`fot ${Styles.fot} text-${props.mode==='dark'?'light':'dark'} `}>Jomz Llamo</h5>
                <h5 className={`fot ${Styles.fon} text-${props.mode==='dark'?'light':'dark'} `}>UX UI Designer</h5>
            </div>
        </div>
    )
}
