import { Images } from "@/constants/Images";
import Image from "next/image";
import Technologies from "../Technologies/Technologies";
import { styles } from "./styles";

export default function AboutMe() {
  return (
    <section className={styles.Container}>
      <div className={styles.ContainerPhoto}>
        <Image
          src={Images.profilePic}
          alt="my photo"
          className={styles.Photo}
        />
        <text className="mt-[20px] text-[12px] text-white">
          Luanina Zandoná
        </text>
        <text className="mt-[2px] text-[12px] text-white" id="about-me">
          Desenvolvedora Full-Stack
        </text>
        <text className={styles.Presentation}>
          Bem vindo ao meu{" "}
          <strong className={styles.Mark}>portfólio! {":)"}</strong>
        </text>
        <text className={styles.ExperienceDesc}>
          Olá! meu nome é Luanina Zandoná, desenvolvedora com ampla experiência
          em projetos freelancer, atuando tanto no desenvolvimento mobile,
          front-end, quanto backend. Ao longo da minha carreira, participei de
          diversos projetos, desde a fase de concepção até a produção, sempre
          focada em entregar soluções completas, eficientes e escaláveis. Tenho
          uma sólida experiência na criação de aplicativos mobile, sempre
          priorizando uma experiência intuitiva e agradável para o usuário. No
          desenvolvimento front-end, sou apaixonada por usar tecnologias como
          React e Next.js, unindo design e funcionalidade para criar interfaces
          modernas e performáticas. No backend, domino tecnologias como Node.js,
          Nest.js e bancos de dados como MongoDB, MySQL e PostgreSQL, garantindo
          a segurança e a performance dos sistemas que desenvolvo.
        </text>
        <text className={styles.TitleTec}>TECNOLOGIAS</text>
        <Technologies />
      </div>
    </section>
  );
}
