
import { Link } from 'react-router-dom'
import './createstyle.css'
import { useState } from 'react'

const Create = () => {

  const [userDetails, setUserDetails] = useState({
    bookName: "",
    bookPrice: "",
    ratings: ""
  })

  const onChangeHandler = (e) => {
    setUserDetails((prevDetails) => ({
      ...prevDetails, [e.target.name]: e.target.value
    }))

  }


  const sayHai = (e) => {
    e.preventDefault()
    console.log(userDetails);

  }

  return (
    <div className="mainBox">
      <div>
        <h1>create page</h1>
      </div><br />

      <form onSubmit={sayHai}>

        <label htmlFor="name">BookName: </label>
        <input value={userDetails.bookName} type="text" name='bookName' id="bookName" onChange={onChangeHandler} /><br /><br />

        <label htmlFor="price">BookPrice: </label>
        <input value={userDetails.bookPrice} type="number" name='bookPrice' id="bookPrice" onChange={onChangeHandler} /><br /><br />


        <label htmlFor="ratings">Ratings: </label>
        <input value={userDetails.ratings} type="text" name='ratings' id="ratings" onChange={onChangeHandler} /><br /><br />

        <button type='submit'>Save</button>
      </form>

      <div><Link to={'/Home'}><button>home</button></Link>
        <Link to={'/View'}><button>view</button></Link><br /><br /></div>

    </div>
  )
}
export default Create

