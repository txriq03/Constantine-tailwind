
const Pricing = () => {
  return (
    <section className='h-[100vh] mt-[20px]'>
        <h2 className='text-gray-400 font-semibold text-2xl uppercase text-center '>Ready?</h2>
        <h2 className='text-white text-[4rem] text-center max-sm:text-[2.5rem]'>Choose your plan</h2>
        <div className='flex justify-center mt-[30px] gap-7 h-[30rem] '>
          <div className="w-[20rem] shadow-lg rounded-lg bg-gradient-to-br from-slate-800 to-stone-800 border-teal-500">
            <h3 className="text-white text-3xl text-center font-semibold mt-[30px]">Manual</h3>
            <h4 className=" bg-gradient-to-r from-teal-500  to-blue-500 bg-clip-text text-transparent text-[5rem] text-center font-bold mt-[20px]">£35<span className="text-[1.2rem] text-white font-normal block">per month</span></h4>

          </div>

          <div className="w-[20rem] shadow-lg rounded-lg bg-gradient-to-br from-slate-800 to-stone-800 border-sky-500  ">
            <h3 className="text-white text-3xl text-center font-semibold mt-[30px]">Automatic</h3>
            <h4 className="bg-gradient-to-r from-violet-500  to-pink-500 bg-clip-text text-transparent text-[5rem] text-center font-bold mt-[20px]">£37 <span className="text-[1.2rem] text-white font-normal block">per month</span></h4>
          </div>

          <div className="w-[20rem] shadow-lg rounded-md bg-gradient-to-br from-slate-100 to-zinc-100">
            <h3 className="text-slate-800 text-3xl text-center font-semibold mt-[30px]">Or...</h3>
          </div>

        </div>
    </section>
  )
}

export default Pricing