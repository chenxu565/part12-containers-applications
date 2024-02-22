import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import userEvent from '@testing-library/user-event'
import PersonForm from './PersonForm'

test('<PersonForm /> updates parent state and calls onSubmit', async() => {
    const user = userEvent.setup()
    const addPersonWithoutDuplicates = jest.fn()
    const newName = 'newName'
    const handleNameChange = jest.fn()
    const newNumber = 'newNumber'

    render(
        <PersonForm 
            addPersonWithoutDuplicates={addPersonWithoutDuplicates}
            newName={newName}
            handleNameChange={handleNameChange}
            newNumber={newNumber}
            handleNumberChange={jest.fn()}
        />
    )
    
    const inputName = screen.getByPlaceholderText('name')
    await user.type(inputName, 'John Doe')

    const inputNumber = screen.getByPlaceholderText('number')
    await user.type(inputNumber, '1234567890')

    const sendButton = screen.getByText('add')
    await user.click(sendButton)

    expect(addPersonWithoutDuplicates.mock.calls).toHaveLength(1)
})
