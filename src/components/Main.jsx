import React from 'react'
import Login from './Login'

export default function Main({statedisplay, setStatedisplay}) {
  return (
      <main>
  <div class="kanachot"></div>
  <div class="karmir"></div>
  <div class="mugkanach"></div>
  <div class="deghin"></div>
  <div class="backapuyt"></div>
  <Login statedisplay={statedisplay} setStatedisplay={setStatedisplay} />
    </main>
      
  )
}
