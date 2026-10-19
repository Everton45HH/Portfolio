import styles from "../../projects/project.module.css";
import gps from "../../../../assets/img/ic--baseline-place.svg"

export default function petag() {
  return (
    <>
      <div className={styles.project}>
        
        <h1 className={styles.black}>
          P<span className={styles.blue}>e</span>TAG
        </h1>

        <p>
          O PeTAG é um projeto acadêmico desenvolvido com o objetivo de simular
          um sistema de monitoramento de animais por meio de simulação de uma
          coleira inteligente e uma plataforma web.
        </p>


          <a href="https://petag-project.vercel.app/" target="_blank">
            Conhecer
          </a>
              <img src={gps} alt="gps_icon" 
        className={styles.gps}
        />
  
      </div>
      
    </>
  );
}
