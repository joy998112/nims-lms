import React from 'react'
import Navbar from '../components/Navbar'
import Postss from '../components/Postss'
import Loweranchors from '../components/Loweranchors'
import Copyright from '../components/Copyright'
import ScrollUpButton from '../components/ScrollUpButton'

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Postss/>
      <Loweranchors/>
      <Copyright/>
      <ScrollUpButton/>
    </div>
  )
}
