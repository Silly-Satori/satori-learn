import axios from "axios";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Cookies from "universal-cookie";
import { backend } from "../Links";
import "axios";


const Auth = () => {
    const navigate = useNavigate();
    const { var: authVar } = useParams();

    useEffect(() => {
        console.log(authVar);

        const cookies = new Cookies();
        cookies.set("session", authVar, { path: "/" });
        cookies.set("set_at", Date.now(), { path: "/" });

        localStorage.setItem("session", authVar);


        let r  = axios.post(
            `${backend}/post`,
            {
                session: authVar,
            },
            {
                headers: {
                    "Content-Type": "application/json",
                },
            }
        ).then(
            (response) => {
                console.log(response.data);
            },
            (error) => {
                console.log(error);
            }
        );

        let req = axios.get(`${backend}/data`).then(
            (response) => {
                console.log(response.data);
            },
            (error) => {
                console.log(error);
            }
        );
        navigate("/");
    });
};

export default Auth;
