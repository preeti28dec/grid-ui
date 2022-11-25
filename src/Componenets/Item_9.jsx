import React from 'react'
import {FaApple} from 'react-icons/fa'

function Item_9() {
    return (
        <div>
        
            <div className='text-gray-600 font-bold text-lg py-4 px-4'>Top Related Applictions</div>
            <div className='flex justify-between'>
                <div className='flex'>
                    <div className='py-2 px-2'>
                    <img className="bg-slate-200 py-2 px-4 rounded" alt='loding...' src='../chrome.png'/>
                    </div>
                    <div className=' font-semibold '>chrome
                        
                        <div className='flex'>
                            <div className='my-1'><FaApple/></div>
                            <div className='text-sm my-1 mx-1'>Mac</div>
                            <span className='mx-1 text-sm bg-green-300 px-3 py-1 rounded'>free</span>
                        </div>
                    </div>
                </div>
                <div>
                    <div>star star star </div>
                    <div className='text-sm'>1.51K reviewas</div>
                </div>
            </div>
        </div>
    )
}

export default Item_9
