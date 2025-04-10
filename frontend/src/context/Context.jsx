import { createContext, useContext, useEffect, useRef, useState } from 'react';
import { getAllRecipes } from '../utils/apiCall';
import { use } from 'react';

const GlobeContext = createContext();

export const useGlobeContext = () => useContext(GlobeContext);

const ContextProvider = ({ children }) => {
    const globeRef = useRef(null);

    const [recipes, setRecipes] = useState([]);
    const [recipe, setRecipe] = useState(null);

    useEffect(() => {
        getAllRecipes().then((recipes) => recipes.success && setRecipes(recipes.message));
    }, []);    

    const value = {
        globeRef,
        recipe,
        setRecipe,
        recipes,
    };
    return (
        <GlobeContext.Provider value={value}>{children}</GlobeContext.Provider>
    );
};

export default ContextProvider;
