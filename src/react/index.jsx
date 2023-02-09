import { createRoot } from 'react-dom/client'
import CounterButton from './components/CounterButton'

const root = createRoot(document.querySelector("#root"));

root.render(<>
    Hello React
    <br />
    <CounterButton />
</>)