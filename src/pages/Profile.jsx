import React from "react";
import { useEffect } from "react";
import UserCard from "../components/user/UserCard";
import { useSelector, useDispatch } from "react-redux";
import userActions from "../redux/actions/userActions";


export default function Profile() {

    const { doUser } = userActions;
    const dispatch = useDispatch();
    const {id} = useSelector(store => store.userReducer);
    useEffect(() => {
        dispatch(doUser(id))
        // eslint-disable-next-line
    }, []);
    
    return (
        <UserCard  />
    );
}
