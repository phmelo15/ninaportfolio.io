import { FaLaptopCode } from "react-icons/fa";
import { styles } from "./styles";

export default function Experience() {
  return (
    <section className={styles.Container} id="experience">
      <text className={styles.Title}>
        <strong className={styles.TitleMark}>EXPERIÊNCIA</strong>
      </text>
      <div className={styles.ContainerExperience}>
        <div className={styles.Logo}>
          <FaLaptopCode size={28} />
        </div>
        <div className={styles.ContainerText}>
          <text className={styles.Cargo}>
            Desenvolvedor Full-Stack - Freelancer{" "}
          </text>
          <text className={styles.Date}>07/2021 - Data atual</text>
        </div>
      </div>
    </section>
  );
}
