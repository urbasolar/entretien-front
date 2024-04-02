import { useMatches } from "react-router-dom";

export const Breadcrumbs = () => {
  const matches = useMatches() as {
    handle: { crumb?: (arg: any) => JSX.Element };
    data: any;
  }[];
  const crumbs = matches
    // first get rid of any matches that don't have handle and crumb
    .filter((match) => match.handle?.crumb)
    // now map them into an array of elements, passing the loader
    // data to each one
    .map((match) => {
      if (match.handle.crumb) return match.handle.crumb(match.data);
    });

  return (
    <div>
      <ol className="flex">
        {crumbs.map((crumb, index) => (
          <>
            <li
              key={index}
              className={`text-sm font-semibold ${
                crumb?.props?.to === window.location.pathname
                  ? "text-white"
                  : "text-white-200"
              }`}
            >
              {crumb}
            </li>
            {index < crumbs.length - 1 && (
              <li
                key={index + "separator"}
                className="mx-2 text-sm text-white-200"
              >
                /
              </li>
            )}
          </>
        ))}
      </ol>
    </div>
  );
};
