import { ChevronRightIcon } from '@heroicons/react/16/solid';

export const Breadcrumbs = ({ items }) => {
  return (
    <div>
      {/* Mobile "Back" link */}
      <nav aria-label="Back" className="sm:hidden">
        <a
          href="#"
          className="flex items-center text-sm font-medium text-gray-500 hover:text-gray-700"
        >
          ← Back
        </a>
      </nav>

      {/* Desktop breadcrumbs */}
      <nav aria-label="Breadcrumb" className="hidden sm:flex">
        <ol role="list" className="flex items-center space-x-1">
          {items.map((item, idx) => (
            <li key={item.name} >
              <div className="flex items-center">
                {idx !== 0 && (
                  <ChevronRightIcon aria-hidden="true" className="size-5 shrink-0 text-gray-400" />
                )}
                <a
                  href={item.href}
                  aria-current={item.current ? 'page' : undefined}
                  className={` ${idx !== 0 && 'ml-1'} text-sm  ${
                    item.current
                      ? 'text-gray-500 font-normal'
                      : 'text-gray-500 hover:text-gray-500 font-normal'
                  }`}
                >
                  {item.name}
                </a>
              </div>
            </li>
          ))}
        </ol>
      </nav>
    </div>
  );
};
