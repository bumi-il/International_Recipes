const apiCall = async (url, method = 'GET', body) => {
    try {
        const options = {};
        options.method = method;
        if (body) options.body = JSON.stringify(body);
        
        const response = await fetch('http://localhost:5000' + url, options);
        return await response.json();
    } catch (error) {
        return console.error(error);
    }
};

export const getAllRecipes = () => apiCall('/recipes');
export const getRecipeById = (id) => apiCall(`/recipes/${id}`);
export const createRecipe = (recipe) => apiCall('/recipes', 'POST', recipe);
export const updateRecipe = (id, recipe) =>
    apiCall(`/recipes/${id}`, 'PUT', recipe);
export const deleteRecipe = (id) => apiCall(`/recipes/${id}`, 'DELETE');
