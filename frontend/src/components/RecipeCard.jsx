import React from 'react';
import { useGlobeContext } from '../context/Context';
import { NavLink } from 'react-router-dom';

const RecipeCard = () => {
    const { recipe, setRecipe } = useGlobeContext();

    const { id, name, mainImage, description, country } = recipe;

    return (
        <div className='card-page'>
            <div
                onClick={() => setRecipe(null)}
                className='close'
            >
                x
            </div>
            <div className='country'>
                <img
                    src={country.flag}
                    width={100}
                />
                <h3>{country.name}</h3>
            </div>
            <h1>{name}</h1>
            <h2 className='description'>{description}</h2>
            <img
                src={mainImage}
                className='card-image'
            />
            <NavLink
                to={'/' + id}
                className={'btn'}
            >
                Prepare
            </NavLink>
        </div>
    );
};

export default RecipeCard;
