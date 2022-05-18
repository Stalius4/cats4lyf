import "./App.css"
import App from "./App"
import { faker } from 'https://cdn.skypack.dev/@faker-js/faker';


const Cats = (props) =>{

  const randomName = faker.animal.type(); // Willie Bahringer

  return (
    <div>
    {props.id.map((cat, index) => {
      return (
      <div key= {index} className="cat-container">
          <img src = {cat.url} alt="cat" width={"15%"}/>
          <div className="title">sdasdaas.</div>
      </div>
      
      )
      
    })}
</div>
  )
}


export default Cats