import type { Component } from 'solid-js';
import copy_icon from '../assets/icons/copy-icon.svg';

import styles from '../styles/Copy.module.scss'

const Copy: Component<{ text: string }> = (props) => {
  function copy() {
    navigator.clipboard.writeText(props.text);
  }

  return (
    <img 
      src={copy_icon} 
      alt="Copy icon" 
      onDragStart={(e) => e.preventDefault()} 
      class={styles.copy_icon}

      onClick={copy}
    />
  );
};

export default Copy;
