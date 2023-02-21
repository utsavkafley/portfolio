import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div
      className="max-w-md mx-auto my-12 border-negative border-2 p-4 rounded text-dark text-xl text-center"
      id="error-page"
    >
      <h1 className="text-3xl mb-3">Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p className="text-lg">
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
