import styles from './Description.module.css';
import React from 'react';

function RecipeAuthor() {
    const authorLink = "https://www.foodiecrush.com/about/";
    const authorPhoto = "https://secure.gravatar.com/avatar/4448090c850e31f6a7b6a27d057838a0?s=64&d=mm&r=g";
    const authorName = "Heidi Larson";

    return (
        <div className = {styles.recipeAuthorBlock}>
            <img src = {authorPhoto} alt = "Chef Heidi" className = {styles.imagesUpdates} />
            <div>
                <h3>{authorName}</h3>
                <a href={authorLink}>Foodie Crush</a>
            </div>
        </div>
    );
};

class RecipeDescription extends React.Component{
    render() {
        return(
        <div>
            <div>
                <h1>Mom's Spaghetti</h1>
                <p>There's vomit on his sweater already.</p>
            </div>
            <RecipeAuthor />
        </div>
        );
    };
};

export default RecipeDescription;