import { Button } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import { useEffect, useState } from "react";
import "../ListUsers/ListUsers.scss";
import { useNavigate } from "react-router-dom";

export default function BoxUsers() {
  const [users, setUsers] = useState();
  let history = useNavigate();
  const getData = () => {
    axios
      .get("https://8q5u5wvjrc.execute-api.us-east-1.amazonaws.com/getusers")
      .then((res) => setUsers(res.data))
      .catch((e) => console.error(e));
  };
  // const useStyles = makeStyles({
  //   root: {
  //     color: "#6200ee",
  //     "font-size": "1rem",
  //     "border-color": "#c3c3c3",
  //   },
  // });
  // const classes = useStyles();
  useEffect(() => {
    return getData();
  }, []);

  return (
    <>
      {users &&
        users.map((user) => {
          let users = JSON.parse(user.body);
          return users ? (
            [users].map((user) => (
              <Box
                className="listusers"
                key={user._id}
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  borderBottom: "1px solid silver",
                }}
              >
                <div className="listusers__infoContainer">
                  <span className="listusers__infoName">{user.name}</span>
                  <div>
                    <span className="listusers__info">{user.email} | </span>
                    <span className="listusers__info">{user.phonenumber}</span>
                  </div>
                  <span className="listusers__info">{user.address}</span>
                </div>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <Box className="listusers__btnContainer">
                    <Button
                      onClick={() => history("/")}
                      sx={{
                        color: "#6200ee",
                        fontSize: "1rem",
                        borderColor: "#c3c3c3",
                        "&:hover": {
                          borderColor: "#6200ee",
                        },
                      }}
                      variant="outlined"
                    >
                      EDIT
                    </Button>
                  </Box>
                  <Box className="listusers__btnContainer">
                    <Button
                      sx={{
                        color: "#6200ee",
                        fontSize: "1rem",
                        borderColor: "#c3c3c3",
                        "&:hover": {
                          borderColor: "#6200ee",
                        },
                      }}
                      variant="outlined"
                    >
                      DELETE
                    </Button>
                  </Box>
                </Box>
              </Box>
            ))
          ) : (
            <h2>No Users Exist!</h2>
          );
        })}
    </>
  );
}
