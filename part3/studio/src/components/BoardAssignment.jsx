import { useState } from 'react';

export default function BoardAssignment () {
   const boards = [
      {label: "Meat", value: "Beef"},
      {label: "Type", value: "Stew"},
      {label: "Tastes", value: "Yummy"},
   ];

   const [boardName, setBoardName] = useState('no boards yet!');

   const handleChange = (event) => {
      const selectedBoard = event.target.value;
      setBoardName(selectedBoard);
    };

   return (
      <div style={{paddingTop: "50px"}}>
      <label>Save to Board: </label>
      <select value={boardName} onChange={handleChange}>
         {boards.map((board) => (
         <option key={board.value} value={board.value}>{board.label}</option>
         ))}
      </select>

      {/* <label>Save to Board: </label>
      <select value={boardName} onChange={handleChange}>
        {boards.map((board) => (
          <option key={board.value} value={board.value}>
            {board.label}
          </option>
        ))}
      </select> */}


      <p>Saved to {boardName}!</p>
      </div>
   );
}