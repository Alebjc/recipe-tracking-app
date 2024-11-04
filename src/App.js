import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData";

function App() {
    const [recipes, setRecipes] = useState(RecipeData);

    // Add new recipe
    const addRecipe = (newRecipe) => {
        setRecipes([...recipes, { ...newRecipe, id: Date.now() }]);
    };

    // Delete existing recipe
    const deleteRecipe = (id) => {
        setRecipes(recipes.filter((recipe) => recipe.id !== id));
    };

    return (
        <div className="App">
            <header><h1>Delicious Food Recipes</h1></header>
            <RecipeList recipes={recipes} onDelete={deleteRecipe} />
            <RecipeCreate addRecipe={addRecipe} />
        </div>
    );
}

export default App;
