import Image from 'next/image'
import { TiWorld } from "react-icons/ti";
import { FaMoneyBillTrendUp,FaMoneyBill  } from "react-icons/fa6";
import { MdOutlineHomeRepairService } from "react-icons/md"
export default function Home() {
  return (
  <main >
    {/* #193498 */}
    {/* hero section */}
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
        {/* <img src="/banner.jpg" className='h-full w-full shadow-lg block' alt="banner.jpg" /> */}
        <img src="/campaign.jpg" className='h-full w-full shadow-lg block object-cover	' alt="banner.jpg" />
        
      </div>

      <div className='bg-[#193498] w-[700px] h-[700px] rounded-full absolute translate-x-[500px] translate-y-[-250px]'>
         {/*big blue ball  */}
      </div>
    </div>

    {/* Introduction */}
    <div className='p-8  pl-[100px]'>
      <h2 className='font-moda font-light text-4xl pb-2'>Introduction</h2>
      <p className='text-[#000000a3]'>
      Procurement is fundamental to the effective functioning of <div></div> any organisation with third party external spend. 
      </p>
    </div>
    <br />
    <div className='flex gap-8'>
      <div className='p-12 py-[80px] pl-[100px] introduction_curve w-1/2 text-white flex items-center justify-center rounded-r-[100px] relative'>
        {/* curved blue */}
        <div className='absolute bg-[teal] p-4 rounded-full translate-y-[120px] translate-x-[280px]'>
          <FaMoneyBillTrendUp 
          style={{'fontSize':'40px',}} />
        </div>

        <div className='absolute bg-[teal] p-4 rounded-full translate-y-[-120px] translate-x-[280px]'>
          <FaMoneyBillTrendUp 
          style={{'fontSize':'40px',}} />
        </div>
        <p
        className='leading-relaxed text-xl font-cento'
        >Organisations need to find more effective ways of maximising the value they receive from their budgets and reduce the amount of time and effort spent to support the procurement process.</p>
      </div>

      <div className='w-1/2 flex flex-col	gap-20' 
      // style={{'border':'1px solid red'}}
      >
        {/* stuff to use */}
        <div className='font-moda px-12'>
          <h2 className=' text-3xl py-1'>DIRECT SPEND</h2>
          <p className='font-light	text-sm text-[#000000a3]'>
          This covers all spend that is directly related to the creation or provision of an {"organisation’s"} goods or services which ultimately get sold to customers. Examples are typical raw materials for production 
          </p>
        </div>

        <div className='font-moda px-12'>
          <h2 className=' text-3xl py-1'>INDIRECT SPEND</h2>
          <p className='font-light	text-sm text-[#000000a3]'>
          This covers all spend that is not core to the production of an {"organization's"} goods or services but are required to for running the business. Examples include computers, software, IT support, HR, Office suppliers, uniforms etc.

          </p>
        </div>
      </div>
    </div>
    {/* end Introduction */}
    <br />
    {/* WHo we are */}
 
    <div className='p-8  pl-[100px]'>
      
      <div className='w-1/2'>
      <h2 className='font-moda text-5xl '>Who Are We</h2>
      <p className='text-[#000000a3]'>
      Tricontinental Solutions is a procurement outsourcing and consultancy company, dedicated to delivering world class services to our clients. The services we provide can be split into two broad categories
      </p>
      </div>
          <br />

      <div className='flex gap-10 w-[1100px]' 
      // style={{'border':'1px solid red'}}
      >
        <div className='w-1/2 p-8 shadow-2xl  rounded'>
          {/* icon */}
          <div className='text-white bg-[teal] inline-block p-2 rounded-full text-3xl'>
          <FaMoneyBill />
          </div>
          <h2 className='text-moda text-xl py-1'>MANAGED SERVICE </h2>
          <p className='text-[#000000a3]'>
          We provide our clients with a managed procurement service for in scope goods and services. This involves the management of the source to delivery of requested goods and services 
          </p>
        </div>
        <div className='w-1/2 p-8 shadow-2xl  rounded'>
          {/* icon */}
          <div className='text-white bg-[teal] inline-block p-2 rounded-full text-3xl'>
            <MdOutlineHomeRepairService />
          </div>
          <h2 className='text-moda text-xl py-1'>CONSULTANCY SERVICES  </h2>
          <p className='text-[#000000a3]'>
          We provide consultancy services to our clients to support their budgeting and spend profiles. This includes strategic reviews, policy development and maintenance, spend analysis, supplier and market analysis etc.
          </p>
        </div>
      </div>
    </div>
    {/*end WHo we are */}


          {/* our team */}

    <div className='p-8  pl-[100px]'>
      <h2 className='text-4xl w-[600px] text-center mx-auto font-moda font-light	'>
      Our team is made up of experienced partners in 4 key areas as well as our operational delivery people
      </h2>
        
<br />
        <div className='grid gap-4 grid-cols-4 w-[1200px] mx-auto ' >
        <div className='bg-[#193498] rounded p-8 text-center shadow-2xl'>
            <div className='w-[120px] h-[120px] rounded-full overflow-hidden mx-auto	p-[2px] bg-white'>
              <img src="/campaign.jpg" className='block h-full w-full rounded-full' alt="" />
            </div>
            <h2 className='p-2 text-white font-moda text-xl'>PROCUREMENT</h2>
            <p className='text-white'>
            Responsible for all sourcing and procurement activities.
            </p>
          </div>

          <div className='bg-white rounded p-8 text-center shadow-2xl'>
            <div className='w-[120px] h-[120px] rounded-full overflow-hidden mx-auto	p-[2px] bg-[#1cd6ce]'>
              <img src="/campaign.jpg" className='block h-full w-full rounded-full' alt="" />
            </div>
            <h2 className='p-2 text-black font-moda text-xl'>LOGISTICS</h2>
            <p className='text-black'>
            Responsible for worldwide delivery of our products
            </p>
          </div>

          <div className='bg-[#193498] rounded p-8 text-center shadow-2xl'>
            <div className='w-[120px] h-[120px] rounded-full overflow-hidden mx-auto	p-[2px] bg-white'>
              <img src="/campaign.jpg" className='block h-full w-full rounded-full' alt="" />
            </div>
            <h2 className='p-2 text-white font-moda text-xl'>CONTRACTS
</h2>
            <p className='text-white'>
            Responsible for all contracts, development, ongoing management and all legal engagement

            </p>
          </div>

          <div className='bg-white rounded p-8 text-center shadow-2xl'>
            <div className='w-[120px] h-[120px] rounded-full overflow-hidden mx-auto	p-[2px] bg-[#1cd6ce]'>
              <img src="/campaign.jpg" className='block h-full w-full rounded-full' alt="" />
            </div>
            <h2 className='p-2 text-black font-moda text-xl'>SERVICE DELIVERY </h2>
            <p className='text-black'>
            Responsible for day-to-day engagement with the client. All our procurement services practitioners are industry certified and are led by experienced procurement consultants and managers
            </p>
          </div>
        </div>
    </div>

  </main>
  )
}
