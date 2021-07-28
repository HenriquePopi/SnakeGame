import React from 'react';
import useSnake from "../Hooks/useSnake"
import useCanvas from '../Hooks/useCanvas';
import drawSnake from "../Drawers/Snake"
import { Canvas } from '../Canvas/Canvas.style';

const w = window.innerWidth;
const h = window.innerHeight;
const Animation = ({startGame}) => {

    let [snake, ] = useSnake(150, [{x:50,y:50},{x:50,y:50},{x:50,y:50}])
    const canvas = useCanvas(drawSnake, snake, { anime: true });

    setTimeout(()=>{
            return startGame(snake)
        },7000)

    return (
       
        <Canvas width={"800px"} height={"600px"}  ref= {canvas}/>
        
        
    )
};

export default Animation;

