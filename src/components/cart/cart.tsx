import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Cart = () => {
  return (
    <>
     <div className='min-h-full w-full flex flex-col  bg-white items-center  '>
          {/* banner */}
       <div className='h-full md:h-[316px] w-[90%] md:w-[1440px] flex flex-col  items-center justify-center'>
       <div className=' md:h-[316px] relative w-[90%] md:w-[1440px] '>
      <Image src={'/images/shopbenner.png'} alt='hero' width={1440} height={316} />
      <div className='w-[150px] md:w-[124px] absolute translate-x-[-50%] translate-y-[-50%] top-[50%] left-[50%] h-[90%] flex flex-col justify-center items-center md:h-[84px] '>
        <h1 className='font-medium text-4xl text-black'>Cart</h1>
        <p className='font-normal text-[16px] text-mygray'>home&gt;Cart</p>
        </div>
      </div>
      </div>
      {/* Cart */}
      <div className='h-[525px] w-[90%] md:w-[1440px] flex flex-col space-y-2 py-12 items-center justify-center  '>
        <div className='w-[90%] h-[470px] md:w-[1240px] md:h-[390px] flex md:flex-row flex-col items-center md:items-start justify-between '>
            <div className='h-[200px] w-full md:w-[817px] flex flex-col items-center justify-between md:h-[215px] '>
                <div className='h-[55px] w-full flex justify-around items-center bg-peach'>
                    <h2 className='font-medium text-[16px] text-black'>Product</h2>
                    <h2  className='font-medium text-[16px] text-black'>Price</h2>
                    <h2  className='font-medium text-[16px] text-black'>Quantity</h2>
                    <h2  className='font-medium text-[16px] text-black'>Subtotal</h2>
                </div>
                <div className='h-[105px] w-full flex justify-around items-center'>
                    <div className='w-[108px] h-[105px] md:bg-peach'>
                    <Image  src={'/images/products/cart.png'} alt='hero' width={108} height={105} />
                    </div>
                    <div className='w-[553px] md:w-[573px] h-[25px] '>
                        <Image  src={'/images/products/cart1.png'} alt='hero' width={573} height={25} />
                    </div>
                    <div>
                    <Image  src={'/images/products/deleteicon.png'} alt='hero' width={28} height={28} />

                    </div>
                </div>
            </div>
            <div className='md:w-[390px] h-[250px] w-[250px] md:h-[390px] flex justify-between items-center bg-peach'>
              <div className='w-[70%] h-[70%] flex flex-col justify-between items-center mx-auto '>
            <h1 className='font-medium text-[16px] md:text-[32px] text-black'>Cart Totals</h1>
            <div>
                <span className='font-medium text-[16px]  text-black'>Subtotal :</span> <span className='font-normal text-[16px]  text-mygray'>$20.00</span> <br />
                <span className='font-medium text-[16px]  text-black'>Total :</span> <span className='font-medium text-[12px] md:text-[20px]  text-golden'>Rs. 250,000.00</span>
            </div>
          <button className='w-[100%] h-[50px]  rounded-xl border-2 border-myblack text-black text-[16px] hover:bg-golden hover:text-white  font-medium'> <Link href={'/checkout'}> checkout </Link></button> 
              </div>
            </div>

        </div>
      </div>

     </div>
      
    </>
  )
}

export default Cart