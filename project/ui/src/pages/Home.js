import React from 'react';
import { Link } from "react-router-dom";


const Home = () => {
  return (
    <div className='container'>
      <div className='text-center'>
      <h1 className='text-center'>Selamat Datang di Book Library</h1>
      <p>Apakah anda ingin meminjam buku? Click Here</p>
        <Link className="nav-link" to="/posts/create">
          <button className='btn btn-warning'>Pinjam</button>
        </Link>
      </div>
    </div>
  )
}

export default Home