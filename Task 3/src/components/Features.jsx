export default function Features(){
  return(
    <>
    <h1 className="text-center text-3xl sm:text-4xl m-1 font-bold lg:text-5xl mt-9">Features to Supercharge Your Workflow</h1>
    <p className="text-[.9rem]  lg:text-[1.2rem] font-light  text-center m-1">TaskFlow is packed with powerful features to help you and your team achieve peak productivity.</p>
    <div className="sm:mx-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4.5 ">
      <div className="my-[1rem]  border-[1px] p-3.5 mx-[1.5rem] rounded-[10px] border-amber-50 shadow-xl  ">
        <img className=" mb-1.5 w-[20%]" src="/database.svg"/>
        <p className="font-bold text-[1.1rem] leading-5.5 mb-3">Intuitive Task Management</p>
        <p className="text-[.9rem] lg:text-[1rem] lg:mb-2">Organise your tasks effortlessly. Set priorities, due dates, and track progress with a clear aand intuitive interface. Stay on top of your to-do list and never miss a deadline again.</p>
      </div>
      <div className="my-[1rem]  p-3 mx-[1.5rem] rounded-[10px] border-amber-50 shadow-xl ">
        <img className=" mb-1.5 w-[20%]" src="/clock.svg"/>
        <p className="font-bold text-[1.1rem] leading-5.5 mb-3">Smart Time Tracking</p>
        <p className="text-[.9rem] lg:text-[1rem] lg:mb-2">Monitor time spent on tasks, identify productivity patterns, and optimize your workflow. Get detailed reports to understand where your time goes and improve your efficiency.</p>
      </div>
      <div className="  my-[1rem] p-3 mx-[1.5rem] rounded-[10px] border-amber-50 shadow-xl ">
        <img className=" mb-1.5 w-[20%]" src="/users.svg"/>
        <p className="font-bold text-[1.1rem] leading-5.5 mb-3">Seamless Collaboration</p>
        <p className="text-[.9rem] lg:text-[1rem] lg:mb-2">Work together with your team in real-time. Share tasks,files, and comments to keep everyone in sync.Boost team productivity and achieve your collective goals faster.</p>
      </div>
    </div>
    </>
  )
}