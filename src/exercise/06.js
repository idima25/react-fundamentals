// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  const usernameInputRef = React.useRef()
  const [error, setError] = React.useState(null)

  function handleSubmit(event){
    event.preventDefault()
    
    const inputValue = usernameInputRef.current.value
    console.dir(usernameInputRef)
    onSubmitUsername(inputValue)
  }

  function handleChange(event){
    
    const value = event.target.value
    console.log(value)
    if(value === value.toLowerCase()){
      setError(null)
    } else {
      setError("Value must be lowercase")
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor='myUsername'>Username:</label>
        <input ref={usernameInputRef} id='myUsername' name='username' type="text" onChange={handleChange} />
        <div style={{color:'red'}}>{error}</div>
      </div>
      <button disabled={Boolean(error)} type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
