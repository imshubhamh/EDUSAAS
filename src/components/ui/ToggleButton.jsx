import { useState } from "react";
import { Description, Field, Label, Switch } from "@headlessui/react";

export default function ToggleButton({
  labelHead,
  labelDescription,
  enabled,
  setEnabled,
}) {
  return (
    <Field className="flex items-center justify-between">
      <span className="flex grow flex-col">
        <Label
          as="span"
          passive
          className="text-sm/6 font-medium text-gray-900"
        >
          {labelHead}
        </Label>
        <Description as="span" className="text-sm text-gray-500">
          {labelDescription}
        </Description>
      </span>
      <Switch
        checked={enabled}
        onChange={() => setEnabled((prev) => !prev)}
        // onChange={() => togglePublished(row.original._id)}
        className="group relative inline-flex h-5 w-10 shrink-0 cursor-pointer items-center justify-center rounded-full focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 focus:outline-hidden"
      >
        <span
          aria-hidden="true"
          className="pointer-events-none absolute size-full rounded-md bg-white"
        />
        <span
          aria-hidden="true"
          className={`pointer-events-none absolute mx-auto h-4 w-9 rounded-full transition-colors duration-200 ease-in-out ${
            enabled ? "bg-primary" : "bg-gray-200"
          }`}
        />
        <span
          aria-hidden="true"
          className={`pointer-events-none absolute left-0 inline-block size-5 transform rounded-full border border-gray-200 bg-white shadow-sm ring-0 transition-transform duration-200 ease-in-out ${
            enabled ? "translate-x-5" : "translate-x-0"
          }`}
        />
      </Switch>
     
    </Field>
  );
}
