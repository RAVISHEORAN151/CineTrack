
import React from "react";
import { Button } from "../index";
import { STATUS_OPTIONS } from "../../utils/constants";

function FilterBar({value, onChange }) {
  return (
    <div className="flex gap-2" role="group" aria-label="Filter by status">
      {STATUS_OPTIONS.map((option) => (
        <Button
          key={option.value}
          type="button"
          variant={value === option.value ? "primary" : "ghost"}
          className=" border-slate-400 active:border-0"
          onClick={() => onChange(option.value)}
        >
          {option.label}
        </Button>
      ))}
    </div>
  );
}

export default FilterBar;