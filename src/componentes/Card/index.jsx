import like from './favorito.png';
import open from './open.png';

export default function Card({styles, item}) {
  return (
    <li key={item.id} className={styles.galeria__card} >
        <img
        className={styles.galeria__imagem}
        src={item.imagem}
        alt={item.titulo}
        />
        <p className={styles.galeria__descricao}>{item.titulo}</p>
        <div>
        <p>{item.creditos}</p>
        <span>
            <img src={like} alt="ícone coração de curtir" />
            <img src={open} alt="ícone de abrir modal" />
        </span>
        </div>
    </li>
  )
}
