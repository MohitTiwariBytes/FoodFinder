document.getElementById('search').addEventListener('click', () => {
    const query = document.getElementById('query').value;
    fetchRecipes(query);
});

async function fetchRecipes(query) {
    const appId = '0a3f6f3c';
    const appKey = '27d6f82b6d9891e26a1ee9f662b0c540';
    const url = `https://api.edamam.com/search?q=${query}&app_id=${appId}&app_key=${appKey}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        displayRecipes(data.hits);
    } catch (error) {
        console.error('Error fetching recipes:', error);
    }
}

function displayRecipes(recipes) {
    const recipesContainer = document.getElementById('recipes');
    recipesContainer.innerHTML = '';

    recipes.forEach(recipeObj => {
        const recipe = recipeObj.recipe;
        const recipeElement = document.createElement('div');
        recipeElement.className = 'recipe';
        recipeElement.innerHTML = `
            <img src="${recipe.image}" alt="${recipe.label}">
            <h3>${recipe.label}</h3>
            <p><a href="${recipe.url}" target="_blank">View Recipe</a></p>
        `;
        recipesContainer.appendChild(recipeElement);
    });
}
