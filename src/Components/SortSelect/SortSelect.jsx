import React from 'react'
import { Select } from "../index"
import { SORT_OPTIONS } from "../../utils/constants"


function SortSelect({value, onChange}) {
  return (
   <Select 
    options={SORT_OPTIONS}
    value={value}
    className="text-slate-600 font-semibold border-2 border-slate-400"
    onChange = {(e) => onChange(e.target.value)}
   />
  )
}

export default SortSelect