import React, { useContext} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useHistory,
    useLocation
} from "react-router-dom";
import { UserContext } from '../../App';


const PrivateRoute = ({ children, ...rest }) => {
    const [loginUser, SetLoginUser] = useContext(UserContext);
   
    return (
        <Route
            {...rest}
            render={({ location }) =>
                loginUser.email ? (

                    children

                ) : (
                        <Redirect
                            to={{
                                pathname: "/login",
                                state: { from: location },
                            
                            }}
                        />
                    )
            }
        />
    );
};

export default PrivateRoute;
