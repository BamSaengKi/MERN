import React from 'react'
import PostSide from '../../components/PostSide/PostSide'
import ProfileSide from '../../components/profileside/ProfileSide'
import './Home.css'
const Home = () => {
    return (
        <div className="Home">
            <ProfileSide/>
            <PostSide/>
            <div className='RightSide'>RightSide</div>

        </div>
    )
}

export default Home