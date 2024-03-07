import pfp from '/images/myphoto.jpeg';

export default function Hero() {
  return (
    <div className='font-rubik flex flex-col items-center mt-[60px] mb-[30px] md:mt-[50px] md:mb-[60px]' id="/">
      <img
        src={pfp}
        alt="My Photo"
        className='rounded-full w-[80%] md:w-[25%] mb-[30px] border-[5px] border-green-500 md:border-black md:border-[10px] hover:border-green-500 transition duration-500'
      />
      <div className='text-center text-[30px] md:mt-[23px] font:sans font-bold md:text-[50px]  sm:mt-[15px] px-[56px] pb-[60px]'>
        <p>
          Hey, I'm <span className='text-green-600'>Wassim El Boussi.</span> I'm a full stack web developer. Here, you can check out what I'm working on and see my code in action.
        </p>
      </div>
    </div>
  );
}
