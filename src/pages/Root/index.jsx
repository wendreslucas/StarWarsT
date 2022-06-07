import React from 'react'
import { Route, Routes } from 'react-router-dom'

export const Root = () => {
  return (
    <Routes>
      <Route path="/" element={<h1>HELLOWORLD</h1>} />
    </Routes>
  )
}
