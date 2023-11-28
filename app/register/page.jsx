'use client'

//Imports
import axios from "axios";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Cards from "../components/Cards/Cards";


const Register = () => {
    const [dados, setDados] = useState([])
    
    //UseEffect API
    useEffect(() => {
        async function fetchCards() {
            try {
                const response = await axios.get("/api/cards");
                setDados(response.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }
    
        fetchCards();
    }, []);
    
    return (
        <div>
            <h1>Teste</h1>
            <div>
                {
                    dados ? (
                        <div key={dados.id}>
                            <Cards name={dados.name} img={dados.img} description={dados.description} level={dados.level} atk={dados.atk} def={dados.def}/>
                        </div>
                    ) : (
                        <p>carregando API...</p>
                    )
                }
            </div>
        </div>
    )
}

export default Register;