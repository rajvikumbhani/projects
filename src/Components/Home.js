import React from 'react'
import styles from '../styles/Home.module.css'
export default function Home(props) {
    return (
       
            <div className='container'>
                <div className='row align-items-center pt-5'>
                    <div className='w-50'>
                        <div className='content'>
                            <span className={`text-${props.mode==='dark'?'light':'dark'} `}>Welcome to my sites</span>
                            <h1 className={`${styles.hiding}`}>Hi! I’m Jomz UI UX   
                               <span className={`${styles.para}`}>   Designer</span></h1>
                        </div>
                        <p className={`${styles.web} text-${props.mode==='dark'?'light':'dark'} `}>A 22 year old aspiring <b>web developer</b> based in
                            Iloilo City.</p>
                        <div className='btn d-flex'>
                            <button className={`${styles.me} text-${props.mode==='dark'?'light':'dark'} `}>Hire me!</button>
                            <button className={`${styles.see} text${props.mode==='dark'?'light':'dark'}`}>See My Project</button>
                        </div>
                    </div>
                    <div className='images w-50'>
                        <img src={require("../assets/Rectangle 3.png")} alt='banner-img' className={`${styles.banner_img}`}/>
                        <img src={require("../assets/Rectangle 4.png")} alt='banner-img' className={`${styles.banner1_img}`}/>

                        <p className={`${styles.riv} text-${props.mode==='dark'?'light':'dark'} `}>I also make digital arts, video editing and more on graphic designer</p>
                    </div>
                </div>
            </div>
    )
}
