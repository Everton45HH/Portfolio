import styles from "../../projects/project.module.css";
import terminal from "../../../../assets/img/ic--baseline-terminal.svg"

export default function codex() {
  return (
    <>
      <div className={styles.project}>
        <h1 style={{ "background-color": "black" }}>
          <p style={{ color: "aqua" }}>CODEX</p>
        </h1>

        <p>
          O PeTAG é um projeto acadêmico desenvolvido com o objetivo de simular
          um sistema de monitoramento de animais por meio de simulação de uma
          coleira inteligente e uma plataforma web.
        </p>

          <a href="#" target="_blank">
            Conhecer
          </a>
                <img src={terminal} alt="gps_icon" className={styles.terminal} />
      </div>
    </>
  );
}
