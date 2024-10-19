import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Productslisting from "../pages/productslisting";

const routers = createBrowserRouter([
    {
        path : "/",
        element : <App />,
        children : [
            {
                path : "",
                element : <Productslisting />
            }
        ]
    }
])

export default routers