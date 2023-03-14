import React from 'react';
import Card from '../Card';

export default function Cards({styles, itens}) {
  return (
    <ul className={styles.galeria__cards}>
        {itens.map((item) => (
            <Card key={item.id} styles={styles} item={item} />
        ))}
    </ul>
  )
}
