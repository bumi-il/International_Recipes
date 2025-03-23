import { createContext, useContext, useRef, useState } from 'react';

const GlobeContext = createContext();

export const useGlobeContext = () => useContext(GlobeContext);

const ContextProvider = ({ children }) => {
    const globeRef = useRef(null);

    const [recipe, setRecipe] = useState(null);

    const value = {
        globeRef,
        recipe,
        setRecipe,
    };
    return (
        <GlobeContext.Provider value={value}>{children}</GlobeContext.Provider>
    );
};

export default ContextProvider;
