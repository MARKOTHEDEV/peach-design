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
      // 
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
      // 
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
{/* end of our team */}

{/* procurement */}
<div className='p-8  pl-[100px]'>
      
      <div className='w-1/2'>
      <h2 className='font-moda text-5xl '>Procurement Services</h2>
      <p className='text-[#000000a3]'>
      The above two broad categories can be further split into 3 procurement service lines
      </p>
      </div>
          <br />

      <div
      // 
      className='flex gap-10 w-[1100px]' 
      // style={{'border':'1px solid red'}}
      >
        <div className='w-1/2 p-8 shadow-2xl  rounded'>
          {/* icon */}
          <div className='text-white bg-[teal] inline-block p-2 rounded-full text-3xl'>
          <FaMoneyBill />
          </div>
          <h2 className='text-moda text-xl py-1'>TRANSACTIONAL PROCUREMENT </h2>
          <p className='text-[#000000a3]'>
          Tricontinental Solutions can develop a catalogue for the most commonly required items and standardise your internal procurement process thus allowing your staff to get on with their day-to-day tasks with minimal disruption

          {/* We provide our clients with a managed procurement service for in scope goods and services. This involves the management of the source to delivery of requested goods and services  */}
          </p>
        </div>
        <div className='w-1/2 p-8 shadow-2xl  rounded'>
          {/* icon */}
          <div className='text-white bg-[teal] inline-block p-2 rounded-full text-3xl'>
            <MdOutlineHomeRepairService />
          </div>
          <h2 className='text-moda text-xl py-1'>PROCUREMENT MANAGEMENT SERVICES </h2>
          <p className='text-[#000000a3]'>
          Tricontinental Solutions have the capability of managing your end-to-end tender/procurement process from requirements development through contract award and to ongoing contract management acting as a 1 stop shop for your external spend
          </p>
        </div>

      </div>
      <br />
      <br />
        <div className='w-[1100px]'>
        <div className='mx-auto w-[700px] p-8 shadow-2xl  rounded'>
          {/* icon */}
          <div className='text-white bg-[teal] inline-block p-2 rounded-full text-3xl'>
            <MdOutlineHomeRepairService />
          </div>
          <h2 className='text-moda text-xl py-1'>
            STRATEGIC PROCUREMENT
          </h2>
          <p className='text-[#000000a3]'>
          Tricontinental Solutions can develop, implement and manage organisation wide procurement strategies which will support the client’s strategic goals and objectives. We can develop and manage procurement policies as well as category management to support client goals. We can also manage or provide consultancy support for strategic tender/bid processes.

          </p>
        </div>
        </div>
        <br />
        <p className='text-center'>All our processes all have a clear and auditable trail of request to fulfilment including relevant approval steps as required.
</p>
    </div>
{/*end of procurement  */}

