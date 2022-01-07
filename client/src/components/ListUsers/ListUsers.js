// import { makeStyles } from "@mui/material";
import { Button } from "@mui/material";
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
        users.map((user) => {
          let userArr = JSON.parse(user.body);
          return [userArr].map((user) => (
            <Box
              key={user._id}
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div>
                <h4 className="listusers__title">{user.name}</h4>
                <div>
                  <span>{user.email}</span> | <span>{user.phonenumber}</span>
                </div>
                <h4>{user.address}</h4>
              </div>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Button variant="outlined">EDIT</Button>
                <Button variant="outlined">DELETE</Button>
              </Box>
            </Box>
          ));
        })}
    </>
  );
}
