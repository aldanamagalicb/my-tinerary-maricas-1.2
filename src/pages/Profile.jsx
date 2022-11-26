import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import UserCard from "../components/user/UserCard"
import { DB_LINK } from "../url";
import { useSelector } from "react-redux";

export default function Profile() {

    const {id} = useSelector(store => store.userReducer);
    let [user, setUser] = useState([]);
   
    useEffect(() => {
        axios.get(`${DB_LINK}api/auth/me/${id}`)
            .then((res) => setUser(res.data.response));
        // eslint-disable-next-line
    }, []);


    return (
        <UserCard photo={user.photo} name={user.name} lastName={user.lastName} age={user.age} />
    );
}


