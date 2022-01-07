import { useForm } from "react-hook-form";
import TextField from "@mui/material/TextField";
import { Container } from "@mui/material";
import { Button } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => postData(data);

  const postData = async (data) => {
    await axios
      .post(
        "https://uji2wogmxb.execute-api.us-east-1.amazonaws.com/createUser",
        data
      )
      .then((res) => console.log(res.data))
      .catch((e) => console.error(e));
  };
  const onClickDelete = () => {};

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Container maxWidth="xs">
          <Box mb={2} mt={14}>
            <TextField
              label="Name"
              variant="outlined"
              color="secondary"
              placeholder="Name"
              fullWidth
              {...register("name", {
                required: "Please Enter Your Name",
                maxLength: 20,
              })}
              error={!!errors?.name}
              helperText={errors?.name ? errors.name.message : null}
            />
          </Box>

          <Box mb={2} mt={2}>
            <TextField
              label="Email"
              variant="outlined"
              color="secondary"
              placeholder="Email"
              autoComplete="email"
              autoFocus
              fullWidth
              {...register("email", {
                required: "Please Enter Your Email",
                pattern: {
                  value: /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/,
                  message: "Please Enter A Valid Email Address",
                },
                maxLength: 20,
              })}
              error={!!errors?.email}
              helperText={errors?.email ? errors.email.message : null}
            />
          </Box>

          <Box mb={2} mt={2}>
            <TextField
              label="Phone Number"
              variant="outlined"
              color="secondary"
              fullWidth
              placeholder="Phone Number"
              {...register("phonenumber", {
                required: "Please Enter Your Phone Number",
                maxLength: 20,
              })}
              error={!!errors?.phonenumber}
              helperText={
                errors?.phonenumber ? errors.phonenumber.message : null
              }
            />
          </Box>

          <Box mb={2} mt={2}>
            <TextField
              label="Address"
              variant="outlined"
              color="secondary"
              fullWidth
              placeholder="Address"
              {...register("address", {
                required: "Please Enter Your Address",
                maxLength: 20,
              })}
              error={!!errors?.address}
              helperText={errors?.address ? errors.address.message : null}
            />
          </Box>
        </Container>

        <Button
          variant="contained"
          color="secondary"
          type="submit"
          size="small"
        >
          Save
        </Button>
        <Button
          variant="contained"
          color="secondary"
          size="small"
          onClick={onClickDelete}
        >
          Delete
        </Button>
      </form>
    </>
  );
}
