import React from "react"

const PersonForm = ({ addPersonWithoutDuplicates, newName, handleNameChange, newNumber, handleNumberChange }) => {
    return (
      <form onSubmit={addPersonWithoutDuplicates}>
        <div>
          name:
          <input
            placeholder="name"
            value={newName}
            onChange={handleNameChange}
          />
        </div>
        <div>
          number:
          <input
            placeholder="number"
            value={newNumber}
            onChange={handleNumberChange}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    )
  }

  export default PersonForm