import { createBrowserRouter } from "react-router-dom";
import App from '../App';

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: '/Plan',
                element: ''
            },
            {
                path: '/AddOn',
                element: ''
            },
            {
                path: '/Finishing',
                element: ''
            },
            {
                path: '/Thankyou',
                element: ''
            },
        ]
    }
]);

export default router;