import { Routes, Route } from 'react-router-dom'
import { Home, Success } from './components'

function App() {
    return (
        <Routes>
            <Route path="" element={<Home />} />
            <Route path="/success" element={<Success />} />
        </Routes>
    )
}

export default App
