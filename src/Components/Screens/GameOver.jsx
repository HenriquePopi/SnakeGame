import React from 'react';
import {  NeonButton,Centralizer, Space} from '../Styles/styledComponents';

import Game from "./Game"
const GameOver = () => {
    const [startGame, setStartGAme] = React.useState(false)
    
    if(startGame)
        return <Game SNAKE ={[{x:10,y:10},{x:20,y:10},{x:30,y:10}]}/>
    return (
        <>
            <Space height="20rem"/>
            <Centralizer>
                <NeonButton onClick={()=>setStartGAme(true)}>Start Game</NeonButton>
            </Centralizer>
        
        </>
    );
};

export default GameOver;