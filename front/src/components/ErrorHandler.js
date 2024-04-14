import { useRouteError } from "react-router-dom";

function ErrorHandler() {
    let error = useRouteError();
    console.error(error);
    return <div>Dang!</div>;
}

export default ErrorHandler;