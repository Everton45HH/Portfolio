import styles from "../../projects/project.module.css";
import terminal from "../../../../assets/img/ic--baseline-terminal.svg";

export default function codex() {
  const techs = ["Python", "Flask", "Docker"];
  return (
    <>
      <div className={styles.project}>
        <h1 className={styles.blackLabel }>
          <p style={{ color: "aqua" }}>CODEX</p>
        </h1>

        <p>
          Codex é um ecossistema de aprendizado e competição, voltado para a
          programação competitiva e o desenvolvimento de raciocínio lógico de
          alto nível. (Projeto não público)
        </p>
        <div className={styles.techs}>
          {techs.map((tech) => (
            <span key={tech} className={styles.tech}>
              {tech}
            </span>
          ))}
        </div>

        <a
          href="https://github.com/CodexHQ"
          className={styles.blocked}
          target="_blank"
        >
          Conhecer
        </a>
        <img src={terminal} alt="icone_de_terminal" className={styles.terminal} />
      </div>
    </>
  );
}
