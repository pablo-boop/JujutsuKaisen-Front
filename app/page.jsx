"use client";
import axios from 'axios'
import styles from './page.module.css'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion';
import Cards from './components/Cards/Cards';
import { useScroll } from 'framer-motion';
import Parallax from './components/Parallax/Parallax';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

export default function Home() {
  //API
  const [cards, setCards] = useState([])

  //Framer Motion
  const { scrollYProgress } = useScroll();


  useEffect(() => {
    async function fetchCards() {
      try {
        const response = await axios.get("/api/cards");
        setCards(response.data.cards);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchCards();
  }, []);

  return (
    <>
    <Header />
      <main className={styles.main}>
        <Parallax />
        {/*explicação do anime*/}
          <div className={styles.anime_content}>
          <h1>O que é Jujutsu Kaisen</h1>
          {/*texto explicando Jujutso Kaisen*/}
          <div className={styles.content_text}>
            <p>
            "Jujutsu Kaisen" é um anime que mergulha os espectadores em um mundo repleto de ação sobrenatural e
             magia sombria. A trama começa quando Yuji Itadori, um estudante do ensino médio, se depara com uma
              reliquia amaldiçoada que abriga poderosas maldições. Ao tentar proteger seus amigos, Yuji
               acidentalmente se envolve em uma série de eventos que o levam à Escola Técnica de Jujutsu, onde
                aprendizes combatem maldições e amaldiçoados.
            </p>
          </div>

          <div className={styles.content_text}>
            <p>
            A narrativa se desenrola com a missão central da escola: coletar e destruir partes do corpo
             amaldiçado de Sukuna, uma entidade amaldiçoada de incrível poder. Ao longo do anime, os
              personagens, incluindo Yuji, Megumi e Nobara, passam por um intenso desenvolvimento, tanto em
               habilidades quanto em complexidade emocional.
            </p>
          </div>
          
          <div className={styles.content_text}>
            <p>
            O enredo é pontuado por batalhas emocionantes, estratégias astutas e a exploração de temas como
             amizade, sacrifício e o peso do poder. A introdução dos Cursed Wombs e o Kyoto Exchange Event
              adicionam camadas à trama, aumentando a tensão e a imprevisibilidade.
            </p>
          </div>

          <div className={styles.content_text}>
            <p>
            A relação entre Yuji e Sukuna é particularmente intrigante, destacando-se como um elemento central
             que continua a se aprofundar ao longo da história. O anime recebeu aclamação por sua animação de
              alta qualidade, coreografias de luta impressionantes e personagens carismáticos.
            </p>
          </div>
        </div>
        {/*explicação do jogo*/}
        <div className={styles.content_container}>
          <h1>Explicação do jogo</h1>
          {/*texto explicando o TCG*/}
          <div className={styles.content}>
            <h3>Explicação do TCG:</h3>
            <p>Um sistema de cartas com dois tipos principais sendo as cartas de personagem e as cartas de efeito.
              No começo de cada jogo é sorteado 5 cartas de personagens e 2 cartas de efeito, o objetivo é
              conseguir derrotar os 5 personagens do adversário para ganhar a partida.
            </p>
          </div>
          {/*texto explicando frases tecnicas*/}
          <div className={styles.content}>
            <h3>Frases Técnicas:</h3>
            <p>-MP ( Média por personagem ), é a soma do ataque e a defesa do personagem;</p>
            <p> -NP ( Nível de personagem ): Todo personagem possui um ranking que define sua raridade e o seu
              nível de força, começando pelo nível 4 até o 1 e também o nível especial;
            </p>
          </div>
          {/*texto explicando as regras*/}
          <div className={styles.content}>
            <h3>Mecânicas e regras:</h3>
            <p>
              No começo de todo o jogo é somado o ataque e a defesa de todos personagens, se o valor da soma de
              todos os personagens for maior que uma média específica a mão é rerolada para balancear as duas
              mãos;
            </p>
            <p>
              Quando a batalha começar será selecionado um personagem de cada lado, a ganhador será definido pelo
              maior MP ( Média por personagem );
            </p>
            <p>
              Dedo do Sukuna: Se em uma partida começar e em sua mão tiver o personagem Itadori e a carta de efeito
              do “Dedo do Sukuna”, o dedo sumirá e será sumonado na sua mão a carta do Sukuna;
            </p>
            <p>
              Expansão de domínio: Uma carta de efeito que possui a funcionalidade de aumentar um NP do personagem
              escolhido aumentando o ataque e a defesa do personagem;
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}