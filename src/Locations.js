import Home from './Home'
import Position from './Position'
import Specificity from './Specificity';
import Display from './Display';
import Zindex from './Zindex';
import Sass from './Sass';
import Modal from './Modal';
import BadStyle from './BadStyle';
import Movement from './Movement';

export default [
    {
        path: "/",
        text: 'Home',
        component: Home
    },
    {
        path: "/badstyle",
        text: 'Bad Style',
        component: BadStyle
    },
    {
        path: "/position",
        text: 'Position',
        component: Position
    },
    {
        path: "/specificity",
        text: 'Specificity',
        component: Specificity
    },
    {
        path: "/display",
        text: 'Display',
        component: Display
    },
    {
        path: "/zindex",
        text: 'Z-Index',
        component: Zindex
    },
    {
        path: "/sass",
        text: 'sass',
        component: Sass  
    },
    {
        path: "/move",
        text: 'movement',
        component: Movement  
    },
    {
        path: "/modal",
        text: 'modal',
        component: Modal  
    },
]