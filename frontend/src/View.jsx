import React from 'react'
import { Link } from 'react-router-dom'

const View = () => {
  return (
    <div>
      <div>View page</div>
     <Link to={'/Create'}><button>create</button></Link>
      <Link to={'/Home'}><button>home</button></Link>
    </div>
  )
}

export default View