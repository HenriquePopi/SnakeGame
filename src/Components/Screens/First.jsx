import React from 'react';
import { NeonLetter , NeonLetterBlink, NeonLetterBlink2,LetterContainer, NeonButton,Centralizer, Space} from '../styledComponents';

const text ={
    snake:["S",'N','A','K','E'],
    game:  ['G','A','M','E'],
    cyber:["C","Y","B",'E','R']
}



const First = () => {

    
    return (
        <>
        <LetterContainer>{
            text.cyber.map((letter,i) => {
                if ( i === 0) return <NeonLetterBlink delay ="2.1s">{letter}</NeonLetterBlink>
                return <NeonLetter>{letter}</NeonLetter>
        })
        }</LetterContainer>
         <LetterContainer>{
            text.snake.map((letter,i) => {
                if ( i === 3) return <NeonLetterBlink2 delay ="2.25s" >{letter}</NeonLetterBlink2>
                return <NeonLetter>{letter}</NeonLetter>
        })
        }</LetterContainer>
            <Space height="8rem"/>
            <Centralizer>
             <NeonButton >Start Game</NeonButton>
            </Centralizer>
        </>
    );
};

export default First;