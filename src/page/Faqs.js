import React from 'react'
import FaqsComp from '../component/FaqsComp'

function Faqs() {

    const FAQsData = [
        {
            "img": "https://purepng.com/public/uploads/large/purepng.com-tangerines-and-slicesfruitsorangecitrus-fruitcitrustangerinemandarin-orange-9815251847088xnlz.png",
            "Name": "Tangerine",
            "Heading": "How is Tangerine healthy?",
            "content": "Tangerine are a great health booster due to their high vitamin C content, which supports the immune system and skin health."
        },
        {
            "img": "https://purepng.com/public/uploads/large/purepng.com-tangerines-and-slicesfruitsorangecitrus-fruitcitrustangerinemandarin-orange-9815251847088xnlz.png",
            "Name": "Tangerine",
            "Heading": "How is Tangerine healthy?",
            "content": "Tangerine are a great health booster due to their high vitamin C content, which supports the immune system and skin health."
        },
        {
            "img": "https://purepng.com/public/uploads/large/purepng.com-tangerines-and-slicesfruitsorangecitrus-fruitcitrustangerinemandarin-orange-9815251847088xnlz.png",
            "Name": "Tangerine",
            "Heading": "How is Tangerine healthy?",
            "content": "Tangerine are a great health booster due to their high vitamin C content, which supports the immune system and skin health."
        }
    ]

  return (
    <div className='bg-custom-gradient min-h-screen p-4'>
        <h1 className='text-center text-3xl mb-[20px] text-slate-600 font-Tajawal font-semibold'>FAQ Section</h1>
        {FAQsData.map((e,i)=>{
            return (
                <FaqsComp e={e}/>
            )
        })}
    </div>
  )
}

export default Faqs
