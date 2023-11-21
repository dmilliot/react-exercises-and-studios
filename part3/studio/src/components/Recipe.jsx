import { useState } from 'react';

const RecipeAuthor = () => {
   let authorLink = "https://www.onceuponachef.com/about/";
   let authorPhoto = "https://i0.wp.com/www.onceuponachef.com/images/2019/08/jenn-kitchen-3.jpg?resize=1200%2C814&ssl=1";
   let authorName = "Jenn Segal";

   return (
      <div>
         <img src={authorPhoto} alt = "" style={{objectFit: "contain", borderRadius: "50%"}} />
         <div>
            <h3>{authorName}</h3>
            <a href={authorLink}></a> 
         </div>
      </div>
   );
}

const RecipeIngredients = () => {
   const ingredients = ["Chuck Roast", "Carrots", "Potatoes", "Onions", "Red Winde"];
   return(
      <div>
         <h3>Recipe Ingredients</h3>
         <ul>
            <li>{ingredients[0]}</li>
            <li>{ingredients[1]}</li>
            <li>{ingredients[2]}</li>
            <li>{ingredients[3]}</li>
            <li>{ingredients[4]}</li>
         </ul>
      </div>
   );
}

const RecipeDescription = () => {
   return (
      <div> 
         <div>
            <h1>Beef Stew with Carrots and Potatoes</h1>
            <p>This classic French beef stew is the ultimate cold weather comfort food. After a few hours in the oven, the meat becomes meltingly tender and enveloped in a rich wine sauce.</p>
         </div>
         <div className="recipePhotoBlock">
            <RecipeIngredients />
            <RecipeAuthor />
         </div>
      </div>
   );
}

const RecipePhoto = () => {
   return (
      <img src="https://i0.wp.com/www.onceuponachef.com/images/2011/02/beef-stew-with-carrots-potatoes.jpg?resize=1120%2C779&ssl=1" alt="Beefy Beef Stew" className="imageUpdates"/>
   );
}

export default function RecipeDisplay () {
   return(
      <div className="recipePhotoBlock">
         <RecipePhoto />
         <div>
            <RecipeDescription />
         </div>
      </div>
   );
}
