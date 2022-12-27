import styles from './styles.module.scss'

export function Header(){
    return(
        <header>
            <div className={styles.header}>
                <img src="/images/logo.png" alt="Logo ivasko" />
                <div className={styles.menu}>
                    <span>Início</span>
                    <span>Quem Somos</span>
                    <span>Lojas</span>
                    <span>Livro de Receitas</span>
                    <span>Contato</span>
                    <span>Trabalhe Conosco</span>
                    <span>CARTÃO IVASKO</span>
                </div>
                <div className={styles.icon}>
                    <div>
                    <img src="/assets/face.png" alt="Logo  facebook" />
                    </div>

                    <div>
                    <img src="/assets/insta.png" alt="Logo Instagram" />
                    </div>

                    <div>
                    <img src="/assets/linkedin.png" alt="Logo Linkdin" />
                    </div> 
                </div>
            </div>
        </header>
    )
}