import React from 'react';
import Animation from './Animation';
import { NeonLetter , NeonLetterBlink, NeonLetterBlink2,LetterContainer, NeonButton,Centralizer, Space} from '../Styles/styledComponents';

const text ={
    snake:["S",'N','A','K','E'],
    game:  ['G','A','M','E'],
    cyber:["C","Y","B",'E','R']
}



const Home = ({startGame}) => {
    const [startAnimation, setStartAnimation] = React.useState(false)
    
    return (
        <>
         {startAnimation && <Animation startGame={startGame} />}
         <Space height="8rem"/>
        <LetterContainer>{
            text.cyber.map((letter,i) => {
                if ( i === 0) return <NeonLetterBlink2 delay ="2.1s">{letter}</NeonLetterBlink2>
                return <NeonLetter>{letter}</NeonLetter>
        })
        }</LetterContainer>
         <LetterContainer>{
            text.snake.map((letter,i) => {
                if ( i === 3) return <NeonLetterBlink delay ="2.25s" >{letter}</NeonLetterBlink>
                return <NeonLetter>{letter}</NeonLetter>
        })
        }</LetterContainer>
            <Space height="8rem"/>
            <Centralizer>
             <NeonButton onClick={()=> setStartAnimation(true)} >Start Game</NeonButton>
            </Centralizer>
            </>
        
    );
};

export default Home;