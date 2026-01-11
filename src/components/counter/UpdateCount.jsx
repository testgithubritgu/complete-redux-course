import React from 'react'
import { useSelector } from 'react-redux'

const UpdateCount = () => {
    const value = useSelector((state) => state.updateCOunt.count);
  return (
    <div>
      {value}
    </div>
  )
}

export default UpdateCount
