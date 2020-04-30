import React, { useState, useEffect } from 'react'
import { Bread } from './Bread'
import { Lettuce } from './Lettuce'
import { Cheese } from './Cheese'
import { Meat } from './Meat'

export function Hamburger() {
  const [state, setState] = useState()
  useEffect(() => {
    console.log('yum')
  }, [])
  return (
    <Bread>
      <Lettuce>fresh</Lettuce>
      <Cheese>nice</Cheese>
      <Meat>good</Meat>
    </Bread>
  )
}