{/*  Procument SPend*/}
<div className='p-8  pl-[100px] flex gap-10'> 
    <div className='w-1/2'>
      <div>
        <h2 className='font-moda text-5xl '>Procurement Spend Categories </h2>
        <p className='text-[#000000a3] py-5'>We are able to support the management of your external spend with suppliers across all spend categories including</p>
      </div>

      <div className='relative'>
        <div className='absolute w-[2px]   h-full bg-black translate-x-[230px]'>
          {/* line */}
        </div>
          <div className='my-5 1/2 flex gap-40'>
              {/* div1 */}
              <h2 className='flex text-lg flex items-center '>
                
                {/* <span className='block bg-[teal] w-[10px] h-[10px] rounded-full'></span> */}
                <span>
                  INFORMATION TECHNOLOGY (IT)
                </span>
                 </h2>
              <p>
                Software, hardware, personnel, disaster recovery, outsourcing and occupancy costs related to supporting IT within the organisation
              </p>
          </div>


          <div className='my-5 1/2 flex gap-40 justify-between	'  >
              {/* div1 */}
              <h2 className='text-lg flex items-center gap-2' >
                {/* <span className='inline-block bg-[teal] w-[25px] h-[25px] rounded-full'></span> */}
                <span>
                FACILITIES 
                </span>
                 </h2>
              <p className='text-right' >
              Office Furniture, building fittings, building accessories
              </p>
          </div>

          <div className='my-5 1/2 flex gap-40 justify-between	'  >
              {/* div1 */}
              <h2 className='text-lg flex items-center gap-2' >
                {/* <span className='inline-block bg-[teal] w-[25px] h-[25px] rounded-full'></span> */}
                <span>
                OFFICE SUPPLIES 
                </span>
                 </h2>
              <p className='text-right' >
              Stationery, pens, pencils, erasers, rulers, stamps, highlighters, notebooks, printing paper, replacement printer inks, sticky pads, training boards, whiteboards, whiteboard pens, smartboards etc

              </p>
          </div>
          <div className='my-5 1/2 flex gap-40 justify-between	'  >
              {/* div1 */}
              <h2 className='text-lg flex items-center gap-2' >
                {/* <span className='inline-block bg-[teal] w-[25px] h-[25px] rounded-full'></span> */}
                <span>
                CORPORATE MERCHANDISE 

                </span>
                 </h2>
              <p className='text-right' >
              Staff uniforms, corporate gifts, branded material

              </p>
          </div>

          <div className='my-5 1/2 flex gap-40 justify-between	'  >
              {/* div1 */}
              <h2 className='text-lg flex items-center gap-2' >
                {/* <span className='inline-block bg-[teal] w-[25px] h-[25px] rounded-full'></span> */}
                <span>
                TRAINING

                </span>
                 </h2>
              <p className='text-right' >
              In house, training and external training; Train the trainer for {"SME’s"} skills transfer
              </p>
          </div>
      </div>
    </div>

    <div className='w-1/2 bg-[#193498] rounded p-8 text-white'>
      <h2 className='text-xl'>DELIVERING VALUE </h2>
      <br />
      
      <p className='py-2'>
      <span className='inline-block bg-[teal] w-[10px] h-[10px] rounded-full mx-1'></span>
          Tricontinental Solutions have extensive relationships with key suppliers, manufacturers and distributors in the UK, US, Asia and in Nigeria which we leverage and allow us source and deliver all your requirements using the best-in-class procurement processes.
      </p>

      <p className='py-2'>
      <span className='inline-block bg-[teal] w-[10px] h-[10px] rounded-full mx-1'></span>
      Our {"team’s"} experience in implementing lean practices drives out waste and help streamline the procurement process to deliver the optimum value to our clients 
      </p>

      <p className='py-2'>
      <span className='inline-block bg-[teal] w-[10px] h-[10px] rounded-full mx-1'></span>
      We have a wealth of experience in delivering procurement outsourcing programmes to private and public sector clients typically helping our clients to reduce their recurring procurement costs on average by 5% - 20% and their one-off strategic procurement instances in excess of 25%.
      </p>

      <p className='py-2'>
      <span className='inline-block bg-[teal] w-[10px] h-[10px] rounded-full mx-1'></span>
      The service we provide is aimed at maximising the value your organisation derives from its spend which frees up your time and leverages on our expertise to delivering a credible and auditable spend process.
      </p>
      <p className='py-2'>
      <span className='inline-block bg-[teal] w-[10px] h-[10px] rounded-full mx-1'></span>
      Our approach is always collaborative with our clients, as we have discovered over the years that it delivers the best results.
      </p>

      <p className='py-2'>
      <span className='inline-block bg-[teal] w-[10px] h-[10px] rounded-full mx-1'></span>
      We are also experienced in providing consultancy and training services to our clients to support them in upskilling their staff and processes to support their various projects
      </p>


    </div>

</div>
{/*  End of Procument SPend*/}
 
 {/* our approach */}
 <div className='p-8  pl-[100px] flex'>
          <div className='w-1/2'>
            <h2 className='font-moda text-5xl py-4'>
            Our Approach
            </h2>
            <p className='text-[#000000a3] leading-loose pr-10'>
            The Tricontinental Solutions team will manage all necessary processes and supply chains to ensure that appropriately approved requests for goods and services are delivered in line with stated requirements and in accordance with the prevailing contractual terms and conditions. This will include compliance with the contractual service level agreements in place for standard and non-standard purchase requests.
            </p>
          </div>
          
          <div className='w-1/2'>
            <div className='shadow-xl flex rounded overflow-hidden w-[600px] translate-y-20 bg-white' 
            // style={{'border':'1px solid red'}}
            >
              <img className='w-1/3 block' src="/approach.jpg" alt="" />
              <p className='w-2/3 px-12 py-8 leading-loose
