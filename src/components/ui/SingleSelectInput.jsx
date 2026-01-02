import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import { ChevronUpDownIcon } from "@heroicons/react/16/solid";
import { CheckIcon } from "@heroicons/react/20/solid";

export default function SingleSelectInput({
  label,
  options = [],
  value,
  onChange,
  placeholder,
  required
}) {
  return (
    <div className="relative w-full">
      {label && (
        <label
          htmlFor="dropdown"
          className="absolute -top-2 left-2 inline-block rounded-lg bg-white px-1 text-xs font-medium text-default z-10"
        >
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
          
        </label>
      )}
      <Listbox value={value} onChange={onChange}>
        <div className="relative">
          <ListboxButton
            id="dropdown"
            className="block w-full input-border cursor-default bg-white py-1.5 pl-3 pr-10 text-left text-base text-default placeholder:text-gray-400 focus:outline-none focus:ring-0 sm:text-sm/6"
          >
            <span
              className={`block truncate ${
                value ? "text-default" : "text-gray-400"
              }`}
            >
              {value?.label ||
                value?.templateName ||
                value?.value ||
                placeholder}
            </span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
              <ChevronUpDownIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </span>
          </ListboxButton>

          <ListboxOptions className="absolute z-50 w-full max-h-40 overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
            {options.length > 0 ? (
              options.map((option, index) => (
                <ListboxOption
                  key={`${option.label || option.value}-${index}`}
                  value={option}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-3 pr-9 ${
                      active ? "bg-gray-100 text-gray-500" : "text-gray-500"
                    }`
                  }
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${selected ? "font-medium" : "font-normal"}`}
                      >
                        {option.label || option.templateName || option.value}
                      </span>
                      {selected && (
                        <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-indigo-600">
                          <CheckIcon className="h-5 w-5" aria-hidden="true" />
                        </span>
                      )}
                    </>
                  )}
                </ListboxOption>
              ))
            ) : (
              <div className="text-gray-500 py-2 pl-3">
                No options available
              </div>
            )}
          </ListboxOptions>
        </div>
      </Listbox>
    </div>
  );
}
