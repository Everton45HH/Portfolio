import styles from "../../projects/project.module.css";
import pdf from "../../../../assets/img/line-md--document.svg";

export default function screenshot() {
  const techs = ["React", "Vercel", "PDF"];
  return (
    <>
      <div className={styles.project}>
        <h1 className={styles.whiteLabel}>
          <p className={styles.black}>
            ScreenShot<span className={styles.blue}>To</span>
            <span className={styles.red}>PDF</span>
          </p>
        </h1>

        <p>
          O site ScreenShoToPDF é uma plataforma simples para facilitar a
          conversão de Capturas de Telas(ScreenShots) para PDF
        </p>

        <div className={styles.techs}>
          {techs.map((tech) => (
            <span key={tech} className={styles.tech}>
              {tech}
            </span>
          ))}
        </div>

        <a href="https://etdev-screenshottopdf.vercel.app/" target="_blank">
          Conhecer
        </a>
        <img src={pdf} alt="gps_icon" className={styles.pdf} />
      </div>
    </>
  );
}
