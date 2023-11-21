import "./styling.css";
import ClickedButton from  "./ClickedButton.jsx";
import SaveButton from "./SaveButton.jsx";

const saveButton = props.saveButton;

function Button() {
  trueCheck = saveButton() === true;
   return trueCheck ? saveButton() : ClickedButton();
 }
 
 export default Button;
 
 //need to import SaveButton and ClickedButton
 //create conditional for these buttons
 //import styling
 