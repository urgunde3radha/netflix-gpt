import { createBrowserRouter } from "react-router-dom";
import Header from "./Header";
import Login from "./Login";
import Browse from "./Browse";
import { RouterProvider } from "react-router-dom";

const Body = () => {
    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Login/> 
        },
        // {
        //     path: "/login",
        //     element: <Login/>
        // },
        {
            path: "/browse",
            element: <Browse/>
        },
    ]);
    return (
        <div>
            {/* <Login/>
            <Header/> */}
            <RouterProvider router={appRouter}></RouterProvider>
        </div>
    )
}

export default Body;