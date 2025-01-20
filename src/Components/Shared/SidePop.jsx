import React from 'react'
import { RxCross2 } from "react-icons/rx";

const SidePop = ({toggleSidePop}) => {
    return (
        <div className='sideTop'>
            <div className='rightSidebar'>
                <div className='title-flex'>
                    <div className='para5'>Write Review</div>
                    <RxCross2 className='cross-2' onClick={toggleSidePop} />
                </div>
            </div>
        </div>
    )
}

export default SidePop