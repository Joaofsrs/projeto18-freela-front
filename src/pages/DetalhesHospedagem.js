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
                <h1>Detalhes da hospedagem para {detalhes[0].localHospedagem}</h1>
    
                <FotosHospedagem>
                    {
                        fotos.map((foto) => 
                            <img key={foto.id} src={foto.url} alt="foto hospedagem" />
                        )
                    }
                </FotosHospedagem>

                <div className="main">
                    <CaracteristicasHospedagem>
                        <li>{detalhes[0].localHospedagem}</li>
                        <li>{detalhes[0].precoHospedagem}</li>
                        <li>{detalhes[0].descricaoHospedagem}</li>
                    </CaracteristicasHospedagem>

                    <ComodidadesHospedagem>
                        {
                            comodidades.map((comodidade) => 
                                <li key={comodidade.id}>{comodidade.comodidade}</li>
                            )
                        }
                    </ComodidadesHospedagem>
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
    .main{
        width: 100vw;
        display: flex;
    }
`

const FotosHospedagem = styled.div`
    display: flex;
    align-items: center;
    height: 150px;
    border-radius: 3px;
    border: 1px solid #DBDBDB;
    padding: 0 18px;
    overflow-x: scroll;
    overflow-y: hidden;
    position: relative;
    margin-bottom: 40px;
    img{
        height: 130px;
        width: 130px;
        margin: 10px;
    }
`

const CaracteristicasHospedagem = styled.ul`
    background-color: #1e66eb;
    width: 45%;
    height: 400px;
    border-radius: 6px;
    margin: auto;
    list-style-type: circle;
    li{
        margin-top: 5px;
        margin-left: 20px;
    }
`

const ComodidadesHospedagem = styled.ul`
    background-color: #1e66eb;
    width: 45%;
    height: 400px;
    border-radius: 6px;
    margin: auto;
    list-style-type: circle;
    li{
        margin-top: 5px;
        margin-left: 20px;
    }
`