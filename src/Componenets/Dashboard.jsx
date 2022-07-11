import React from 'react'
import LeftSideBar from './LeftSideBar'
import RightSideBar from './RightSideBar'

function Dashboard() {
    return (

        <div className=' main_body'>
            <div className='bg-green-500 left_sidebar'><LeftSideBar /></div>
            <div className=' right_sidebar'><RightSideBar /></div>
        </div>

    )
}

export default Dashboard
