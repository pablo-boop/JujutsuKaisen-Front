import axios from "axios";
import { NextResponse } from "next/server";

//obtem a URL
const url = process.env.BASE_URL + '/students';

//função que trata as requisições GET
export async function GET() {
    try {
        const response = await axios.get(url);
        //retorna uma resposta para a próxima camada de aplicação com os dados recebidos
        return NextResponse.json(response.data);
    } catch (error) {
        //console.log("[ORDER_GET]", error);
        //em caso de erro nas requisições, retorna uma mensagem de erro interno no servidor
        return NextResponse("Erro de servidor lá no back", { status: 500 })
    }
}

//função que trata as requisições POST
export async function POST(req) {
    //extrai os parametros das requisições 
    const params = await req.json();

    try {
        const response = await axios.post(url, params);

        //retorna uma resposta com os dados recebidos.
        return NextResponse.json(response.data);
    } catch (error) {
        //em caso de erro nas requisições, retorna uma mensagem de erro interno no servidor
       // console.log("[ORDER_POST]", error);
        return new NextResponse("Erro interno do servidor!", { status: 500 });
    }
}

// //função que trata as requisições PUT
// export async function PUT(req, res) {
//     //extrai os parametros das requisições
//     const params = await req.json();

//     try {
//         const response = await axios.put(url, params);

//         //retorna uma resposta com os dados recebidos.
//         return res.status(200).json(response.data);
//     } catch (error) {
//         //em caso de erro nas requisições, retorna uma mensagem de erro interno no servidor
//         console.log("[ORDER_PUT]", error);
//         return res.status(500).send("Erro interno do servidor!");
//     }
// }

// //função que trata as requisições DELETE
// export async function DELETE(req, res) {
//     //extrai os parametros das requisições
//     const params = await req.json();

//     try {
//         const response = await axios.delete(`${url}/${params.id}`);

//         //retorna uma resposta com os dados recebidos.
//         return res.status(200).json(response.data);
//     } catch (error) {
//         //em caso de erro nas requisições, retorna uma mensagem de erro interno no servidor
//         console.log("[ORDER_DELETE]", error);
//         return res.status(500).send("Erro interno do servidor!");
//     }
// }