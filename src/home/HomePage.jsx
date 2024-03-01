import React from 'react'
import { Link } from "react-router-dom"

const HomePage = () => {
    return (
        <div className='HomePage'>
            
            
        <div className='headlink'>
        
            <h1>Selamat Datang di Seputar Indonesia News </h1>
            <img src="https://1.bp.blogspot.com/-GctvqQVW0tU/W2uO8rTZXkI/AAAAAAAA_PU/82NEBXrHIqcrqULfFH3o321TvRq4XZJgwCK4BGAYYCw/s1600/picture-701764.jpg" alt="" />
            <h2> </h2>
            <Link to ="/posts">
                <button >BACA</button>
            </Link>
            </div>
        </div>
    )
}

export default HomePage
