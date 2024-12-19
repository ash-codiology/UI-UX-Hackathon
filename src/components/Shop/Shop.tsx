import CustomerCare from '@/components/CustomerCare/CustomerCare'
import Image from 'next/image'
import React from 'react'

interface card {
    image: string
    title: string
    description: string
    prize: string,
    oldPrize: string
}

const Card:card[] =[{
    image: '/images/products/1.png',
    title: 'Syltherine',
    description: 'Stylish cafe chair',
    prize: 'Rp 2.500.000',
    oldPrize: 'Rp 3.500.000'
},
{
    image: '/images/products/2.png',
    title: 'Leviosa',
    description: 'Stylish cafe chair',
    prize: 'Rp 2.500.000',
    oldPrize: ''
},
{
    image: '/images/products/3.png',
    title: 'Lolito',
    description: 'Luxury big sofa',
    prize: 'Rp 7.000.000',
    oldPrize: 'Rp 14.000.000'
},
{
    image: '/images/products/4.png',
    title: 'Respira',
    description: 'Outdoor bar table and stool',
    prize: 'Rp 500.000',
    oldPrize: ''
},
{
    image: '/images/products/1.png',
    title: 'Syltherine',
    description: 'Stylish cafe chair',
    prize: 'Rp 2.500.000',
    oldPrize: 'Rp 3.500.000'
},
{
    image: '/images/products/2.png',
    title: 'Leviosa',
    description: 'Stylish cafe chair',
    prize: 'Rp 2.500.000',
    oldPrize: ''
},
{
    image: '/images/products/3.png',
    title: 'Lolito',
    description: 'Luxury big sofa',
    prize: 'Rp 7.000.000',
    oldPrize: 'Rp 14.000.000'
},
{
    image: '/images/products/4.png',
    title: 'Respira',
    description: 'Outdoor bar table and stool',
    prize: 'Rp 500.000',
    oldPrize: ''
},
{
    image: '/images/products/1.png',
    title: 'Syltherine',
    description: 'Stylish cafe chair',
    prize: 'Rp 2.500.000',
    oldPrize: 'Rp 3.500.000'
},
{
    image: '/images/products/2.png',
    title: 'Leviosa',
    description: 'Stylish cafe chair',
    prize: 'Rp 2.500.000',
    oldPrize: ''
},
{
    image: '/images/products/3.png',
    title: 'Lolito',
    description: 'Luxury big sofa',
    prize: 'Rp 7.000.000',
    oldPrize: 'Rp 14.000.000'
},
{
    image: '/images/products/4.png',
    title: 'Respira',
    description: 'Outdoor bar table and stool',
    prize: 'Rp 500.000',
    oldPrize: ''
},
{
    image: '/images/products/1.png',
    title: 'Syltherine',
    description: 'Stylish cafe chair',
    prize: 'Rp 2.500.000',
    oldPrize: 'Rp 3.500.000'
},
{
    image: '/images/products/2.png',
    title: 'Leviosa',
    description: 'Stylish cafe chair',
    prize: 'Rp 2.500.000',
    oldPrize: ''
},
{
    image: '/images/products/3.png',
    title: 'Lolito',
    description: 'Luxury big sofa',
    prize: 'Rp 7.000.000',
    oldPrize: 'Rp 14.000.000'
},
{
    image: '/images/products/4.png',
    title: 'Respira',
    description: 'Outdoor bar table and stool',
    prize: 'Rp 500.000',
    oldPrize: ''
},

]

