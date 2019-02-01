import ingredients from '../data/ingredients.json';

function getIngredients() {
    // mocked data
    // model request is supposed to be here
    return ingredients;
}

function getIngredientById(id) {
    // mocked data
    // model request is supposed to be here
    return ingredients.find(({ id: ingredientId }) => (
        ingredientId === id
    ));
}

export default {
    getIngredients,
    getIngredientById
};