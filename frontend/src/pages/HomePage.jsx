import React from 'react'
import Navbar from '../components/Navbar'
import Registration from '../components/registration'
import DataPage from '../components/UserDetails'
import UserDetails from '../components/UserDetails'
import MoreInfo from '../components/MoreInfo'
import Update from '../components/EditUser'

const HomePage = () => {
  return (
    <div>
       {/* <Navbar/> */}
      <Registration/>
      { /*<UserDetails/>
      <MoreInfo/>
      <Update/> */}
    </div>
  )
}

export default HomePage