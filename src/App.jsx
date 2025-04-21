import Item from "./item"
import Header from "./Header"
import Mid from "./mid"
import Text from "./leritem"
import Login  from "./login"
import { useState } from "react"
const Date=[

  {
    image:"public/item.png",
    title:"Earth's intelligence: Being pulled toward the heart of",
     note:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, veniam autem. Officiis",
     Date:"Oct,4,2023",
  },
  {
    image:"public/item.png",
    title:"Earth's intelligence: Being pulled toward the heart of",
     note:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, veniam autem. Officiis",
     Date:"Oct,4,2023",
  },
  {
    image:"public/item.png",
    title:"Earth's intelligence: Being pulled toward the heart of",
     note:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, veniam autem. Officiis",
     Date:"Oct,4,2023",
  },
  {
    image:"public/item.png",
    title:"Earth's intelligence: Being pulled toward the heart of",
     note:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, veniam autem. Officiis",
     Date:"Oct,4,2023",
  },
  {
    image:"public/item.png",
    title:"Earth's intelligence: Being pulled toward the heart of",
     note:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, veniam autem. Officiis",
     Date:"Oct,4,2023",
  },
  {
    image:"public/item.png",
    title:"Earth's intelligence: Being pulled toward the heart of",
     note:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, veniam autem. Officiis",
     Date:"Oct,4,2023",
  },
  {
    image:"public/item.png",
    title:"Earth's intelligence: Being pulled toward the heart of",
     note:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, veniam autem. Officiis",
     Date:"Oct,4,2023",
  },
  {
    image:"public/item.png",
    title:"Earth's intelligence: Being pulled toward the heart of",
     note:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, veniam autem. Officiis",
     Date:"Oct,4,2023",
  },
  
 
  
 
]
function App(){

let[Counter,setCounter]=useState(1)
function add(){
  setCounter(function(num){
    return num+1 
  })

}
function Delete(){
  if(Counter>0){
    setCounter(function(num){
      return num-1
    })
  }
 
}

  return(
      <main>
      
          <Header/>
          <hr />
           <Mid/>
        <Text/>
       <div className="grid grid-cols-4 ml-[50px] ">
      {Date.map(
        (item)=>(
          <Item
            image={item.image}
            title={item.title}
            note={item.note}
            Date={item.Date}
          />
        
        )
        
      )}
      </div>
      <Login/>
  <div className="h1">
  <h1 className="text-center text-[30px] text-green-600">{Counter}</h1>
  <div className="butt">
  <button className="button" onClick={add} type="button">+</button>
  <button className="button2" onClick={Delete} type="button">-</button>

  </div>
  
</div>
  
      </main>
  )
}
export default App