import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className='app' style={{height:"100vh",width:"100vw",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:'column'}}>
            <Link to='about'>
                <p style={{}}>About</p>
            </Link>
            <Link to='h&t'>
                <p style={{}}>Head and Tails</p>
            </Link>
        </div>
    )
}

export default Home