import { createSignal } from 'solid-js';
import type { Component } from 'solid-js';

import copy_icon from '../assets/icons/copy-icon.svg';
import correct_icon from '../assets/icons/correct.svg';

import styles from '../styles/Icon.module.scss';

const Copy: Component<{ text: string }> = (props) => {
  const [copied, setCopied] = createSignal(false);

  function copy() {
    navigator.clipboard.writeText(props.text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
    });
  }

  return (
    <img 
      src={copied() ? correct_icon : copy_icon} 
      alt="Copy icon"
      onDragStart={(e) => e.preventDefault()} 
      class={styles.icon}
      onClick={copy}
    />
  );
};

export default Copy;