import React from 'react';
import MyGlobe from '../components/Globe';
import { useGlobeContext } from '../context/Context';
import RecipeCard from '../components/RecipeCard';

const Home = () => {
    const { recipe } = useGlobeContext();

    return recipe ? <RecipeCard /> : <MyGlobe />;
};

export default Home;
