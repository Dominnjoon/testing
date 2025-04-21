function Login(){
     return(
         
        <div  className="">
             <h1 className="font-bold text-[40px] text-center">Conect With</h1>
            <form action="" className="ml-[400px]">
                <label  className="font-bold text-[20px]"   >Email</label><br />
                <input className="border-2 border-solid rounded-[20px] border-green-600 w-[700px] h-[40px]  " type="Email"  required  placeholder="Enter your Email....." /><br />
                <label className="font-bold text-[20px]"  >Subject</label> <br />
                <input className="border-2 border-solid rounded-[20px] border-green-600 w-[700px] h-[40px]  "  type="text"  required placeholder="Enter your Sunject...." /><br />
                <label  className="font-bold text-[20px]" >message</label><br />
                <input className="border-2 border-solid rounded-[20px] border-green-600 w-[700px] h-[40px]  " type="text"  required placeholder="Enter your message......" /> <br />
             
                
       <div className="flex  justify-center gap-[150px] ml-[-200px]"> 
        <button type="button">Clear </button>
        <button type="submit">Submit </button>
       </div>
      
            </form>
        </div>
     )
}
export default Login