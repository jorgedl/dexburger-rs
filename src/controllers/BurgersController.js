import burgers from '../data/burgers.json';
import ingredients from '../data/ingredients';

function getIngredientPriceById(ingredients, id) {
    return ingredients.find(({ id: ingredientId }) => (
        ingredientId === id
    )).price;
}

function getBurgers() {
    // mocked data
    // model request is supposed to be here
    return burgers
}

export default {
    getBurgers
};