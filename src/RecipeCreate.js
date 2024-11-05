import React, { useState } from "react";

function RecipeCreate({ addRecipe }) {
  const [form, setForm] = useState({
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  });

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addRecipe(form);
    setForm({ name: "", cuisine: "", photo: "", ingredients: "", preparation: "" });
  };

  return (
      <form name="create" onSubmit={handleSubmit}>
        <table>
          <tbody>
          <tr>
            <td><input name="name" placeholder="Name" value={form.name} onChange={handleChange} required /></td>
            <td><input name="cuisine" placeholder="Cuisine" value={form.cuisine} onChange={handleChange} required /></td>
            <td><input name="photo" placeholder="Photo URL" value={form.photo} onChange={handleChange} required /></td>
            <td><textarea name="ingredients" placeholder="Ingredients" value={form.ingredients} onChange={handleChange} required /></td>
            <td><textarea name="preparation" placeholder="Preparation" value={form.preparation} onChange={handleChange} required /></td>
            <td><button type="submit">Create</button></td>
          </tr>
          </tbody>
        </table>
      </form>
  );
}

export default RecipeCreate;
