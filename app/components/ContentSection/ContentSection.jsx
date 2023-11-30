// Importação do React
import React from 'react';
import styles from './ContentSection.module.css';

// Componente ContentSection
// Este componente recebe duas props: title, text e gif
// title: O título da seção de conteúdo
// text: O texto da seção de conteúdo
export default function ContentSection({ title, text}) {
    // O componente retorna um div com uma classe de estilo 'content'
    // Dentro deste div, temos um h3 que exibe o título e um p que exibe o texto
    return (
      <div className={styles.content}>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    )
  }