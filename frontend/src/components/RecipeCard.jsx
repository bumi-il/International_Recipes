import React from 'react';
import { useGlobeContext } from '../context/Context';
import { NavLink } from 'react-router-dom';

const RecipeCard = () => {
    const { recipe, setRecipe } = useGlobeContext();

    const { name, image, id } = recipe;

    return (
        <div className='card-page'>
            <div
                onClick={() => setRecipe(null)}
                className='close'
            >
                x
            </div>
            <h1>{name}</h1>
            <img
                src={image}
                className='card-image'
            />
            <NavLink to={'/' + id} className={'btn'}>Prepare</NavLink>
        </div>
    );
};

export default RecipeCard;
