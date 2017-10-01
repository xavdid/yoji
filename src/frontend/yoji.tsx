import * as React from 'react'
import * as ReactDOM from 'react-dom'

import { Hello } from './components/Hello'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Hello compiler="TypeScript" framework="React" />,
    document.getElementById('example')
  )
})
