import React, { useEffect } from 'react';
import { useGlobeContext } from '../context/Context';
import { useNavigate } from 'react-router-dom';

const RecipePage = () => {
    const { recipe } = useGlobeContext();

    const { name, mainImage, description, country } = recipe;
    const { ingredients, steps } = recipe.recipe;

    return (
        recipe && (
            <div className='recipe-page'>
                <h1>{name}</h1>
                <h2>{description}</h2>
                <img
                    src={mainImage}
                    width={200}
                />
                <h3>{country.name}</h3>
                <img src={country.flag} width={50} />
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
