import styles from './index.module.scss'
import { SlArrowDown } from 'react-icons/sl'
import { SiCisco, SiJunipernetworks, SiFortinet} from 'react-icons/si'
import { HiWrenchScrewdriver } from 'react-icons/hi2'
import { AiFillFileAdd } from 'react-icons/ai'
import { BiTimer } from 'react-icons/bi'
import { IconContext } from 'react-icons'
import { RiSpeedFill } from 'react-icons/ri'
import { ImMagicWand } from 'react-icons/im'

import { useRef, useState } from 'react';
import { Menu } from '../components/Menu'
import { Footer } from '../components/Footer'

export default function Home() {
  const ref = useRef<null | HTMLDivElement>(null);
  const ref2 = useRef<null | HTMLDivElement>(null);

  function handleClick() {
    ref.current?.scrollIntoView({behavior: 'smooth'});
  }
  function handleClick2() {
    ref2.current?.scrollIntoView({behavior: 'smooth'});
  }
  const[checked, setChecked] = useState<boolean>(false);

  return (
    <>
    <Menu setChecked = {setChecked} checked= {checked}/>
      <div className={checked ? styles.indexSectionDark : styles.indexSectionLight }>
        <div className={styles.textHeader}>
          <h1>Automatização da configuração de ativos de rede</h1>
          <p>A Chain configura os seus ativos de rede de forma rápida, simples e amigável com o usuário.</p>
        </div>
        <img src='/networkingSymbol.png' className={styles.imageRotate}/>
        <div className={styles.arrowDown} onClick={handleClick}>
          <IconContext.Provider value={{color: checked ? '#E6E8EB' : '',size: '4rem'}}>
            <SlArrowDown />
          </IconContext.Provider>
        </div>
      </div>

      <div className={checked ? styles.secondSectionDark : styles.secondSectionLight} ref={ref}>
          <h1>Funcionalidades</h1>
          <div>
            <div className={styles.card}>
              <a href='/'>
                <IconContext.Provider value={{ style: { marginTop: '3rem' }, size: "6rem"}}>
                      <HiWrenchScrewdriver />
                </IconContext.Provider>
              </a>
              <h2>Conversão</h2>
              <p>A Chain oferece uma ferramenta de <span>conversão</span> de scripts de ativos de rede entre fabricantes.</p>
            </div>
            
            <div className={styles.card}>
              <a href='/'>
                <IconContext.Provider value={{ style: { marginTop: '3rem' }, size: "6rem"}}>
                      <AiFillFileAdd />
                </IconContext.Provider>
              </a>
              <h2>Criação</h2>
              <p>A Chain oferece uma <span>criação</span> de scripts de forma prática, simples e intuitiva, recebendo apenas alguns dados e retornando um script novo.</p>
            </div>
            
            <div className={styles.card}>
            <a href='/'>
                <div>
                  <IconContext.Provider value={{ style: { verticalAlign: 'middle', marginTop: '3rem'}, size: "6rem"}}>
                    <SiCisco />
                  </IconContext.Provider>
                  <IconContext.Provider value={{ style: { verticalAlign: 'middle', margin: '3rem 2rem 0 2rem'}, size: "6rem"}}>
                    <SiJunipernetworks />
                  </IconContext.Provider>
                  <IconContext.Provider value={{ style: { verticalAlign: 'middle', marginTop: '3rem'}, size: "6rem"}}>
                    <SiFortinet />
                  </IconContext.Provider>
                </div>
              </a>

              <h2>Compatibilidade</h2>
              <p>A Chain tem como foco <span>três</span> principais fabricantes para a conversão de scripts, dentre elas são Cisco, Juniper e Fortinet</p>
            </div>
          </div>
          <div className={styles.arrowDown} onClick={handleClick2}>
            <IconContext.Provider value={{size: '4rem'}}>
              <SlArrowDown />
            </IconContext.Provider>
        </div>
      </div>

      <div className={checked ? styles.thirdSectionDark : styles.thirdSectionLight} ref={ref2}>
        <h1>Objetivos</h1>
        <div>
          <div className={styles.objectives}>
            <IconContext.Provider value={{size: '8rem', color: '#ECAB55'}}>
              <BiTimer />
            </IconContext.Provider>
            <h2>Ganha de tempo</h2>
            <p>Ganha de tempo nas configurações e criações dos scripts, devido a praticidade da plataforma.</p>
          </div>
          <div className={styles.objectives}>
            <IconContext.Provider value={{size: '8rem', color: '#ECAB55'}}>
              <RiSpeedFill />
            </IconContext.Provider>
            <h2>Velocidade</h2>
            <p>Com apenas um clique fazer suas configurações e criações de scripts.</p>
          </div>
          <div className={styles.objectives}>
            <IconContext.Provider value={{style: { marginBottom: '1.8rem' } , size: '6rem', color: '#ECAB55'}}>
              <ImMagicWand />
            </IconContext.Provider>
            <h2>Usabilidade</h2>
            <p>Interface bonita, prática e amigável, podendo ser usado sem uma grande necessidade de conhecimento em configuração de ativos de rede, como mágica. </p>
          </div>
        </div>
      </div>
      <Footer checked= {checked}/>
    </>
  )
}
   