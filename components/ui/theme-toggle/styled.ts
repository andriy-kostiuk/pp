import styled from 'styled-components';

export const Toggle = styled.input`
  * {
    border: 0;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  :root {
    --dur: 0.3s;
    font-size: calc(40px + (80 - 40) * (100vw - 320px) / (2560 - 320));
  }

  body, input {
    color: hsl(0, 0%, 10%);
    font: 1em/1.5 sans-serif;
  }

  form, .toggle:before, .toggle:after {
    background: hsl(0, 0%, 90%);
  }

  form, .toggle {
    position: relative;
  }

  form {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }

  .curtain, .sr, .toggle:before, .toggle:after {
    position: absolute;
  }

  .curtain, .toggle:before, .toggle:after {
    transition: transform var(--dur);
  }

  .curtain, .toggle:before, .toggle:checked:after {
    transition-timing-function: ease-out;
  }

  .curtain, .sr {
    top: 0;
    left: 0;
  }

  .curtain {
    background: hsl(0, 0%, 100%);
    mix-blend-mode: difference;
    pointer-events: none;
    width: 100%;
    height: 100%;
    transform: scaleX(0);
    transform-origin: 0 50%;
  }

  .sr, .toggle {
    overflow: hidden;
  }

  .sr {
    clip: rect(1px, 1px, 1px, 1px);
    color: transparent;
    width: 1px;
    height: 1px;
  }

  .toggle {
    background: currentColor;
    border-radius: 0.75em;
    cursor: pointer;
    width: 3em;
    height: 1.5em;
    -webkit-appearance: none;
    appearance: none;
    -webkit-tap-highlight-color: transparent;
  }

  .toggle:before, .toggle:after {
    border-radius: 50%;
    content: "";
    display: block;
    top: 0.25em;
    left: 0.25em;
    width: 1em;
    height: 1em;
  }

  .toggle:before, .toggle:checked:after {
    transition-delay: 0s;
  }

  .toggle:checked:before, .toggle:after {
    transition-delay: calc(var(--dur) * 0.75);
    transition-timing-function: cubic-bezier(0.3, 1.6, 0.5, 0.7);
  }

  .toggle:before {
    transform: translateX(-1.5em);
  }

  .toggle:checked:before {
    transform: translateX(1.5em);
  }

  .toggle:checked:after {
    transform: translateX(3em);
  }

  .toggle:checked ~ .curtain {
    transform: scaleX(1);
  }

  .toggle:focus {
    outline: transparent;
  }
`
