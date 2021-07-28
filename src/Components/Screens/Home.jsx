import React from 'react';
import Animation from './Animation';
import { NeonLetter , NeonLetterBlink, LetterContainer, NeonButton,Centralizer, Space, AnimatedContainer} from '../Styles/styledComponents';

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
        <AnimatedContainer animate ={startAnimation} delay ={"5.5s"}>
            <Space height="8rem"/>
        
            <LetterContainer>{
                text.cyber.map((letter,i) => {
                    if ( i === 2) return <NeonLetterBlink delay ="2.1s">{letter}</NeonLetterBlink>
                    return <NeonLetter>{letter}</NeonLetter>
            })
            }</LetterContainer>
            <LetterContainer>{
                text.snake.map((letter,i) => {
                    if ( i === 3) return <NeonLetterBlink delay ="2.25s" >{letter}</NeonLetterBlink>
                    return <NeonLetter>{letter}</NeonLetter>
            })
            }
            
            </LetterContainer>
        
            <Space height="8rem"/>
            <Centralizer>
             <NeonButton onClick={()=> setStartAnimation("blink")} >Start Game</NeonButton>
            </Centralizer>
            </AnimatedContainer>
            </>
    );
};

export default Home;