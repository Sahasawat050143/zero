import React from 'react'
import { Outlet } from 'react-router-dom'

export const MasterPage = () => {
  return (
    <div style={{ backgroundImage: "url('%PUBLIC_URL%/plane.png')" }}>
      <Outlet />
    </div>
  )
}

export default MasterPage