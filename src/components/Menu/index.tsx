import styles from './styles.module.scss'
import { IconContext } from 'react-icons'
import { SiCisco, SiJunipernetworks, SiFortinet} from 'react-icons/si'
import { HiMoon, HiSun } from 'react-icons/hi'
import { AiOutlineLogin } from 'react-icons/ai'
import { useState } from 'react'

export function Menu(props : any) {

    return (
        <header className={props.checked ? styles.headerContainerDark : styles.headerContainerLight}>
            <img src="/chainLogo.png" alt="Chain" className={styles.logoResize}></img>
            <ul>
                <li className={styles.iconColor}>
                    <IconContext.Provider value={{style: { verticalAlign: 'middle', marginRight: '0.2rem'}, size: "5.2rem"}}>
                        <SiCisco />
                    </IconContext.Provider>
                </li>
                <li className={styles.iconColor}>
                    <IconContext.Provider value={{ style: { verticalAlign: 'middle', marginRight: '0.2rem'}, size: "6rem" }}>
                        <SiJunipernetworks />
                    </IconContext.Provider>
                </li>
                <li className={styles.iconColor}>
                    F
                    <IconContext.Provider value={{ style: { verticalAlign: 'middle', marginRight: '0.3rem', marginLeft: '0.3rem'}, size: "3rem" }}>
                        <SiFortinet />
                    </IconContext.Provider>
                    rtinet
                </li>
            </ul>
            <div>
            <span>
                <IconContext.Provider value={props.checked?{color: props.checked? '#E6E8EB' : '' , style: { verticalAlign: 'middle', translate: '0.9375rem 0', transition: '.2s'}, size: "2rem" }: {style: {opacity: 0}} }>
                    <HiMoon />   
                </IconContext.Provider>
                <IconContext.Provider value={props.checked? {style: {opacity: 0, width: 0}} : { style: { verticalAlign: 'middle', translate: '0.9375rem 0', transition: '.2s'}, size: "2rem" }}>
                    <HiSun /> 
                </IconContext.Provider>
            </span>
            <label className={styles.slideToggle}>
                <input type="checkbox" onClick={() => props.setChecked(!props.checked)} />
                <span className={styles.slider} />
            </label>
            <button>
                <span>Entrar</span>
                <IconContext.Provider value={{ style: { verticalAlign: 'middle', marginLeft: '0.4rem', fontWeight: 'bold'}, size: "1.2rem" }}>
                    <AiOutlineLogin />
                </IconContext.Provider>
            </button>
            </div>
        </header>
        
    )
}