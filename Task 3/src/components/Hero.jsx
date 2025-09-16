export default function Hero() {
  return (
    <>
      <div className="flex p-1 overflow-hidden flex-col sm:flex-row sm:items-center justify-between max-h-[90vh]">
        <div>
          <h1 className=" mt-5.5 text-3xl font-bold sm:text-left sm:ml-[4rem] text-center lg:text-5xl lg:mt-[2rem] lg:mb-6">Streamline Your <br /> Workflow</h1>
          <p className="text-[.9rem] lg:text-3xl lg:mb-5 m-2 text-center sm:text-left sm:ml-[4rem] ">Organise your tasks, collaborate with your team, and boost your productivity with TaskFlow.</p>
          <button className="hidden sm:block sm:border-2 p-2.5 sm:ml-[4rem] rounded-[10px] border-none text-amber-50 cursor-pointer hover:scale-105 transition-all ease-in-out shadow-xl text-[0.9rem] bg-blue-700 lg:text-[1.1rem] ">Get Started for Free</button>
        </div>
        <div>
          <video className="w-[600px] h-[300px]  sm:h-[390px] sm:w-[400px] sm:relative lg:w-[900px] lg:h-[490px]" muted loop autoPlay playsInline>
            <source src="/task.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </>
  );
}
