import styles from "../../projects/project.module.css";
import gps from "../../../../assets/img/ic--baseline-place.svg";

export default function Petag() {
  const techs = ["API REST", "JWT Auth", "PostgreSQL" ];

  return (
    <>
      <div className={styles.project}>
        <h1 className={styles.whiteLabel}>
          <span className={styles.blue}>Pe</span>TAG
        </h1>

        <p>
          O PeTAG é um projeto acadêmico desenvolvido com o objetivo de simular
          um sistema de monitoramento de animais por meio de simulação de uma
          coleira inteligente e uma plataforma web.
        </p>

        <div className={styles.techs}>
          {techs.map((tech) => (
            <span key={tech} className={styles.tech}>{tech}</span>
          ))}
        </div>

        <a
          href="https://petag-project.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Conhecer
        </a>
        <img src={gps} alt="gps_icon" className={styles.gps} />
      </div>
    </>
  );
}
