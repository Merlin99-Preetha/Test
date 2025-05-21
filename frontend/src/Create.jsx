import React from 'react'
import { Link } from 'react-router-dom'

const Create = () => {
  return (
    <div>
      <div>create page</div>
      <Link to={'/Home'}><button>home</button></Link>
      <Link to={'/View'}><button>view</button></Link>
      <input type="text" id="BookName"/>
      <input type="number" id="BookPrice"/>
      <input type="text" id="Ratings"/>
    </div>
  )
}
export default Create

