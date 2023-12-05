"use client"
import React from 'react'
import { useState, useEffect } from "react";
import style from "./jogo.module.css"

function jogo() {
    //Estado API
    const [dados, setDados] = useState(null)

    //Estado das propriedades
    const [name, setName] = useState('')
    const [type, setType] = useState('')
    const [img, setImg] = useState('')
    const [typeDesc, setTypeDesc] = useState('')
    const [description, setDescription] = useState('')
    const [atk, setAtk] = useState('')
    const [def, setDef] = useState('')
    const [mp, setMp] = useState('')
    const [level, setLevel] = useState('')

    //Personagens no jogo
    let p1 = Personagem();
    let p2 = Personagem();
    let p3 = Personagem();
    let p4 = Personagem();
    let p5 = Personagem();
    let p6 = Personagem();
    let p7 = Personagem();
    let p8 = Personagem();
    let p9 = Personagem();
    let p10 = Personagem();

    //Deck dos jogadores
    const [player1deck, setPlayer1Deck] = useState([p1, p2, p3, p4, p5])
    const [player2deck, setPlayer2Deck] = useState([p6, p7, p8, p9, p10])

    //MP dos dois players
    let player1mp = p1[7] + p2[7] + p3[7] + p4[7] + p5[7]
    let player2mp = p6[7] + p7[7] + p8[7] + p9[7] + p10[7]

    //Cartas selecionadas por cada player
    const [selectedCard1, setSelectedCard1] = useState('')
    const [selectedCard2, setSelectedCard2] = useState('')

    //Vida dos players
    let player1Life = 5
    let player2Life = 5

    //Variavel para matar carta
    let player1Kill = false
    let player2Kill = false

    function Personagem() {
        let random = Math.floor(Math.random() * 27)

        useEffect(() => {
            async function fetchCards() {
                try {
                    const response = await axios.get('/api/cards');
                    setDados(response.data.cards);
                } catch (error) {
                    console.error("Error fetching data:", error);
                }
            }

            fetchCards();
        }, []);

        const encontrou = dados.find(personagem => {
            personagem.id == random
        });

        if (encontrou) {
            setName(encontrou.name)
            setType(encontrou.type)
            setImg(encontrou.img)
            setTypeDesc(encontrou.typeDesc)
            setDescription(encontrou.description)
            setAtk(encontrou.atk)
            setDef(encontrou.def)
            setMp(encontrou.atk + encontrou.def)
            setLevel(encontrou.level)
        }

        const personagem = [name, type, img, typeDesc, description, atk, def, mp, level]

        setName('')
        setType('')
        setImg('')
        setTypeDesc('')
        setDescription('')
        setAtk('')
        setDef('')
        setMp('')
        setLevel('')

        return personagem
    }

    const Balence = () => {
        if (player1mp > 1000) {
            p1 = Personagem();
            p2 = Personagem();
            p3 = Personagem();
            p4 = Personagem();
            p5 = Personagem();
        }
        if (player2mp > 1000) {
            p6 = Personagem();
            p7 = Personagem();
            p8 = Personagem();
            p9 = Personagem();
            p10 = Personagem();
        }
    }

    const Select = (id, player) => {
        let findCard
        if(player == 1){
            findCard = player1deck.find(personagem => {
                personagem.id == id
            })
        } else {
            findCard = player2deck.find(personagem => {
                personagem.id == id
            })
        }  
    }

    const EndOfTheGame = () => {
        if (player1Life == 0) {
            console.log("jogador 2 ganhou")
        } else {
            console.log("jogador 1 ganhou")
        }
    }

    const KillCard = () => {
        if (player1Kill == true) {
            setPlayer1Deck(
                player1deck.filter (personagem => {
                    personagem.id != selectedCard1.id
                })
            )
            player1Kill = false
        } else {
            setPlayer2Deck(
                player2deck.filter (personagem => {
                    personagem.id != selectedCard2.id
                })
            )
            player2Kill = false
        }
    }

    const Battle = () => {
        if (player1Life || player2Life == 0) {
            EndOfTheGame()
        } else {
            if (selectedCard1 > selectedCard2) {
                console.log('jogador 1 ganhou essa batalha')
                player2Life - 1
                player2Kill = true
                KillCard

            } else {
                console.log('jogador 2 ganhou essa batalha')
                player1Life - 1
                player1Kill = true
                KillCard
            }
            setSelectedCard1('')
            setSelectedCard2('')
        }
    }

    
    return (
        <div>

        </div>
    )
}

export default jogo
