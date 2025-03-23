import React, { useEffect } from 'react';
import { useGlobeContext } from '../context/Context';
import { useNavigate } from 'react-router-dom';

const RecipePage = () => {
    const { recipe } = useGlobeContext();

    const { name, description, image } = recipe;
    const { ingredients, steps } = recipe.recipe;

    return (
        recipe && (
            <div className='recipe-page'>
                <h1>{name}</h1>
                <h2>{description}</h2>
                <img
                    src={image}
                    width={200}
                />
                <ol>
                    {ingredients.map((item, i) => (
                        <li key={i}>{item}</li>
                    ))}
                </ol>
                <ol>
                    {steps.map((item, i) => (
                        <li key={i}>{item}</li>
                    ))}
                </ol>
            </div>
        )
    );
};

export default RecipePage;
