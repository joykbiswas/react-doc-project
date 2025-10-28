import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-4xl font-bold mb-2">Oops!</h1>
      <p className="text-lg mb-1">Sorry, an unexpected error has occurred.</p>
      <p className="text-gray-500 italic">
        {error.statusText || error.message}
      </p>
    </div>
  );
}
