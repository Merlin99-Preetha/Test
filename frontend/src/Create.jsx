
import './Createstyle.css'
import { Link } from 'react-router-dom'

const Create = () => {
  return (
    <div>
      <div classname="mainBox"><h1>create page</h1></div><br />

      <form>
        
      <label for="name">BookName: </label>
      <input type="text" id="BookName" /><br /><br />

      <label for="price">BookPrice: </label>
      <input type="number" id="BookPrice" /><br /><br />


      <label for="ratings">Ratings: </label>
      <input type="text" id="Ratings" /><br /><br />
      </form>
      



      <Link to={'/Home'}><button>home</button></Link>
      <Link to={'/View'}><button>view</button></Link><br /><br />

    </div>
  )
}
export default Create

