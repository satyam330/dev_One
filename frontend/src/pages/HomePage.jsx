import React from 'react'
import Navbar from '../components/Navbar'
import Registration from '../components/registration'
import DataPage from '../components/Datapage'

const HomePage = () => {
  return (
    <div>
       <Navbar/> 
      <Registration/>
    <DataPage/>
    </div>
  )
}

export default HomePage