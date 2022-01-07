// import { makeStyles } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import { useEffect, useState } from "react";
export default function BoxUsers() {
  const [users, setUsers] = useState();

  const getData = () => {
    axios
      .get("https://8q5u5wvjrc.execute-api.us-east-1.amazonaws.com/getusers")
      .then((res) => setUsers(res.data))
      .catch((e) => console.error(e));
  };
  // const useStyles = makeStyles({
  //   root: {},
  // });

  useEffect(() => {
    return getData();
  }, []);

  return (
    <>
      {users &&
        users.map((user) => (
          <Box key={user._id} sx={{ display: "flex", flexDirection: "column" }}>
            <h3>{user.name}</h3>
            <div>
              <h4>{user.email}</h4>
              <h4>{user.phonenumber}</h4>
            </div>
            <h4>{user.address}</h4>
          </Box>
        ))}
    </>
  );
}
