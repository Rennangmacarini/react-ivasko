import styles from '../styles.module.scss'

//interface de Cards
//a inteface é uma forma de definir o que o componente vai receber
interface CardProps {
  title: string;
  image: string;
  description: string;
  handleModal: () => void;
}

//aqui é onde o componente é criado
//dentro dos parenteses é onde é definido o que o componente vai receber
export function Card({ title, description, image, handleModal }: CardProps) {
  return (
    <div className={styles.card}>
      <img src={image} alt="" />
      <h3>{title}</h3>
      <p>{description}</p>

      <button onClick={handleModal} >Receita Completa</button>

    </div>
  )
}