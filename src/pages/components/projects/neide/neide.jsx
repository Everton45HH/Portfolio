import styles from "../../projects/project.module.css";
import chef from "../../../../assets/img/mdi--chef-hat.svg";

export default function codex() {
  const techs = ["Python", "Flask", "JWT Auth"];
  return (
    <>
      <div className={styles.project}>
        <h1 className={styles.whiteLabel} style={{"position" : "realtive"}}>
          <img src={chef} alt="icone_de_chapeu_de_cozinheiro" className={styles.chef} />
          <p style={{ color: "rgb(255, 32, 166)" }}>NEIDE CONFEITARIA</p>
        </h1>

        <p>
          Neide confeitaria é um Sistema Web de Cardápio Digital e Gestão de Pedidos
          para Microempresa de Confeitaria Artesanal
        </p>
        <div className={styles.techs}>
          {techs.map((tech) => (
            <span key={tech} className={styles.tech}>
              {tech}
            </span>
          ))}
        </div>

        <a
          href="https://github.com/bolo-as-a-service/neide-confeitaria"
          className={styles.blocked}
          target="_blank"
        >
          Conhecer
        </a>
        
      </div>
    </>
  );
}
