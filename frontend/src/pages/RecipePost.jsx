import countries from '../../../backend/src/data/countries.json';
import {
    CustomArrayTextArea,
    CustomArrayTextInput,
    CustomFileInput,
    CustomSelect,
    CustomTextArea,
    SubmitButton,
} from '../components/FormComponents';

import z from 'zod';
import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

const recipeSchema = z.object({
    name: z.string().nonempty(),
    description: z.string().nonempty(),
    ingredients: z.array(z.string().nonempty()),
    steps: z.array(z.string().nonempty()),
    country: z.string().nonempty({ message: 'Please select a country' }),
    mainImage: z
        .instanceof(File)
        .refine((file) => file.size > 0, {
            message: 'Please select an image',
        })
        .refine((file) => file.type.startsWith('image/'), {
            message: 'Please select an image',
        }),
});

const defaultNumberOfIngredients = 3;
const defaultNumberOfSteps = 3;

const RecipePost = () => {
    const [numberOfIngredients, setNumberOfIngredients] = useState(
        defaultNumberOfIngredients
    );
    const [numberOfSteps, setNumberOfSteps] = useState(defaultNumberOfSteps);

    const {
        register,
        setValue,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm({
        resolver: zodResolver(recipeSchema),
    });

    const onSubmit = async (data) => {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        const testData = {
            ...data,
            id: data.name.toLowerCase().replace(/ /g, '-'),
            name: data.name.charAt(0).toUpperCase() + data.name.slice(1),
            mainImage: 'TODO', //TODO: image URL with cloudinary
            country: countries.find((country) => country.id === data.country),
        };
        console.log(testData);
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className='recipe-form'
        >
            <CustomTextArea
                name='name'
                placeholder='Recipe name'
                register={register}
                errors={errors.name}
            />
            <CustomTextArea
                name='description'
                placeholder='Description'
                register={register}
                errors={errors.description}
            />
            <CustomArrayTextInput
                size={numberOfIngredients}
                setSize={setNumberOfIngredients}
                name='ingredients'
                placeholder='Ingredient'
                register={register}
                errors={errors.ingredients}
            />
            <CustomArrayTextArea
                size={numberOfSteps}
                setSize={setNumberOfSteps}
                name='steps'
                placeholder='Step'
                register={register}
                errors={errors.steps}
            />
            <CustomSelect
                name='country'
                placeholder='Select a country'
                register={register}
                errors={errors.country}
                options={countries.map((country) => ({
                    value: country.id,
                    label: country.name,
                }))}
            />
            <CustomFileInput
                name='mainImage'
                errors={errors.mainImage}
                setValue={setValue}
            />
            <SubmitButton isSubmitting={isSubmitting} />
        </form>
    );
};

export default RecipePost;
