'use client'

import {Loader} from '@mantine/core'

function CartsLoading() {
  return (
    <div className="flex justify-center items-center" style={{height: '100vh'}}>
      <Loader size="lg" variant="dots" />
      <br />
      <br />
      <div className="font-semibold text-base ml-4">Loading..</div>
    </div>
  )
}

export default CartsLoading