'>The service will be delivered using Tricontinental Solutions’s tested standard delivery model of a front-office with which the client interacts and a number of back offices which fully exploit our distributed delivery model and include the use and management of appropriate third party suppliers</p>
            </div>
          </div>
 </div>
 <div className='bg-[#193498]'>
          <div className='p-8  pl-[100px] text-white'>
            <p 
            className='w-[600px] text-2xl'
            >Our service will be responsible for all aspects of purchase order satisfaction and will include the following service elements:</p>
                    <br />
          <div className='grid gap-10 grid-cols-3 items-center justify-center	'>

            <div className='flex gap-5 items-center'>
              <div className='text-white bg-[teal] inline-block p-2 rounded-full text-3xl'>
                <MdOutlineHomeRepairService />
              </div>
              <p className='leading-relaxed '>
                A dedicated team of experienced procurement professionals focused on delivering sustainable commercial advantage through best practice tools and methodologies
              </p>
            </div>

            <div className='flex gap-5 items-center'>
              <div className='text-white bg-[teal] inline-block p-2 rounded-full text-3xl'>
                <MdOutlineHomeRepairService />
              </div>
              <p className='leading-relaxed '>
              A single point of contact for receiving and fulfilling all approved in-scope purchase requests

              </p>
            </div>
            
            <div className='flex gap-5 items-center'>
              <div className='text-white bg-[teal] inline-block p-2 rounded-full text-3xl'>
                <MdOutlineHomeRepairService />
              </div>
              <p className='leading-relaxed '>
              A customer service desk for managing queries, non-standard requests and market intelligence 

              </p>
            </div>


            <div className='flex gap-5 items-center'>
              <div className='text-white bg-[teal] inline-block p-2 rounded-full text-3xl'>
                <MdOutlineHomeRepairService />
              </div>
              <p className='leading-relaxed '>
              Development and maintenance of a standard catalogue of a products and services

              </p>
            </div>

            <div className='flex gap-5 items-center'>
              <div className='text-white bg-[teal] inline-block p-2 rounded-full text-3xl'>
                <MdOutlineHomeRepairService />
              </div>
              <p className='leading-relaxed '>
              Provision of procurement analytics including spend reports and service reports

              </p>
            </div>

            <div className='flex gap-5 items-center'>
              <div className='text-white bg-[teal] inline-block p-2 rounded-full text-3xl'>
                <MdOutlineHomeRepairService />
              </div>
              <p className='leading-relaxed '>
              Periodic benchmarking of suppliers to ensure sustainable value delivery 

              </p>
            </div>
            
          </div>
          
          </div>

 </div>
 {/* end of our approach */}

 {/* Procurement Spend Categories */}
 <div className='p-8  pl-[100px]'>
      
      <div className=''>
      <h2 className='font-moda text-5xl '>Procurement Spend Categories {"–"} Contd…</h2>
      {/* <p className='text-[#000000a3]'>
      The above two broad categories can be further split into 3 procurement service lines
      </p> */}
      </div>
          <br />

      <div
      // 
      className='grid gap-10 grid-cols-2  gap-3' 
      // style={{'border':'1px solid red'}}
      >
        <div className=' p-8 shadow-xl  rounded'>
          {/* icon */}
          <div className='text-white bg-[teal] inline-block p-2 rounded-full text-3xl'>
          <FaMoneyBill />
          </div>
          <h2 className='text-moda text-xl py-1'>
          SUPPLIER MANAGEMENT
             </h2>
          <p className='text-[#000000a3]'>
          Tricontinental Solutions have the capability of managing your existing suppliers to limit and reduce your exposure to multiple individual suppliers which can be a major cause of distraction from the performance of core tasks and functions. This will include industry standard performance management to ensure our client consistently receives the anticipated value from the supplier.
          {/* We provide our clients with a managed procurement service for in scope goods and services. This involves the management of the source to delivery of requested goods and services  */}
          </p>
        </div>
        <div className='p-8 shadow-xl  rounded'>
          {/* icon */}
          <div className='text-white bg-[teal] inline-block p-2 rounded-full text-3xl'>
            <MdOutlineHomeRepairService />
          </div>
          <h2 className='text-moda text-xl py-1'>
          CONFIDENTIALITY  
          </h2>
          <p className='text-[#000000a3]'>
          Tricontinental Solutions understands the importance of confidentiality in business relationships and have all their staff and suppliers signed up to strict confidential clauses prior to engaging with us for the supply of goods and services. 
          </p>
          <p className='text-[#000000a3]'>
          We have experience working with sensitive public and private sector clients such as the UK Ministry of Justice, the UK border Agency, UK Ministry of Defence, the French investment bank Calyon AG, Barclays bank, BP international and a host of others.

          </p>
        </div>
        <div className=' p-8 shadow-xl  rounded'>
          {/* icon */}
          <div className='text-white bg-[teal] inline-block p-2 rounded-full text-3xl'>
            <MdOutlineHomeRepairService />
          </div>
          <h2 className='text-moda text-xl py-1'>
          SERVICE LEVELS </h2>
          <p className='text-[#000000a3]'>
          We work to agreed service level agreements and have regular service check point meetings with our clients.
          </p>
          <p className='text-[#000000a3]'>
          We will provide regular management reports to our clients keeping them informed of the status of our operations
          </p>
        </div>

        <div className=' p-8 shadow-xl  rounded'>
          {/* icon */}
          <div className='text-white bg-[teal] inline-block p-2 rounded-full text-3xl'>
            <MdOutlineHomeRepairService />
          </div>
          <h2 className='text-moda text-xl py-1'>
          COMMERCIAL MODEL
          </h2>
          <p className='text-[#000000a3]'>
          Management fee {"–"} Our clients pay Tricontinental Solutions an engagement and ongoing management fee for the services provided
          </p>

          <p className='text-[#000000a3]'>
          Cost plus model - Our clients pay Tricontinental Solutions for the cost of the product plus an agreed mark up of that cost and the costs of delivery. This approach is supported by an open book policy to allow for transparency and ease of auditability.
          </p>
          <p className='text-[#000000a3]'>
          Gain share {"–"} Tricontinental Solutions share the savings made on a procurement exercise with the client on a pre-agreed split basis

          </p>
        </div>

      </div>

    </div>
 {/* Procurement Spend Categories */}




 <div className='p-8  pl-[100px]'>
      
      <div className='w-1/2'>
      <h2 className='font-moda text-5xl '>Benefits To Client</h2>
      <p className='text-[#000000a3]'>
      Below are benefits clients enjoy!!
       </p>
       
      </div>

      <div className='flex gap-5'>
        <div className='w-1/2'>
              <p className='py-2'>
              <span className='inline-block bg-[teal] w-[10px] h-[10px] rounded-full mx-1'></span>
              Strategic price leverage - Tricontinental Solutions can typically source products and services at a better price point than our clients
              </p>

              <p className='py-2'>
              <span className='inline-block bg-[teal] w-[10px] h-[10px] rounded-full mx-1'></span>
              Control – Adopting Tricontinental Solutions procurement processes will provide better control over your organisation spend 
              </p>

              <p className='py-2'>
              <span className='inline-block bg-[teal] w-[10px] h-[10px] rounded-full mx-1'></span>
              Leverage – Leveraging on Tricontinental Solutions strategic commercial relationships with suppliers will deliver better quality purchasing and delivery
              </p>

              
              <p className='py-2'>
              <span className='inline-block bg-[teal] w-[10px] h-[10px] rounded-full mx-1'></span>
              Reducing overall cost of operations
              </p>

              <p className='py-2'>
              <span className='inline-block bg-[teal] w-[10px] h-[10px] rounded-full mx-1'></span>
              Reducing overall cost of operations
              </p>

              <p className='py-2'>
              <span className='inline-block bg-[teal] w-[10px] h-[10px] rounded-full mx-1'></span>
              Accurate reconciliation and auditability 
              </p>
        </div>
        <div className='w-1/2'>
        <p className='py-2'>
              <span className='inline-block bg-[teal] w-[10px] h-[10px] rounded-full mx-1'></span>
              Electronic transactions and archiving (where possible)
              </p>

              <p className='py-2'>
              <span className='inline-block bg-[teal] w-[10px] h-[10px] rounded-full mx-1'></span>
              Intuitive and assessable user service
              </p>
              <p className='py-2'>
              <span className='inline-block bg-[teal] w-[10px] h-[10px] rounded-full mx-1'></span>
              Single touch fulfilment process
              </p>

              <p className='py-2'>
              <span className='inline-block bg-[teal] w-[10px] h-[10px] rounded-full mx-1'></span>
              Standardisation of purchases for easier maintenance and flexibility
              </p>

              <p className='py-2'>
              <span className='inline-block bg-[teal] w-[10px] h-[10px] rounded-full mx-1'></span>
              Strengthen negotiating position with key suppliers
              </p>

              <p className='py-2'>
              <span className='inline-block bg-[teal] w-[10px] h-[10px] rounded-full mx-1'></span>
              Freedom to focus on core business
              </p>

        </div>
      </div>

  </div>

  </main>
  )
}
