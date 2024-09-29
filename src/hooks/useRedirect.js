import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { axiosRes } from '../api/axiosDefault';

export const useRedirect = (userAuthStatus) => {
    const history = useHistory();

    useEffect(() => {
        const handleMount = async () => {
            try {
                await axiosRes.post("/dj-rest-auth/token/refresh/")
                // if the user is authenticated, redirect to the home page
                if (userAuthStatus === "loggedIn") {
                    history.push("/");
                }
            } catch (err) {
                // if the user is not authenticated, redirect to the login page
                if (userAuthStatus === "loggedOut") {
                    history.push("/");
                }
            }
        };
        handleMount();
    }, [history, userAuthStatus]);
};