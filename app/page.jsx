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
import ContentSection from './components/ContentSection/ContentSection';

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
        <div className={styles.content_container}>
          <h2 className={styles.h2}>Explicação do Jogo de Cartas</h2>
          <div className={styles.imgLayout}>
              <img src="https://media.tenor.com/hU9BRsHCUyIAAAAC/i-dont-get-it-jujutsu-kaisen.gif" alt="" />
            </div>
            <div className={styles.txt}>
              <ContentSection src={"cartas1.png"} alt={"exemplo de cartas"} title="Explicação do TCG" text="Um sistema de cartas com dois tipos principais sendo as cartas de personagem e as cartas de efeito. No começo de cada jogo é sorteado 5 cartas de personagens e 2 cartas de efeito, o objetivo é conseguir derrotar os 5 personagens do adversário para ganhar a partida." />
              <ContentSection src={"cartaDetalhe.png"} alt={"detalhes tecnicos"} title="Frases Técnicas" text="-MP ( Média por personagem ), é a soma do ataque e a defesa do personagem; -NP ( Nível de personagem ): Todo personagem possui um ranking que define sua raridade e o seu nível de força, começando pelo nível 4 até o 1 e também o nível especial;" />
              <ContentSection src={"campoDeBatalha.png"} alt={"campo de batalha"} title="Mecânicas e regras" text="No começo de todo o jogo é somado o ataque e a defesa de todos personagens, se o valor da soma de todos os personagens for maior que uma média específica a mão é rerolada para balancear as duas mãos; Quando a batalha começar será selecionado um personagem de cada lado, a ganhador será definido pelo maior MP ( Média por personagem ); Dedo do Sukuna: Se em uma partida começar e em sua mão tiver o personagem Itadori e a carta de efeito do “Dedo do Sukuna”, o dedo sumirá e será sumonado na sua mão a carta do Sukuna; Expansão de domínio: Uma carta de efeito que possui a funcionalidade de aumentar um NP do personagem escolhido aumentando o ataque e a defesa do personagem;" />
            </div>
           
        </div>
        <div className={styles.animeAbout}>
          <h2 className={styles.h2}>Sobre o anime Jujutsu Kaisen</h2>
          <div className={styles.content_container}>
              <div className={styles.txt}>
                <ContentSection title={'Contextualizacao da obra'} text="Jujutsu Kaisen é um anime que mergulha os espectadores em um mundo repleto de ação sobrenatural e magia sombria. A trama começa quando Yuji Itadori, um estudante do ensino médio, se depara com uma reliquia amaldiçoada que abriga poderosas maldições. Ao tentar proteger seus amigos, Yuji acidentalmente se envolve em uma série de eventos que o levam à Escola Técnica de Jujutsu, onde aprendizes combatem maldições e amaldiçoados.   A narrativa se desenrola com a missão central da escola: coletar e destruir partes do corpo amaldiçado de Sukuna, uma entidade amaldiçoada de incrível poder. Ao longo do anime, os personagens, incluindo Yuji, Megumi e Nobara, passam por um intenso desenvolvimento, tanto em habilidades quanto em complexidade emocional. O enredo é pontuado por batalhas emocionantes, estratégias astutas e a exploração de temas como amizade, sacrifício e o peso do poder. A introdução dos Cursed Wombs e o Kyoto Exchange Event adicionam camadas à trama, aumentando a tensão e a imprevisibilidade.A relação entre Yuji e Sukuna é particularmente intrigante, destacando-se como um elemento central que continua a se aprofundar ao longo da história. O anime recebeu aclamação por sua animação de alta qualidade, coreografias de luta impressionantes e personagens carismáticos. No ápice da temporada, o anime atinge um clímax impactante, proporcionando aos espectadores uma conclusão satisfatória enquanto estabelece expectativas elevadas para futuros desdobramentos. Jujutsu Kaisen cativa pela mistura habilidosa de ação intensa, desenvolvimento de personagens e uma mitologia rica, tornando-se uma experiência envolvente para os fãs de anime." />
              </div>
              <div className={styles.imgLayout}>
                <img src="https://img.wattpad.com/ef1f2ee6c1e26e0380738635f80cbcebc40e72d5/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f4b75534746743170554a6b366b773d3d2d313038353630383036332e313638643765323661323462393335393438323931303532393438332e676966" alt="" />
              </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
