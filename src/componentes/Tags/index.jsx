import styles from './Tags.module.scss';

export default function Tags({tags, filtraFotos ,setAllFotos}) {
  return (
    <div className={styles.tags}>
        <p>Filtre por tags:</p>
        <ul className={styles.tags__lista}>
          {tags.map((tag) => (
            <li key={tag} onClick={() => filtraFotos(tag)}>{tag}</li>
          ))}
          <li onClick={setAllFotos}>Todas</li>
        </ul>
    </div>
  )
}
