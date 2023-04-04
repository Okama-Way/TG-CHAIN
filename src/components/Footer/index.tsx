import styles from './styles.module.scss'
import { FaMapMarkerAlt, FaPhone } from 'react-icons/fa'
import { MdAlternateEmail } from 'react-icons/md'
import { IconContext } from 'react-icons'

export function Footer(props : any){
    
    return(
        <div className={props.checked ? styles.footerContainerDark : styles.footerContainerLight }>
            <div className={styles.logo}>
                <img src='/chainLogo.png' />
                <ul>
                    <li>
                        Página Inicial
                    </li>
                    <li>
                        <span />
                        Sobre
                        <span />
                    </li>
                    <li>
                        Contato
                    </li>
                </ul>
                <p>Chain © 2022</p>
            </div>
            <div className={styles.data}>
                <ul>
                    <li>
                        <label>
                            <IconContext.Provider value={{style: {margin: 'auto'} , size: '1.2rem', color: '#fff'}}>
                                <FaMapMarkerAlt />
                            </IconContext.Provider>
                        </label>
                        <p>Santana de Parnaíba - São Paulo</p>
                    </li>
                    <li>
                    <label>
                            <IconContext.Provider value={{style: { margin: 'auto' } , size: '1rem', color: '#fff'}}>
                                <FaPhone />
                            </IconContext.Provider>
                        </label>
                        <p>+5511999991111</p>
                    </li>
                    <li>
                    <label>
                            <IconContext.Provider value={{style: { margin: 'auto' } , size: '1.2rem', color: '#fff'}}>
                                <MdAlternateEmail />
                            </IconContext.Provider>
                        </label>
                        <p>contactChain@chain.com</p>
                    </li>
                </ul>
            </div>
            <div className={styles.about}>
                <h2>Sobre a Chain</h2>
                <p>Plataforma de configuração, conversão e criação de scripts para configuração de ativos de rede.</p>
            </div>
        </div>
    )
}