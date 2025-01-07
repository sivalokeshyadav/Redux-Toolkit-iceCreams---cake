import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "./apis/fetchUser";

const User = () => {
  const users = useSelector((state) => state.user.users);
  const loading = useSelector((state) => state.user.loading);
  const error = useSelector((state) => state.user.error);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  console.log(users);

  return (
    <div>
      {loading && <h2>Loading ....</h2>}
      {!loading && error && <h2>Error: {error}</h2>}
      {!loading &&
        users.map((user) => (
          <div
            key={user.id}
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <h4>{user.id}.</h4>
            <h1>{user.name}</h1>
            <h4>{user.email}</h4>
            <h4>{user.phone}</h4>
            <h4>{user.website}</h4>
            <h4>{user.username}</h4>
          </div>
        ))}
    </div>
  );
};

export default User;
