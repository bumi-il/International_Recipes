import countries from '../../../backend/src/data/countries.json';
import {
    CustomFileInput,
    CustomSelect,
    CustomTextArea,
    CustomTextInput,
    SubmitButton,
} from '../components/FormComponents';

import z from 'zod';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

const recipeSchema = z.object({
    name: z.string().nonempty(),
    description: z.string().nonempty(),
    ingredients: z.string().nonempty(),
    steps: z.string().nonempty(),
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

// const defaultNumberOfIngredients = 3;
// const defaultNumberOfSteps = 3;

// const defaultValues = {
//     name: '',
//     description: '',
//     ingredients: Array.from({ length: defaultNumberOfIngredients }, () => ''),
//     steps: Array.from({ length: defaultNumberOfSteps }, () => ''),
//     country: '',
//     mainImage: null,
// };

const RecipePost = () => {
    const navigate = useNavigate();

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
        console.log(data);
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className='recipe-form'
        >
            <CustomTextInput
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
            <CustomTextInput
                name='ingredients'
                placeholder='Ingredients'
                register={register}
                errors={errors.ingredients}
            />
            <CustomTextInput
                name='steps'
                placeholder='Steps'
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




// const RecipePost = () => {
//     const navigate = useNavigate();

//     const [numberOfIngredients, setNumberOfIngredients] = useState(
//         defaultNumberOfIngredients
//     );
//     const [numberOfSteps, setNumberOfSteps] = useState(defaultNumberOfSteps);

//     const {
//         register,
//         control,
//         setValue,
//         handleSubmit,
//         formState: { errors, isSubmitting },
//     } = useForm({
//         resolver: zodResolver(recipeSchema),
//     });

//     const { fields, append, remove } = useFieldArray({
//         control,
//         name: 'ingredients',
//     });

//     const onSubmit = async (data) => {
//         await new Promise((resolve) => setTimeout(resolve, 1000));
//         console.log(data);
//     };

//     return (
//         <form
//             onSubmit={handleSubmit(onSubmit)}
//             className='recipe-form'
//         >
//             <input
//                 {...register('name')}
//                 type='text'
//                 placeholder='Recipe name'
//             />
//             {errors.name && <div className='error'>{errors.name.message}</div>}
//             <textarea
//                 {...register('description')}
//                 type='text'
//                 placeholder='Description'
//             />
//             {errors.description && (
//                 <div className='error'>{errors.description.message}</div>
//             )}
//             <div>
//                 {[...Array(numberOfIngredients)].map((_, index) => (
//                     <div key={index}>
//                         <input
//                             {...register(`ingredients.${index}`)}
//                             type='text'
//                             placeholder={`Ingredient ${index + 1}`}
//                         />
//                         {index >= defaultNumberOfIngredients && (
//                             <button
//                                 onClick={() =>
//                                     setNumberOfIngredients(
//                                         numberOfIngredients - 1
//                                     )
//                                 }
//                             >
//                                 🗑️
//                             </button>
//                         )}
//                     </div>
//                 ))}
//                 <button
//                     onClick={() =>
//                         setNumberOfIngredients(numberOfIngredients + 1)
//                     }
//                 >
//                     Add ingredient
//                 </button>
//                 {errors.ingredients && (
//                     <div className='error'>{errors.ingredients.message}</div>
//                 )}
//             </div>
//             <div>
//                 {[...Array(numberOfSteps)].map((_, index) => (
//                     <div key={index}>
//                         <input
//                             {...register(`steps.${index}`)}
//                             type='text'
//                             placeholder={`Step ${index + 1}`}
//                         />
//                         {index >= defaultNumberOfIngredients && (
//                             <button
//                                 onClick={() =>
//                                     setNumberOfSteps(numberOfSteps - 1)
//                                 }
//                             >
//                                 🗑️
//                             </button>
//                         )}
//                     </div>
//                 ))}
//                 <button onClick={() => setNumberOfSteps(numberOfSteps + 1)}>
//                     Add step
//                 </button>
//                 {errors.steps && (
//                     <div className='error'>{errors.steps.message}</div>
//                 )}
//             </div>
//             {/* <input
//                 {...register('ingredients')}
//                 type='text'
//                 placeholder='Ingredients'
//             />
//             {errors.ingredients && (
//                 <div className='error'>{errors.ingredients.message}</div>
//             )}
//             <input
//                 {...register('steps')}
//                 type='text'
//                 placeholder='Steps'
//             />
//             {errors.steps && (
//                 <div className='error'>{errors.steps.message}</div>
//             )} */}
//             <select {...register('country')}>
//                 <option value=''>Select a country</option>
//                 {countries.map((country) => (
//                     <option
//                         key={country.id}
//                         value={country.id}
//                     >
//                         {country.name}
//                     </option>
//                 ))}
//             </select>
//             {errors.country && (
//                 <div className='error'>{errors.country.message}</div>
//             )}
//             <input
//                 onChange={(e) =>
//                     setValue('mainImage', e.target.files[0], {
//                         shouldValidate: true,
//                     })
//                 }
//                 type='file'
//                 accept='image/*'
//             />
//             {errors.mainImage && (
//                 <div className='error'>{errors.mainImage.message}</div>
//             )}
//             <button
//                 disabled={isSubmitting}
//                 type='submit'
//             >
//                 {isSubmitting ? 'Loading...' : 'Submit'}
//             </button>
//         </form>
//     );
// };
