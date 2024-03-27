import React from 'react'
import { Outlet } from 'react-router'
import Personal_Info from './components/Personal_Info'

const App = () => {
  return (
    <div className='bg-slate-100 lg:p-10'>
       <Outlet/>
      <Personal_Info/>
    
    </div>
  )
}

export default App