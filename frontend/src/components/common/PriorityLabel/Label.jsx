import React from 'react'
import { PRIORITY } from '../../../constants/BACKEND_KEYS'

const Label = ({priority}) => {
  console.log(priority)
  return (
    <label
        className={`rounded-full px-2 h-[20px] bg-slate-200 font-semibold text-[12px] ${
            PRIORITY.HIGH.includes(priority)
                ? "text-prioHigh"
                : PRIORITY.MEDIUM.includes(priority)
                ? "text-prioMedium"
                : PRIORITY.LOW.includes(priority)
                ? "text-prioLow"
                : "text-yellow-500"
        }`}
      >
        {priority}
      </label>
  )
}

export default Label