// взяти https://dummyjson.com/docs/recipes та вивести інформацію про всі рецепти. Інгредієнти повинні бути список під час відображення.

let recipesBlock = document.querySelector('.recipes-block')
fetch('https://dummyjson.com/recipes')
    .then(res => res.json())
    .then((value) => {
        let recipesArray = value.recipes;

        for (const recipe of recipesArray) {
            let recipeBlock = document.createElement('div')
            recipeBlock.classList.add('recipe-block')
            recipesBlock.appendChild(recipeBlock);

            recipeBlock.innerHTML = `
                <h2>${recipe.name}</h2>
                <p>Calories: ${recipe.caloriesPerServing}</p>
                <p>Time for cooking: ${recipe.cookTimeMinutes} minutes</p>
                <p>Cuisine: ${recipe.cuisine}</p>
                <p>Difficulty: ${recipe.difficulty}</p>
                <h3>Ingredients</h3>
            `

            let recipeList = document.createElement('ul');
            recipeBlock.appendChild(recipeList);

            for (const ingredient of recipe.ingredients) {
                let ingredientItem = document.createElement('li')
                ingredientItem.innerText = ingredient;
                recipeList.appendChild(ingredientItem)
            }

            let instruction = document.createElement('h3');
            instruction.innerText = 'Instruction for cooking:'
            recipeBlock.appendChild(instruction);

            let instructionList = document.createElement('ol');
            recipeBlock.appendChild(instructionList);

            for (const instruction of recipe.instructions) {
                let instructionItem = document.createElement('li')
                instructionItem.innerText = instruction;
                instructionList.appendChild(instructionItem)
            }

            let recipeImage = document.createElement('img');
            recipeImage.setAttribute('src', recipe.image)
            recipeBlock.appendChild(recipeImage);
        }
    });