export default function Nav(){
  return(
    <>
    <nav className='flex justify-between p-7 items-center h-[10vh]'>
      <h1 className='text-2xl font-bold cursor-pointer'>TaskFlow</h1>
      <div>
        <ul className='gap-7 hidden sm:flex'>
          <li className="cursor-pointer hover:scale-110 transition-all ease-in-out">Features</li>
          <li className="cursor-pointer hover:scale-110 transition-all ease-in-out">Testemonials</li>
          <li className="cursor-pointer hover:scale-110 transition-all ease-in-out">Pricing</li>
        </ul>
      </div>
      <button className='p-1.5 shadow-xl w-[100px] text-amber-50 border-none cursor-pointer hover:scale-105 transition-all ease-in-out rounded-[10px] bg-blue-600 '>Log In</button>
    </nav>
    </>
  )
}