function Item(props){
    console.log(props)
    
return(
    <div className="mb-[50px] bg-gray-400 w-[300px] rounded-[15px] transition-all hover:shadow-green-500/50 hover:scale-[1.1] hover:bg-green-600 hover:border-1 hover:border-green-800 ">
      <img className="w-[300px]  rounded-[15px]" src={props.image} alt="" />
      <div className="m-[10px]">
      <h1 className="font-bold">{props.title}</h1>
       <p>{props.note}</p>
       <h3 className="font-bold">{props.Date}</h3>
       
    </div>
    </div>

)
}
export default Item