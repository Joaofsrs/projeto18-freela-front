import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import HomePage from "./pages/HomePage";
import Hospedagens from "./pages/Hospedagens";
import DetalhesHospedagem from "./pages/DetalhesHospedagem";
import Viagens from "./pages/Viagens";
import DetalhesViagem from "./pages/DetalhesViagem";
import UserContext from "./UserContext";
import { useState } from "react";

export default function App() {
    const [token, setToken] = useState("");

    return (
        <>
            <HeaderBar>VejaViagens</HeaderBar>
            <PagesContainer>
                <UserContext.Provider value={{ token, setToken }}>
                    <BrowserRouter>
                        <Routes>
                            <Route path="/" element={<HomePage />} />
                            <Route path="/hospedagens/:cidade" element={<Hospedagens />} />
                            <Route path="/hospedagem/:id" element={<DetalhesHospedagem />} />
                            <Route path="/viagens/:cidade" element={<Viagens />} />
                            <Route path="/viagem/:id" element={<DetalhesViagem />} />
                        </Routes>
                    </BrowserRouter>
                </UserContext.Provider>
            </PagesContainer>
        </>
    )
}

const PagesContainer = styled.main`
  width: 100vw;
  max-height: 100vh;
`

const HeaderBar = styled.header`
    background-color: #34b2cf;
    width: 100vw;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 27px;
`