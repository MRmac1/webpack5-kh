import a from './utils/a'
import b from './utils/b'

import { random } from 'lodash'

const ButtonElement = document.createElement('button')

ButtonElement.innerText = 'Say Hello Webpack5';

ButtonElement.addEventListener('click', () => {
    console.log('Hello Webpack5 ' + random(0, 1, true).toString());
})

document.querySelector('#root').appendChild(ButtonElement)

console.log('hello webpack', a, b)