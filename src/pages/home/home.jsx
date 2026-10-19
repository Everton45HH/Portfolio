import styles from "./home.module.css";

import Codex  from '../components/projects/codex/codex'
import Petag  from '../components/projects/petag/petag'
import Screenshot  from '../components/projects/screenshottopdf/screenshot'
import Face from "../components/face/face";

import { _React, Flask, Mysql, Python, Git } from "@dev.icons/react";

export default function Home() {
  return (
    <>
      <div className={styles.global}>
        
        <div className={styles.firstPage}>
          <span className={styles.elipse}></span>
        <header>
          <h1>EVERTON</h1>

          <h3>&lt; DESENVOLVEDOR WEB FULL-STACK /&gt;</h3>
          <hr />
        </header>
        <nav>
          <div>
            <h2>Sobre Mim</h2>
            <p>
              Olá, me chamo <span>Everton Paulino</span>, sou aspirante a
              desenvolvedor web, sigo transformando ideias em softwares.
            </p>
          </div>
          <div>
            <h2>Conheça meus projetos</h2>
            <a href="#myProjects">CONHECER →</a>
          </div>
          <div>
            <h2>Formação</h2>
            <ul>
              <li>
                <p>
                  Cursando Tecnólogo em ADS <br /> (IFSP - BRA)
                </p>
              </li>
              <li>
                <p>
                  Técnico em Informática <br /> (IFSP - BRA)
                </p>
              </li>
            </ul>
          </div>
        </nav>

        <Face />

        <div className={styles.navSkills}>
          <h2>&lt; STACK &#47;&gt;</h2>

          <div className={styles.skills}>
            <div className={styles.skillItem}>
              <Python className={styles.skillsIcon} size={65} alt="Python" />
            </div>
            <div className={styles.skillItem}>
              <Flask
                className={styles.skillsIcon}
                size={70}
                alt="Flask"
                color="#39ff14"
              />
            </div>
            <div className={styles.skillItem}>
              <_React
                className={styles.skillsIcon}
                size={69}
                alt="React"
                color="#39ff14"
              />
            </div>
            <div className={styles.skillItem}>
              <Mysql className={styles.skillsIcon} size={70} alt="MySQL" />
            </div>
            <div className={styles.skillItem}>
              <Git className={styles.skillsIcon} size={70} alt="Git " />
            </div>
          </div>
        </div>

        </div>
      <div className={styles.myProjects} id="myProjects">
        <h1>Conheça meus projetos</h1>
        <h2>
          Conheça os mais diversos sites dos quais participei, desde a idealização até a produção.
        </h2>

      </div>

      <div className={styles.projects}>

        <Screenshot/>
        <Petag/>
        <Codex/>

      </div>
      </div>

    </>
  );
}
