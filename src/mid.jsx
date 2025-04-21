function Mid(){
    return(
        <div className="flex  justify-center mt-[100px]">
            <div className="w-[500px] ">
                <h1 className="font-bold text-[40px] ">Welcome To Our Blog</h1>
                <div className="mt-[50px]">
             
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, nesciunt necessitatibus mollitia possimus corporis inventore!</p>
                </div>
                <div className="mt-[100px]">
              
              <input className="border-2 border-green-400 rounded-[20px] bg-green-100 p-1 " type="search" value="" placeholder="Quict Search..." />
          
              <button className="bg-green-400   ml-[30px] p-2 rounded-[15px] w-[100px]">  Search</button>
                    
              </div>
            </div>
            <div>
                <img className="w-[500px]" src="public/garden.png" alt="" />
            </div>
        </div>
    )
}
export default Mid
