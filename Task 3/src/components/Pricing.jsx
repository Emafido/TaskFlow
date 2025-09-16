export default function Pricing(){
  return(
    <>
      <h1 className="mt-9 text-3xl sm:text-4xl lg:text-5xl font-extrabold m-2 text-center">Choose the plan that's right for you</h1>
      <p className="text-[.9rem] lg:text-[1.2rem] font-light text-center mb-6 ">Simple, transparent pricing. No hidden fees.</p>
      <div className="sm:mx-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4.5">
        <div className="my-[1rem] p-6 mx-[1.5rem] rounded-[10px] border-amber-50 w-[300px] shadow-xl">
          <p className="font-bold text-3xl " >Free</p>
          <p className="font-bold text-2xl">$0/<span className="font-light">month</span></p>
          <p className="font-light">For individuals and small teams just getting started.</p>
          <button className="w-full p-1.5 my-3.5 bg-blue-700 rounded-[6px] font-[600] text-white hover:scale-105 cursor-pointer transition-all ease-in-out delay-150">Get Started</button>
          <ul>
            <li className="font-light flex items-center gap-2"><img src="/check.svg" className="w-[15px]"/>Up to 5 users </li>
            <li className="font-light flex items-center gap-2"><img src="/check.svg" className="w-[15px]"/>Basic task management</li>
            <li className="font-light flex items-center gap-2"><img src="/check.svg" className="w-[15px]"/>Limited integrations</li>
          </ul>
        </div>
        <div className="my-[1rem] p-6 mx-[1.5rem] rounded-[10px] border-amber-50 w-[300px] shadow-xl">
          <p className="font-bold text-3xl " >Pro</p>
          <p className="font-bold text-2xl">$10/<span className="font-light">user/month</span></p>
          <p className="font-light">For growing teams that need more power and support.</p>
          <button className="w-full p-1.5 my-3.5 bg-blue-700 rounded-[6px] font-[600] text-white hover:scale-105 cursor-pointer transition-all ease-in-out delay-150">Choose Pro</button>
          <ul>
            <li className="font-light flex items-center gap-2"><img src="/check.svg" className="w-[15px]"/>Unlimited Users </li>
            <li className="font-light flex items-center gap-2"><img src="/check.svg" className="w-[15px]"/>Advanced task management</li>
            <li className="font-light flex items-center gap-2"><img src="/check.svg" className="w-[15px]"/>All integrations</li>
            <li className="font-light flex items-center gap-2"><img src="/check.svg" className="w-[15px]"/>Priority support</li>
          </ul>
        </div>
        <div className="my-[1rem] p-6 mx-[1.5rem] rounded-[10px] border-amber-50 w-[300px] shadow-xl sm:justify-self-center sm:col-span-2 lg:col-span-1">
          <p className="font-bold text-3xl " >Team</p>
          <p className="font-bold text-2xl">$20/<span className="font-light">user/month</span></p>
          <p className="font-light">For large organisations with advanced needs.</p>
          <button className="w-full p-1.5 my-3.5 bg-blue-700 rounded-[6px] font-[600] text-white hover:scale-105 cursor-pointer transition-all ease-in-out delay-150">Get Started</button>
          <ul>
            <li className="font-light flex items-center gap-2"><img src="/check.svg" className="w-[15px]"/>All features in Pro </li>
            <li className="font-light flex items-center gap-2"><img src="/check.svg" className="w-[15px]"/>Dedicated account manager</li>
            <li className="font-light flex items-center gap-2"><img src="/check.svg" className="w-[15px]"/>Enterprise-grade security</li>
            <li className="font-light flex items-center gap-2"><img src="/check.svg" className="w-[15px]"/>SAML SSO</li>
          </ul>
        </div>
      </div>
    </>
  )
}