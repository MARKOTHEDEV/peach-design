import Image from 'next/image'
import { TiWorld } from "react-icons/ti";

export default function Home() {
  return (
  <main >
    {/* #193498 */}

    <div className='hero_section h-[500px] flex justify-center items-center gap-40 relative overflow-hidden' >
      <div>
        <div className=' '>
          <TiWorld className='text-9xl mx-auto ' style={{'color':'#193498'}} />
          {/* <h2 className='font-semibold font-moda text-xl	' style={{'color':'rgb(0 0 0 / 64%)'}}>TRICONTINENAL</h2>
          <p>SOLUTIONS</p> */}
        </div>
        <p className='text-center font-cento'>Delivering innovative and
          <div></div>
           sustainable value to your business</p>
      </div>

      <div className=' font-normal	text-lg	 w-[400px] h-[400px] rounded-full overflow-hidden border-[14px] border-white shadow-xl relative z-50	' >
        <img src="/banner.jpg" className='h-full w-full shadow-lg block' alt="banner.jpg" />
      </div>

      <div className='bg-[#193498] w-[700px] h-[700px] rounded-full absolute translate-x-[500px] translate-y-[-250px]'>
         {/*big blue ball  */}
      </div>
    </div>
  </main>
  )
}
