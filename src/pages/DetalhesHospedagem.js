import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

export default function DetalhesHospedagem(){
    const { id } = useParams();
    const [detalhes, setDetalhes] = useState(undefined);
    const [fotos, setFotos] = useState(undefined);
    const [comodidades, setComodidades] = useState(undefined);
    
    useEffect(() => {
        async function getHospedagem() {
            try {
                const hospedagemDB = await axios.get(`https://freelaviagem.onrender.com/hospedagens/${id}`);
                const fotosDB = await axios.get(`https://freelaviagem.onrender.com/hospedagens/fotos/${id}`);
                const comodidadesDB = await axios.get(`https://freelaviagem.onrender.com/hospedagens/comodidades/${id}`);
    
                setDetalhes(hospedagemDB.data);
                setFotos(fotosDB.data);
                setComodidades(comodidadesDB.data);
                console.log(hospedagemDB.data);
                console.log(fotosDB.data);
                console.log(comodidadesDB.data);
            } catch (e) {
                console.log(e);
            }
        }
        if(!detalhes && !fotos && !comodidades){
            getHospedagem();
        }
    }, [detalhes, fotos, comodidades]);

    if(!detalhes){
        return(
            <div>Carregando</div>
        );  
    }else{
        return (
            <DetalhesPassagem>
                <h1>Detalhes da passagem para {detalhes[0].destino}</h1>
    
                <div className="imagem">
                    <div>
                        <p>Cidade de Destino: {detalhes[0].destino}</p>
                        <p>Cidade de Origem: {detalhes[0].origem}</p>
                        <p>Companhia aérea: {detalhes[0].companhia}</p>
                        <p>Horário de partida: {detalhes[0].horarioPartida}</p>
                        <p>Horário previsto de chgada: {detalhes[0].horarioChegada}</p>
                        <p>Preço da passagem: R$ {detalhes[0].precoPassagem}</p>
                    </div>
                    <img src={detalhes[0].urlFoto} />
                </div>
            </DetalhesPassagem>
        );
    }
}

const DetalhesPassagem = styled.div`
    h1{
        text-align: center;
        font-size: 40px;
        margin: 10px
    }
    p{
        margin: 10px;
        font-size: 25px;
    }

    .imagem{
        margin-top: 30px;
        display: flex;
        justify-content: space-around;
        img{
            width: 200px;
            height: 200px;
        }
    }
`