import styles from "./styles.module.scss";

export function ContentOne() {
  return (
    <div className={styles.main}>
      <div className={styles.content}>
        <h1>Há 23 anos proporcionando
            <br />
            o que há de
        </h1>
        <h3>melhor</h3>
        <p>
          O Super Ivasko busca levar ao seus clientes produtos com preço baixo,
          sempre prezando pela qualidade. Além do nosso amplo mix de produtos,
          possui um padrão de qualidade para melhor atender o cliente, desde o
          atendimento até o açougue e panificadoras, onde todos os produtos são
          produzidos artesanalmente dentro das lojas.
        </p>
      </div>
      <div className={styles.imagem}>
        <img src="/images/bannerone.png" alt="" />
      </div>
    </div>
  );
}
