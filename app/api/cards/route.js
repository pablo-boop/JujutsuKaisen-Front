import axios from "axios";

import { NextResponse } from "next/server";

//obtem a URL
const url = process.env.BASE_URL;

//função que trata as requisições GET
export async function GET() {
    try {
        const response = await axios.get(url);

        //retorna uma resposta para a próxima camada de aplicação com os dados recebidos
        return NextResponse.json(response.data);
    } catch (error) {
        console.log("[ORDER_GET]", error);
        //em caso de erro nas requisições, retorna uma mensagem de erro interno no servidor
        return new NextResponse("Erro interno do servidor!", { status: 500 });
    }
}

//função que trata requisições POST
export async function POST(request) {
    //extrai os parametros das requisições 
    const params = await request.json();

    try {
        const response = await axios.post(url, params);

         //retorna uma resposta com os dados recebidos.
        return NextResponse.json(response.data);
    } catch (error) {
         //em caso de erro nas requisições, retorna uma mensagem de erro interno no servidor
        console.log("[ORDER_POST]", error);
        return new NextResponse("Erro interno do servidor!", { status: 500 });
    }
}