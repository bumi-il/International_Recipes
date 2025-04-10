export const CustomTextInput = ({ name, placeholder, register, errors }) => {
    return (
        <>
            <input
                type='text'
                placeholder={placeholder}
                {...register(name)}
            />
            {errors && <p className='error'>{errors.message}</p>}
        </>
    );
};

export const CustomTextArea = ({ name, placeholder, register, errors }) => {
    return (
        <>
            <textarea
                placeholder={placeholder}
                {...register(name)}
            />
            {errors && <p className='error'>{errors.message}</p>}
        </>
    );
};

export const CustomSelect = ({
    name,
    placeholder,
    register,
    errors,
    options,
}) => {
    return (
        <>
            <select {...register(name)}>
                <option value=''>{placeholder}</option>
                {options.map((option) => (
                    <option
                        key={option.value}
                        value={option.value}
                    >
                        {option.label}
                    </option>
                ))}
            </select>
            {errors && <p className='error'>{errors.message}</p>}
        </>
    );
};

export const CustomFileInput = ({ name, errors, setValue }) => {
    return (
        <div>
            <input
                onChange={(e) =>
                    setValue(name, e.target.files[0], {
                        shouldValidate: true,
                    })
                }
                type='file'
                accept='image/*'
            />
            {errors && <p className='error'>{errors.message}</p>}
        </div>
    );
};

export const SubmitButton = ({ isSubmitting }) => {
    return (
        <button type='submit'>{isSubmitting ? 'Loading...' : 'Submit'}</button>
    );
};
