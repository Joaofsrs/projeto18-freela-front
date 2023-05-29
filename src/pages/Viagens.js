import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

export default function Viagens() {
    const { cidade } = useParams();
    const [viagens, setViagens] = useState([])

    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`https://freelaviagem.onrender.com/destino?cidade=${cidade}`)
            .then((res) => {
                setViagens(res.data);
                console.log(res.data);
            })
            .catch((err) => {
                alert(err.message);
            });

    }, []);


    function detalhesViagem(id){
        navigate(`/viagem/${id}`)
    }

    return (
        <ViagensStyled>
            <h1>Passagens para {cidade.toUpperCase()}</h1>

            <div>
                {
                    viagens.map((viagem) =>
                        <ViagemCardStyled key={viagem.id} onClick={() => detalhesViagem(viagem.id)}>
                            <img src={viagem.urlFoto} />
                            <p>{viagem.horarioPartida}</p>
                            <p>R$ {viagem.precoPassagem}</p>
                            <p>Saindo de {viagem.origem}</p>
                        </ViagemCardStyled>
                    )

                }
            </div>
        </ViagensStyled>
    );
}

const ViagensStyled = styled.div`
    display: flex;
    flex-direction: column;
    h1{
        text-align: center;
        font-size: 40px;
        margin: 10px
    }
    div{
        display: flex;
        flex-wrap: wrap;
    }
`

const ViagemCardStyled = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #1e66eb;
    width: 160px;
    height: 250px;
    border-radius: 6px;
    margin-top: 10px;
    margin-left: 8px;
    margin-right: 8px;
    img{
        margin: auto;
        width: 150px;
        height: 150px;
        border-radius: 6px;
    }
    p{
        margin-bottom: 10px;
        font-size: 15px;
        text-align: center;
    }
    -webkit-box-shadow: 10px 10px 11px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 10px 10px 11px 0px rgba(0,0,0,0.75);
    box-shadow: 10px 10px 11px 0px rgba(0,0,0,0.75);
`