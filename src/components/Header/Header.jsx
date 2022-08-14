import React from 'react'
import './header.css'
import moment from 'moment';
const Header = () => {
    const formatDate = moment().format('LL')
    return (
        <div className='headerWrapper'>
            <div className="topics">
                <div className="topic">
                    <p>Point of Interest</p>
                </div>
                <div className="topic">
                    <p>Interaction stats</p>
                </div>
                <div className="topic">
                    <p>Slides</p>
                </div>
                <div className="topic">
                    <p>Company</p>
                </div>
            </div>  
            <div className="date">
                {formatDate}
            </div>
        </div>
    )
}

export default Header