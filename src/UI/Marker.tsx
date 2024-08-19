import type { Component } from 'solid-js';

import { markVerse, unmarkVerse } from '../mark_verses'

import marker_icon from '../assets/icons/marker.svg';
import cross_icon from '../assets/icons/cross.svg';

import styles from '../styles/Icon.module.scss';

const Marker: Component<{book: string; chapter: number; verse: number; marked: boolean; onClick: () => void;}> = (props) => {
    function mark() {
        if(!props.marked)
            markVerse(props.book, props.chapter, props.verse);
        else
            unmarkVerse(props.book, props.chapter, props.verse);
    }
    return (
        <img 
            src={!props.marked ? marker_icon : cross_icon} 
            alt="Marker icon"
            onDragStart={(e) => e.preventDefault()} 
            class={styles.icon}

            onClick={() => {mark(); props.onClick();}}
        />
    );
};

export default Marker;