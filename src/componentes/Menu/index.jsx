import styles from './Menu.module.scss';
import icones from './icones.json';

export default function Menu() {
  return (
    <nav className={styles.menu}>
        <ul className={styles.menu__lista}>
            {icones.map((icone) => (
                <li className={styles.menu__item}>
                    <img src={icone.imagem} alt={icone.alt} />
                    <a href={icone.link}>{icone.nome}</a>
                </li>
            ))}
        </ul>
    </nav>
  )
}
