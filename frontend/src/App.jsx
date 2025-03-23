import './App.css';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RecipePage from './pages/RecipePage';
import ContextProvider from './context/Context';

function App() {
    return (
        <ContextProvider>
            <BrowserRouter>
                <Routes>
                    <Route
                        path='/'
                        element={<Home />}
                    />
                    <Route
                        path='/:recipe'
                        element={<RecipePage />}
                    />
                </Routes>
            </BrowserRouter>
        </ContextProvider>
    );
}

export default App;
