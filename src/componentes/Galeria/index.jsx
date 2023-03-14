import { useState } from 'react';
import Tags from '../Tags';
import styles from './Galeria.module.scss';
import Cards from '../Cards';
import fotos from './fotos.json';

export default function Galeria() {
  const [itens, setItens] = useState(fotos);
  const tags = [...new Set(fotos.map((valor) => valor.tag))]

  const filtraFotos = (tag) => {
    const novasFotos = fotos.filter((foto) => {
      return foto.tag ===tag
    })
    setItens(novasFotos)
  }

  const setAllFotos = () => {
    setItens(fotos);
  }


  return (
    <section className={styles.galeria}>
        <h2>Navegue pela galeria</h2>
        <Tags tags={tags} filtraFotos={filtraFotos} setItens={setItens} setAllFotos={setAllFotos} />
        <Cards itens={itens} styles={styles}/>
    </section>
  )
}
