export const PageHeader = ({ title }) => {
  return (
    <div className=" md:flex md:items-center md:justify-between">
      <div className="min-w-0 flex-1">
        <h2 className="text-lg/7  font-normal text-heading  sm:truncate sm:text-xl sm:tracking-tight">
          {title}
        </h2>
      </div>
    </div>
  );
};
