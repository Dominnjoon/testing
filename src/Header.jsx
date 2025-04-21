function Header(){
    return(
        <div className="flex justify-around items-center">
     <div><img  className="w-[150px]" src="./public/garden2.png" alt="" /></div>
            <div className="flex justify-center gap-[40px]"> 
              <a  className="transition-all hover:scale-[1.1] hover:bg-green-400 text-black rounded-[10px] p-2" href="">Home </a> 
              <a className="transition-all hover:scale-[1.1] hover:bg-green-400 text-black rounded-[10px] p-2" href="">Blog </a> 
              <a className="transition-all hover:scale-[1.1] hover:bg-green-400 text-black rounded-[10px] p-2" href="">Content </a> 
              <a className="transition-all hover:scale-[1.1] hover:bg-green-400 text-black rounded-[10px] p-2" href="">About </a> 
            
            </div>
            <div  ><button  className="bg-green-300 w-[100px] rounded-[40px] text-white-800 transition-all hover:scale-[1.1] hover:bg-green-400 text-black rounded-[10px] p-2" >Login</button></div>
      
      
        </div>
    
 
        
         
    )
}
export default Header