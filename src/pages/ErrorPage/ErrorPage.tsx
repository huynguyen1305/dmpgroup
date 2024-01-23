import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";
const ErrorPage = () => {
  const error = useRouteError();
  if (isRouteErrorResponse(error)) {
    if (error.status === 404) {
      return (
        <div>
          <div>404 not found</div>
          <div>
            Go to{" "}
            <Link to="/" className="text-blue-500">
              HomePage
            </Link>
          </div>
        </div>
      );
    }

    if (error.status === 401) {
      return (
        <div>
          You aren't authorized to see this{" "}
          <div>
            Go to{" "}
            <Link to="/" className="text-blue-500">
              HomePage
            </Link>
          </div>
        </div>
      );
    }

    if (error.status === 503) {
      return (
        <div>
          Looks like our API is down{" "}
          <div>
            Go to{" "}
            <Link to="/" className="text-blue-500">
              HomePage
            </Link>
          </div>
        </div>
      );
    }

    if (error.status === 418) {
      return <div>🫖</div>;
    }
  }
  console.error(error);
  return (
    <div>
      Something went wrong{" "}
      <div>
        Go to{" "}
        <Link to="/" className="text-blue-500">
          HomePage
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
