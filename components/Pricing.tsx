
const Pricing = () => {
  return (
    <section className='h-[100vh] max-md:h-[170vh] mt-[20px]'>
        <h2 className='text-gray-400 font-semibold text-2xl uppercase text-center '>Ready?</h2>
        <h2 className='text-white text-[4rem] text-center max-md:text-[2.5rem]'>Choose your plan</h2>

        <div className='flex justify-center max-md:flex-col mt-[30px] max-md:mt-[400px] gap-7 h-[30rem] w-[75%] max-md:max-w-[400px] mx-auto '>
          
          <div className="relative w-full text-center shadow-lg rounded-lg bg-gradient-to-br from-slate-800 to-stone-800 hover:ring-[2px] ring-sky-500 transition-all duration-[200ms]">
            <h3 className="text-white text-3xl font-semibold mt-[30px]">Manual</h3>
            <h4 className="mb-[150px] bg-gradient-to-r from-teal-500  to-blue-500 bg-clip-text text-transparent text-[5rem] text-center font-bold mt-[20px]">£35<span className="text-[1.2rem] text-slate-400 font-normal block">per lesson</span></h4>
            <button className=" text-white absolute left-[10%] bottom-[80px] max-md:bottom-[50px] mx-auto mt-[110px] bg-sky-500 hover:bg-sky-600 shadow-md font-semibold hover:shadow-none transition-all duration-[200ms] py-[10px] px-[10px] rounded-md text-xl w-[80%] ">Get Started</button>
          </div>

          <div className="relative w-full text-center shadow-lg rounded-lg bg-gradient-to-br from-slate-800 to-stone-800 border-sky-500 hover:ring-[2px] ring-fuchsia-500 transition-all duration-[200ms]">
            <h3 className="text-white text-3xl  font-semibold mt-[30px]">Automatic</h3>
            <h4 className="mb-[150px] bg-gradient-to-r from-violet-500  to-pink-500 bg-clip-text text-transparent text-[5rem] text-center font-bold mt-[20px] ">£37 <span className="text-[1.2rem] text-slate-400 font-normal block">per lesson</span></h4>
            <button className=" text-white absolute left-[10%] bottom-[80px] max-md:bottom-[50px] text-center mx-auto mt-[110px] bg-fuchsia-500 hover:bg-fuchsia-600 shadow-md font-semibold hover:shadow-none transition-all duration-[200ms] py-[10px] px-[10px] rounded-md text-xl w-[80%] ">Get Started</button>
          </div>

          <div className=" relative w-full text-center shadow-lg rounded-md bg-gradient-to-br from-slate-100 to-zinc-100 hover:ring-[3px] ring-teal-500 transition-all duration-[200ms]">
            <h3 className="text-slate-800 text-3xl text-center font-semibold mt-[30px]">Or ...</h3>
            <h4 className=" bg-gradient-to-r from-emerald-500  to-blue-500 bg-clip-text text-transparent text-[3.5rem] text-center font-bold mt-[20px] whitespace-nowrap max-lg:text-[2rem]">Join us!</h4>
            <h4 className="mb-[150px] text-center text-slate-500 text-xl mt-[20px] mx-[10px]">Become a driving instructor and earn money through teaching students.</h4>
            <button className=" absolute left-[10%] bottom-[80px] max-md:bottom-[50px] text-white text-center mx-auto mt-[70px] bg-teal-500 hover:bg-teal-600 shadow-md font-semibold hover:shadow-none transition-all duration-[200ms] py-[10px] px-[10px] rounded-md text-xl w-[80%] ">Contact us</button>

          </div>

        </div>
    </section>
  )
}

export default Pricing