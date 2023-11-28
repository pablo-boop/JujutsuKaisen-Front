'use client'

//Imports
import styles from './register.module.css'
import axios from "axios";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Cards from "../components/Cards/Cards";
import Modal from '../components/Modal/Modal';


const Register = () => {
    const [dados, setDados] = useState([])
    
    //UseEffect API
    // useEffect(() => {
    //     async function fetchCards() {
    //         try {
    //             const response = await axios.get("/api/cards");
    //             setDados(response.data);
    //         } catch (error) {
    //             console.error("Error fetching data:", error);
    //         }
    //     }
    
    //     fetchCards();
    // }, []);
    
    return (
        <div>
            <h1>Teste</h1>
            <Modal buttonTitle={'Modal Teste'} modalTitle={'Contato enviado!'} modalImg={'https://cdn.icon-icons.com/icons2/1524/PNG/512/verified_106498.png'}/>
        </div>
    )
}

export default Register;