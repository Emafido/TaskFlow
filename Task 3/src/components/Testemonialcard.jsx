export default function Testemonialcard({ name, title, quote }) {
  return (
    <>
        <div className="border-blue-500/10 border-[1px] p-6 mx-[1.5rem] rounded-[5px] shadow-xl shadow-blue-500/10 sm:h-[170px] lg:h-[200px]  hover:bg-blue-700 hover:text-white transition-all delay-150 ease-in-out">
          <div className="font-bold text-2xl">{name}</div>
          <div className="text-[.9rem] mb-2 font-light ">{title}</div>
          <div>
           {quote}
          </div>
        </div>
    
    </>
  );
}
