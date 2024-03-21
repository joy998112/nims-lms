import React from 'react'
import Navbar from '../components/Navbar'
import Attendies from '../components/Attendies'
import Loweranchors from '../components/Loweranchors'
import Copyright from '../components/Copyright'
import ScrollUpButton from '../components/ScrollUpButton'

export default function Attendence() {
  return (
    <div>
      <Navbar/>
      <Attendies/>
      <Loweranchors/>
      <Copyright/>
      <ScrollUpButton/>
    </div>
  )
}
