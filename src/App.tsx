import React from 'react';
import logo from './logo.svg';
import './App.css';
import ProgramFlowParent from "./components/ProgramFlowParent";
import Homepage from "./pages/Homepage";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Callback1Parent from "./components/Callback1Parent";
import Callback2Parent from "./components/Callback2Parent";
import FunctionConstClassParent from "./components/FunctionConstClassParent";

function App() {
    return (
        <div className="App">


            <BrowserRouter>
                {/*<Title />*/}
                <Routes>
                    <Route path={"/"} element={<Homepage/>}/>
                    <Route path={"/p1"} element={<ProgramFlowParent/>}/>
                    <Route path={"/p2"} element={<Callback1Parent />}/>
                    <Route path={"/p3"} element={<Callback2Parent />}/>
                    <Route path={"/p4"} element={<FunctionConstClassParent />}/>
                    {/**/}
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
