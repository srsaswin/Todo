import React from 'react'

function Llist({txt,onDelete}) {
  return (
    <div className='list-element'>
      <h2>
        to do - {txt}
      </h2>
      <button onClick={onDelete}>Delete</button>
    </div>
  )
}

export default Llist