const Shop = () => {
  return (
    <>
    <section className='min-h-full w-full flex flex-col  bg-white items-center  '>
        {/* banner part */}
       <div className='h-full md:h-[416px] w-[90%] md:w-[1440px] flex flex-col  items-center justify-center'>
       <div className=' md:h-[316px] relative w-[90%] md:w-[1440px] '>
      <Image src={'/images/shopbenner.png'} alt='hero' width={1440} height={316} />
      <div className='w-[150px] md:w-[124px] absolute translate-x-[-50%] translate-y-[-50%] top-[50%] left-[50%] h-[90%] flex flex-col justify-center items-center md:h-[84px] '>
        <h1 className='font-medium text-4xl text-black'>Shop</h1>
        <p className='font-normal text-[16px] text-mygray'>home &gt; shop</p>
        </div>
      </div>
     {/* filter */}
     <div className=' h-[80px] flex items-center justify-center  md:h-[100px] w-full md:w-[1440px] bg-peach'>
        {/* inner filter */}
       <div className='h-full md:h-[38px] w-[1240px] flex  flex-col md:flex-row items-center  justify-between'>
        {/* right side */}
       <div className='h-full w-full md:w-[500px] flex items-center justify-between  '>
        {/* box 1 */}
       <div className='h-[30px] w-[58px] flex items-center '>
        <Image src={'/images/filter/filter1.png'} alt='hero' width={58} height={30} />
       </div>
       {/* box 2 */}
       <div className='h-[30px] w-[58px] flex  justify-between items-center '>
        <span className='h-[28px] w-[28px] '><Image src={'/images/filter/filter2.png'} alt='hero' width={28} height={20} /></span>
        <span className='h-[24px] w-[24px] '><Image src={'/images/filter/filter3.png'} alt='hero' width={24} height={24} /></span>
       </div>
       {/* box 3 */}
      <span className='h-[37px]  md:w-[285px] flex border-l-2 border-black items-center justify-end '>
        <h2 className='text-[16px] font-semibold text-myblack'>
        Showing 1–16 of 32 results
        </h2>
      </span>
       </div>
        {/* left side */}
       <div className='h-[38px] w-full md:w-[500px] flex justify-between  '>
        <div className='h-full w-[100px] flex justify-between items-center'>
            <p className='text-[16px] font-semibold text-myblack'>Show</p>
             <span className='h-[38px] w-[38px] flex justify-center items-center bg-white'>16</span>
        </div>
        <span>
        <div className='h-full w-[288px] flex justify-between items-center'>
            <p className='text-[16px] font-semibold text-myblack'>Sort By</p>
             <span className='h-[38px] w-[188px] flex justify-center items-center bg-white'>Default</span>
        </div>
        </span>
       </div>
       </div>
    </div>
       </div>
       {/* products cards */}
       <div className='h-[7400px] md:h-[1980px] w-[90%] md:w-[1440px] flex flex-col justify-between pb-10 items-center '>
      
             
            <div className=' md:max-h-[1980px] w-[90%] md:w-[1340px] md:px-auto px-6 grid grid-cols-1  md:grid-cols-4  gap-2  '>
{Card.map((card, index) => (
   <div key={index} className='w-[285px] h-[446px] border-2 border-gray-200 bg-red-200'>
     <div className='w-[285px] h-[301px] bg-gray-300'>
       <Image src={card.image} alt='products' width={285} height={301} />
     </div>
       <div className='w-[285px] flex justify-center items-center h-[145px] bg-white' >
         <div className='w-[249px] flex flex-col justify-between h-[99px] bg-white'>
             <h1 className='font-semibold text-2xl text-myblack'>{card.title}</h1>
             <p className='text-mygray text-[16px] font-medium'>{card.description}</p>
             <div className='flex flex-row justify-between'>
             <span className='font-semibold text-myblack text-[20px]'>{card.prize} </span> <p className='text-mygray text-[16px] line-through'>{card.oldPrize}</p>
             </div>
         </div>
       </div>
       </div>
 ))}
 </div> 
        {/* pagination */}
        <div className='h-[32px] w-[90%] md:w-[392px] flex justify-between items-center '>
          <div className='h-[60px] w-[60px] text-white flex justify-center items-center bg-golden hover:bg-white hover:border-2 hover:text-myblack border-golden rounded-md'>1</div>
          <div className='h-[60px] w-[60px] text-white flex justify-center items-center bg-golden  hover:bg-white hover:border-2 hover:text-myblack border-golden rounded-md'>2</div>
          <div className='h-[60px] w-[60px] text-white flex justify-center items-center bg-golden  hover:bg-white hover:border-2 hover:text-myblack border-golden rounded-md'>3</div>
          <div className='h-[60px] w-[98px] text-white flex justify-center items-center bg-golden  hover:bg-white hover:border-2 hover:text-myblack border-golden rounded-md'>Next</div>
        </div>

        
       </div>
       <CustomerCare />

    </section>
    
      
    </>
  )
}

export default Shop


