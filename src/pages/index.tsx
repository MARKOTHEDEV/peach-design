import Image from 'next/image'
import { TiWorld } from "react-icons/ti";
import { FaMoneyBillTrendUp,FaMoneyBill  } from "react-icons/fa6";
import { MdOutlineHomeRepairService } from "react-icons/md"
import { SiMicrostrategy } from "react-icons/si";
import { FaVanShuttle } from "react-icons/fa6";
import { SiThemodelsresource } from "react-icons/si";


export default function Home() {
  return (
  <main >
    {/* #193498 */}
    {/* hero section */}
    <div className='hero_section h-[500px] flex justify-center items-center gap-40 relative overflow-hidden' >
      <div>
        <div className=' '>
          {/* <TiWorld className='text-9xl mx-auto ' style={{'color':'#193498'}} /> */}
          <div className='w-[100px] h-[100px] mx-auto'>
            <img className='w-full h-full object-contain' src="/logo_12.png" alt="" />
          </div>
          <h2 className='font-semibold font-moda text-5xl	text-center' style={{'color':'rgb(0 0 0 / 64%)'}}>OTB Midas</h2>
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
      <h2 className='font-moda font-light text-5xl pb-2'>Introduction</h2>
      <p className='text-[#000000a3] text-xl text-xl'>
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
          <p className='font-light	text-sm text-[#000000a3] text-xl'>
          This covers all spend that is directly related to the creation or provision of an {"organisation’s"} goods or services which ultimately get sold to customers. Examples are typical raw materials for production 
          </p>
        </div>

        <div className='font-moda px-12'>
          <h2 className=' text-3xl py-1'>INDIRECT SPEND</h2>
          <p className='font-light	text-sm text-[#000000a3] text-xl'>
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
      <p className='text-[#000000a3] text-xl'>
      OTB Midas Solutions is a procurement outsourcing and consultancy company, dedicated to delivering world class services to our clients. The services we provide can be split into two broad categories
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
          <p className='text-[#000000a3] text-xl'>
          We provide our clients with a managed procurement service for in scope goods and services. This involves the management of the source to delivery of requested goods and services 
          </p>
        </div>
        <div className='w-1/2 p-8 shadow-2xl  rounded'>
          {/* icon */}
          <div className='text-white bg-[teal] inline-block p-2 rounded-full text-3xl'>
            <MdOutlineHomeRepairService />
          </div>
          <h2 className='text-moda text-xl py-1'>CONSULTANCY SERVICES  </h2>
          <p className='text-[#000000a3] text-xl'>
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
              <img src="/logistics.jpg" className='block h-full w-full rounded-full' alt="" />
            </div>
            <h2 className='p-2 text-black font-moda text-xl'>LOGISTICS</h2>
            <p className='text-black'>
            Responsible for worldwide delivery of our products
            </p>
          </div>

          <div className='bg-[#193498] rounded p-8 text-center shadow-2xl'>
            <div className='w-[120px] h-[120px] rounded-full overflow-hidden mx-auto	p-[2px] bg-white'>
              <img src="/CONTRACTS.jpg" className='block h-full w-full rounded-full' alt="" />
            </div>
            <h2 className='p-2 text-white font-moda text-xl'>CONTRACTS
</h2>
            <p className='text-white'>
            Responsible for all contracts, development, ongoing management and all legal engagement

            </p>
          </div>

          <div className='bg-white rounded p-8 text-center shadow-2xl'>
            <div className='w-[120px] h-[120px] rounded-full overflow-hidden mx-auto	p-[2px] bg-[#1cd6ce]'>
              <img src="/logistics.jpg" className='block h-full w-full rounded-full' alt="" />
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
      <p className='text-[#000000a3] text-xl'>
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
          <p className='text-[#000000a3] text-xl'>
          OTB Midas Solutions can develop a catalogue for the most commonly required items and standardise your internal procurement process thus allowing your staff to get on with their day-to-day tasks with minimal disruption

          {/* We provide our clients with a managed procurement service for in scope goods and services. This involves the management of the source to delivery of requested goods and services  */}
          </p>
        </div>
        <div className='w-1/2 p-8 shadow-2xl  rounded'>
          {/* icon */}
          <div className='text-white bg-[teal] inline-block p-2 rounded-full text-3xl'>
            <MdOutlineHomeRepairService />
          </div>
          <h2 className='text-moda text-xl py-1'>PROCUREMENT MANAGEMENT SERVICES </h2>
          <p className='text-[#000000a3] text-xl'>
          OTB Midas Solutions have the capability of managing your end-to-end tender/procurement process from requirements development through contract award and to ongoing contract management acting as a 1 stop shop for your external spend
          </p>
        </div>

      </div>
      <br />
      <br />
        <div className='w-[1100px]'>
        <div className='mx-auto w-[700px] p-8 shadow-2xl  rounded'>
          {/* icon */}
          <div className='text-white bg-[teal] inline-block p-2 rounded-full text-3xl'>
            <SiMicrostrategy />
          </div>
          <h2 className='text-moda text-xl py-1'>
            STRATEGIC PROCUREMENT
          </h2>
          <p className='text-[#000000a3] text-xl'>
          OTB Midas Solutions can develop, implement and manage organisation wide procurement strategies which will support the client’s strategic goals and objectives. We can develop and manage procurement policies as well as category management to support client goals. We can also manage or provide consultancy support for strategic tender/bid processes.

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
        <p className='text-[#000000a3] text-xl py-5'>We are able to support the management of your external spend with suppliers across all spend categories including</p>
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
              <span className='text-white'>Lorem ipsum dolor sit amet.</span>
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
          OTB Midas Solutions have extensive relationships with key suppliers, manufacturers and distributors in the UK, US, Asia and in Nigeria which we leverage and allow us source and deliver all your requirements using the best-in-class procurement processes.
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
            <p className='text-[#000000a3] text-xl leading-loose pr-10'>
            The OTB Midas Solutions team will manage all necessary processes and supply chains to ensure that appropriately approved requests for goods and services are delivered in line with stated requirements and in accordance with the prevailing contractual terms and conditions. This will include compliance with the contractual service level agreements in place for standard and non-standard purchase requests.
            </p>
          </div>
          
          <div className='w-1/2'>
            <div className='shadow-xl flex rounded overflow-hidden w-[600px] translate-y-20 bg-white' 
            // style={{'border':'1px solid red'}}
            >
              <img className='w-1/3 block' src="/approach.jpg" alt="" />
              <p className='w-2/3 px-12 py-8 leading-loose
'>The service will be delivered using OTB Midas Solutions’s tested standard delivery model of a front-office with which the client interacts and a number of back offices which fully exploit our distributed delivery model and include the use and management of appropriate third party suppliers</p>
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
      {/* <p className='text-[#000000a3] text-xl'>
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
          <FaVanShuttle />
          </div>
          <h2 className='text-moda text-xl py-1'>
          SUPPLIER MANAGEMENT
             </h2>
          <p className='text-[#000000a3] text-xl'>
          OTB Midas Solutions have the capability of managing your existing suppliers to limit and reduce your exposure to multiple individual suppliers which can be a major cause of distraction from the performance of core tasks and functions. This will include industry standard performance management to ensure our client consistently receives the anticipated value from the supplier.
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
          <p className='text-[#000000a3] text-xl'>
          OTB Midas Solutions understands the importance of confidentiality in business relationships and have all their staff and suppliers signed up to strict confidential clauses prior to engaging with us for the supply of goods and services. 
          </p>
          <br />
          <p className='text-[#000000a3] text-xl'>
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
          <p className='text-[#000000a3] text-xl'>
          We work to agreed service level agreements and have regular service check point meetings with our clients.
          </p>
          <br />
          <p className='text-[#000000a3] text-xl'>
          We will provide regular management reports to our clients keeping them informed of the status of our operations
          </p>
        </div>

        <div className=' p-8 shadow-xl  rounded'>
          {/* icon */}
          <div className='text-white bg-[teal] inline-block p-2 rounded-full text-3xl'>
            <SiThemodelsresource />
          </div>
          <h2 className='text-moda text-xl py-1'>
          COMMERCIAL MODEL
          </h2>
          <p className='text-[#000000a3] text-xl'>
          Management fee {"–"} Our clients pay OTB Midas Solutions an engagement and ongoing management fee for the services provided
          </p>
          <br />
          <p className='text-[#000000a3] text-xl'>
          Cost plus model - Our clients pay OTB Midas Solutions for the cost of the product plus an agreed mark up of that cost and the costs of delivery. This approach is supported by an open book policy to allow for transparency and ease of auditability.
          </p>
          <br />
          <p className='text-[#000000a3] text-xl'>
          Gain share {"–"} OTB Midas Solutions share the savings made on a procurement exercise with the client on a pre-agreed split basis

          </p>
        </div>

      </div>

    </div>
 {/* Procurement Spend Categories */}




 <div className='p-8  pl-[100px]'>
      
      <div className='w-1/2'>
      <h2 className='font-moda text-5xl '>Benefits To Client</h2>
      <p className='text-[#000000a3] text-xl'>
      Below are benefits clients enjoy!!
       </p>
       
      </div>

      <div className='flex gap-5'>
        <div className='w-1/2'>
              <p className='py-2'>
              <span className='inline-block bg-[teal] w-[10px] h-[10px] rounded-full mx-1'></span>
              Strategic price leverage - OTB Midas Solutions can typically source products and services at a better price point than our clients
              </p>

              <p className='py-2'>
              <span className='inline-block bg-[teal] w-[10px] h-[10px] rounded-full mx-1'></span>
              Control – Adopting OTB Midas Solutions procurement processes will provide better control over your organisation spend 
              </p>

              <p className='py-2'>
              <span className='inline-block bg-[teal] w-[10px] h-[10px] rounded-full mx-1'></span>
              Leverage – Leveraging on OTB Midas Solutions strategic commercial relationships with suppliers will deliver better quality purchasing and delivery
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
      {/* client area */}
  <div  className='p-8  pl-[100px]'>
      <h2 className='font-moda text-5xl '>Clients</h2>
      <br />

      <div className='grid gap-10 grid-cols-3 items-center justify-center'>
          <div  className='rounded p-4 shadow-lg'>
            <img src="/worldpay.png" alt=""  className='block py-8 '/>

            <p className='py-1'>
              <span className='inline-block bg-[teal] w-[10px] h-[10px] rounded-full mx-1'></span>
              Direct spend reduction - Led multiple sourcing and synergy activities with spend up to £140M across technology contracts (software) delivered £23M direct cost reductions
              </p>

              
            <p className='py-1'>
              <span className='inline-block bg-[teal] w-[10px] h-[10px] rounded-full mx-1'></span>
              Led negotiations on Global Oracle Perpetual ULA deal - <strong>$29m savings</strong>
              </p>
          </div>

          <div  className='rounded p-4 shadow-lg'>
            <img src="/HSBC.png" alt=""  className='block py-8 '/>

            <p className='py-1 '>
              <span className='inline-block bg-[teal] w-[10px] h-[10px] rounded-full mx-1'></span>
              Spend Optimisation - $280m 5 year deal, with major technology provider across (Hardware, software and services). 10% Year on Year cost reduction as consumption and product uptake increases ($28m)

              </p>
              <p className='py-1 text-white'>
              {/* <span className='inline-block bg-[teal] w-[10px] h-[10px] rounded-full mx-1'></span> */}
              Led negotiations on Global Oracle Perpetual ULA deal - <strong>$29m savings</strong>
              </p>
              
          </div>

          <div  className='rounded p-4 shadow-lg'>
            <img src="/co-operative bank.png" alt=""  className='block py-8 '/>

            <p className='py-1 '>
              <span className='inline-block bg-[teal] w-[10px] h-[10px] rounded-full mx-1'></span>
              Spend Optimisation - IT Contracts separation (Risk mitigation) and Outsource, Over 700 Applications,{" >"}£100M annual spend. Delivered £3.5m in cost avoidance. Spend remained flat, Secured rights to use post divestment

              </p>
              
          </div>

          <div  className='rounded p-4 shadow-lg'>
            <img src="/bp.png" alt=""  className='block py-8 '/>

            <p className='py-1 '>
              <span className='inline-block bg-[teal] w-[10px] h-[10px] rounded-full mx-1'></span>
              Re-negotiated key supplier contracts for retail sites across Europe <strong>saving $400k</strong> on a $3.2 million spend
              </p>

              <p className='py-1 text-white'>
              {/* <span className='inline-block bg-[teal] w-[10px] h-[10px] rounded-full mx-1'></span> */}
              Led negotiations on Global Oracle Perpetual ULA deal - <strong>$29m savings</strong>
              </p>
              
          </div>

          <div  className='rounded p-4 shadow-lg'>
            <img src="/Shop Direct.png" alt=""  className='block py-8 '/>

            <p className='py-1 '>
              <span className='inline-block bg-[teal] w-[10px] h-[10px] rounded-full mx-1'></span>
              10 year outsourcing contract, delivered negotiated <strong>savings of £193m</strong> off £750m as well as a warranty backed incremental sales uplift of £2.1m per annum

              </p>

              
          </div>

          <div  className='rounded p-4 shadow-lg'>
            <img src="/British Airways.png" alt=""  className='block py-8 '/>

            <p className='py-1 '>
              <span className='inline-block bg-[teal] w-[10px] h-[10px] rounded-full mx-1'></span>
              Transition and transformation of the IT procurement function to an offshore service delivery model. £1.1M savings from multiple projects to deliver synergies following the BA-Iberia merger. 5 FTE headcount reduction 

              </p>

              
          </div>


          <div  className='rounded p-4 shadow-lg'>
            <img src="/dhl.png" alt=""  className='block py-8 '/>

            <p className='py-1 '>
              <span className='inline-block bg-[teal] w-[10px] h-[10px] rounded-full mx-1'></span>
              Process improvement/Cost optimisation. Insourcing of a previously outsourced 3rd party Customs Declaration System resulting in 50% reduction in overheads as well as 20% increase in revenue. Key highlight is that the CDS is now preferred interface software for custom declaration in UK and DHL owns the Patent 
              </p>
          </div>

          <div  className='rounded p-4 shadow-lg'>
            <img src="/walt_disney.png" alt=""  className='block py-8 '/>

            <p className='py-1 '>
              <span className='inline-block bg-[teal] w-[10px] h-[10px] rounded-full mx-1'></span>
              Financial and operational improvements to drive performance and business results on Disney Order and Inventory Mgt system which ensures all systems worldwide are operable and provide real time sales, distribution and warehouse stocks.  

              </p>
          </div>

          <div  className='rounded p-4 shadow-lg'>
            <img src="/Jaguar.png" alt=""  className='block py-8 '/>

            <p className='py-1 '>
              <span className='inline-block bg-[teal] w-[10px] h-[10px] rounded-full mx-1'></span>
              <strong>Cost reduction.</strong> Consolidation of multiple systems and planning Implementing an end to end global Strategic IT solution to enable tracking and remuneration of every vehicle and customer throughout the supply chain. 

              </p>
          </div>
      </div>
      <div className='grid gap-10 grid-cols-2 items-center justify-center'>
        
      <div  className='rounded p-4 shadow-lg'>
            <img src="/walgreens_boots.png" alt=""  className='block py-2 '/>

            <p className='py-1 '>
              <span className='inline-block bg-[teal] w-[10px] h-[10px] rounded-full mx-1'></span>
              Process improvement/Cost optimisation. Inaccurate customer data due to Multiple legacy optician systems (through M&A activities). Engaged to reduce customer complaints and save on overhead costs 

              </p>

              <p className='py-1 '>
              <span className='inline-block bg-[teal] w-[10px] h-[10px] rounded-full mx-1'></span>
              Created single global database for all optician system and introduced a more robust Azure database query system resulting in 80% reduction in customer complaints post implementation and a seamless customer experience
              </p>
              
          </div>

          <div  className='rounded p-4 shadow-lg'>
          <h2 className='font-moda text-5xl '>OTHER CLIENTS INCLUDE</h2>
         
         <div className='grid p-8 grid-cols-3 items-center justify-center	'>
        <img src="/wills towers.png" className='' alt="" />
        <img src="/Direct Line.png" className='' alt="" />
        <img src="/Fidelity international.png" className='' alt="" />
         </div>
              
          </div>
      </div>

  </div>  
      {/* end client area */}
      

      {/*Engagement Process  */}
      <div  className='p-8  pl-[100px]'>
        <br />
        <h2 className='font-moda text-5xl text-center '>Client Engagement Process</h2>
        <br />
        <br />
        <br />
        <br />
        <div>
          <img src="/shot.PNG" className='block h-full w-full' alt="" />
        </div>
      </div>
      {/* end Engagement Process  */}


      {/* solution values add  */}
      <div  className='p-8  pl-[100px]'>
        <br />
        <h2 className='font-moda text-5xl text-center '>OTB-MIDAS SOLUTIONS VALUE ADDS </h2>
        <br />
        <br />
        <br />
        <br />
        <div>
          <img src="/big2.png" className='block h-full w-full' alt="" />
        </div>
      </div>
      {/* end solution values add  */}
  </main>
  )
}
