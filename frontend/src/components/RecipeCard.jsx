import React from 'react';
import { useGlobeContext } from '../context/Context';
import { NavLink } from 'react-router-dom';

const RecipeCard = () => {
    const { globeRef, recipe, setRecipe } = useGlobeContext();

    const { lng, name, description, image, id } = recipe;

    return (
        <div className='info'>
            <div
                onClick={() => {
                    globeRef.current.pointOfView(
                        {
                            lng: lng,
                        },
                        1000
                    );
                    setRecipe(null);
                }}
                className='close'
            >
                x
            </div>
            <h1>{name}</h1>
            <p>{description}</p>
            <img
                src={image}
                width={200}
            />
            <NavLink to={'/' + id}>Prepare</NavLink>
        </div>
    );
};

export default RecipeCard;
