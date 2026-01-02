export default function Card({ header, body, footer, classNames = '' }) {
    return (
      <div className={`divide-y min-h-screen divide-gray-200 border border-gray-200 overflow-hidden rounded-lg bg-white shadow-sm ${classNames}`}>
        {header && (
          <div className="px-4 py-5 sm:px-6">
            {header}
          </div>
        )}
        {body && (
          <div className="px-4 py-5 sm:p-6">
            {body}
          </div>
        )}
        {footer && (
          <div className="px-4 py-4 sm:px-6">
            {footer}
          </div>
        )}
      </div>
    );
  }