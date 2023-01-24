// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../box-styles.css'

function Box({className, style, children}){
  return (
    <div className={`box ${className}`}  style={style}>{children}</div>
  )
}


const smallBox = (
  // <div className="box box--small"  style={{fontStyle: 'italic', backgroundColor: 'powderblue'}}>small lightblue box</div>
  <Box className="box--small" style={{fontStyle: 'italic', backgroundColor: 'powderblue'}}>small lightblue box</Box>
)

const mediumBox = (
  // <div className="box box--medium" style={{fontStyle: 'italic', backgroundColor: 'pink'}}>medium pink box</div>
  <Box className="box--medium" style={{fontStyle: 'italic', backgroundColor: 'pink'}} >medium pink box</Box>
)

const largeBox = (
  // <div className="box box--large" style={{fontStyle: 'italic', backgroundColor: 'orange'}}>large orange box</div>
  <Box className="box--large" style={{fontStyle: 'italic', backgroundColor: 'orange'}}>large orange box</Box>
)

function App() {
  return (
    <div>
      {smallBox}
      {mediumBox}
      {largeBox}
    </div>
  )
}

export default App
