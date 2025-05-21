import React from 'react'
import { Link } from 'react-router-dom'


const Home = () => {
  return (
    <div>
      <div>Home page</div>

      <Link to={'/Create'}><button>home</button> </Link>
      <Link to={'/View'}><button>view</button></Link>
      

    </div>
    
  )
}

export default Home