import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function HomePage(){
    const [cidade, setCidade] = useState({ cidade: "" })

    const navigate = useNavigate();

    function handleSelectChange(event) {
        setCidade({cidade: event.target.value})
    }


    function passagemClick(){
        if(cidade.cidade === ""){
            alert("Selecione uma cidade");
        }else{
            navigate(`/viagens/${cidade.cidade}`);
        }
    }

    function hospedagemClick(){
        if(cidade.cidade === ""){
            alert("Selecione uma cidade");
        }else{
           navigate(`/hospedagens/${cidade.cidade}`);
        }
    }

    return(
        <HomePageStyle>
                <select name="select" value={cidade.cidade}  onChange={handleSelectChange}>
                    <option value="" selected>Selecione uma cidade</option>
                    <option value="parana">Parana</option>
                    <option value="brasilia">Brasilia</option>
                    <option value="salvador">Salvador</option>
                </select>

                <div>
                    <button onClick={passagemClick}> PASSAGENS </button>
                    <button onClick={hospedagemClick}> HOSPEDAGENS </button>
                </div>
        </HomePageStyle>
    );
}

const HomePageStyle = styled.div`
    padding: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    select{ 
        text-align: center;
        border-radius: 5px;
        width: 300px;
        height: 40px;
    }
    div{
        margin-top: 30px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 30%;
        height: 200px;
        button{
            width: 45%;
            height: 30px;
            border-radius: 5px;
            border: none;
            background-color: blue;
        }
    }
`;