let stars = ["⭐", "⭐ ⭐", "⭐ ⭐ ⭐", "⭐ ⭐ ⭐ ⭐", "⭐ ⭐ ⭐ ⭐ ⭐"];

function RateARecipe(props) {
  function GiveRating(props) {
    return <h3>{stars[props.rating -1]}</h3>;
  };
  let starCheck = (props.rating > 0) && (props.rating < 6);
  return starCheck ? GiveRating(props) : null
}

export default RateARecipe;

//conditional to render stars based on a number provided in App.js 
