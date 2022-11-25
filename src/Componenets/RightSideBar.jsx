import React from 'react'

import Header from './Header'
import Item_8 from './Item_8'
import Item_9 from './Item_9'

function RightSideBar() {
  return (

    <div className=''>
      <Header />
      <div className="cards mx-6 my-6 ">
        <div className="card item1 bg-green-200 flex">

          <div className='my-6'>
            <div className='text-lg pb-4'>Welcome back! Minimal UI</div>
            <div>If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything.</div>
            <button className='bg-green-400 text-white mt-6'>Go Now</button>
          </div>
          <div className='border-red-500'><img src="" alt="loding..." /></div>
        </div>


        <div className="card  bg-green-200 item2 ">TWO</div>


        <div className="card flex justify-between  bg-green-200 item3">
          <div>
            <div>Total Active Users</div>
            <div>Icon +2.6%</div>
            <div>18,765</div>
          </div>
          <div>graph icon</div>
        </div>


        <div className="card flex justify-between  bg-green-200 item4 ">
          <div>
            <div>Total Installed</div>
            <div>Icon +0.2%</div>
            <div>4,876</div>
          </div>
          <div>graph icon</div>
        </div>

        <div className="card flex justify-between  bg-green-200 item5">
          <div>
            <div>Total Downloads</div>
            <div>Icon -0.1%</div>
            <div>678</div>
          </div>
          <div>graph icon</div>
        </div>

        <div className="card  bg-green-200 item6">
          <div>Current Download</div>
          <div>Graph</div>
          <hr />
          <div className='flex '>
            <div>.<span>Mac</span></div>
            <div>.<span>Window</span></div>
            <div>.<span>IOS</span></div>
            <div>.<span>Android</span></div>
          </div>
        </div>

        <div className="card  bg-green-200 item7">
          <div className='flex justify-between'>
            <div>Area Installed</div>
            <div>
              <select className='' >
                <optio>2019</optio>
                <optio>2019</optio>
                <optio>2019</optio>
              </select>
            </div>
          </div>
          <div>Graph</div>
        </div>


        <div className="card bg-slate-100 item8">
          <div className='text-lg font-bold text-gray-600 py-4 px-4'>New Invoice </div>
          <Item_8/>
        </div>

        <div className="card  bg-slate-100 item9">
          <Item_9/>
        </div>

        <div className="card  bg-green-200 item10">TEN</div>

        <div className="card  bg-green-200 item11">ELEVEN</div>

        <div className="card  item12">
          <div className='item12_1 '>1</div>
          <div className='item12_2 my-4'>2</div>
        </div>
      </div>
    </div>


  )
}

export default RightSideBar
