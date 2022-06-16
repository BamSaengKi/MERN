import React from 'react'
import './InfoCard.css'
import { UilPen } from '@iconscout/react-unicons'
import { useState } from 'react'
import ProfileModal from '../ProfileModal/ProfileModal'
const InfoCard = () => {


    const [modalOpened, setModalopened] = useState(false)
    return (
        <div className="InfoCard">
            <div className="infoHead">
                <h4>Your info</h4>
                <div>
                    <UilPen width='2rem' height='1.2rem' onClick={()=>setModalopened(true)} />
                    <ProfileModal modalOpened={modalOpened}
                    setModalopened={setModalopened}/>
                </div>
            </div>

            <div className="info">
                <span>
                    <b>Status </b>
                </span>
                <span>in Relationship</span>
            </div>
            <div className="info">
                <span>
                    <b>Lives in </b>
                </span>
                <span>Multan</span>
            </div>
            <div className="info">
                <span>
                    <b>Works at </b>
                </span>
                <span>Zainkeepscode</span>
            </div>


            <button className='button logout-button '>Logout</button>
        </div>
    )
}

export default InfoCard