import React from 'react'

export const User = () => {

  const deleteUser = () => {
    alert('Delete')
  }

  const saveUser = () => {
    alert('Save')
  }

  return <div>
    DimOk
    <button onClick={deleteUser}>Delete</button>
    <button onClick={saveUser}>Save</button>
  </div>
}
