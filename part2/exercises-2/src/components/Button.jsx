import './styles.css';

function Button() {
   function onLearnMore() {
      alert("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA, SPLASH!");
   };

   return ( 
         <button onClick={onLearnMore}>
            Learn More
         </button>
   );
}

export default Button;