import save from '../logic/save'

import { useState, useEffect } from 'react'

export default function InputsItem ({ name, number, start }) {
  const tipColor = `color${name}${number}`

  const [color, setColor] = useState(() => {
    const localColor = window.localStorage.getItem(tipColor)
    return localColor
      ? JSON.parse(localColor)
      : '#ffffff'
  })
  const onChange = (e) => {
    setColor(e.currentTarget.value)
  }

  useEffect(() => {
    save(tipColor, color)
  }, [color])

  useEffect(() => {
    if (start) {
      window.localStorage.removeItem(tipColor)
      setColor('#ffffff')
    }
  }, [start])

  return (
    <>
      <input
        type='color'
        className='inputColor'
        value={color}
        onChange={onChange}
      />
    </>
  )
}
