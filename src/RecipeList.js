import React, { useState } from "react";

function RecipeRow({ recipe, onDelete }) {
    return (
        <tr>
            <td>{recipe.name}</td>
            <td>{recipe.cuisine}</td>
            <td>
                <img src={recipe.photo} alt={recipe.name}  style={{ width: '100px', height: 'auto' }}/>
            </td>
            <td>{recipe.ingredients}</td>
            <td>{recipe.preparation}</td>
            <td>
                <button name="delete" onClick={() => onDelete(recipe.id)}>Delete</button>
            </td>
        </tr>
    );
}

function RecipeList({ recipes, onDelete }) {
    return (
        <div className="recipe-list">
            <table>
                <thead>
                <tr>
                    <th>Recipe</th>
                    <th>Cuisine</th>
                    <th>Photo</th>
                    <th>Ingredients</th>
                    <th>Preparation</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {recipes.map((recipe) => (
                    <RecipeRow key={recipe.id} recipe={recipe} onDelete={onDelete} />
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default RecipeList;

