import React, { useState } from 'react'

function App() {
  const [toggle, setToggle] = useState(false)

  return (
    <div className="bg-gray-200 flex items-center justify-center h-screen">
      <button
        className="p-3 rounded-sm bg-blue-500 hover:bg-blue-700"
        onClick={() => setToggle(!toggle)}
      >
        Toggle
      </button>
    </div>
  )
}

export default App
