import { Button, TextField } from "@mui/material";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useState } from "react";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { loginUserAction } from "../../redux/auth/auth.action";

const initialValues = { email: "", password: "" };
const validationSchema = {
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
};

export default function Login() {
  const [formValue, setFormValue] = useState({});
  const dispatch = useDispatch();

  const handleSubmit = (values) => {
    dispatch(loginUserAction(values));
  };

  return (
    <>
      <Formik
        onSubmit={handleSubmit}
        initialValues={initialValues}
        // validationSchema={validationSchema}
      >
        <Form className="space-y-5">
          <div className="space-y-5">
            <div>
              <Field
                as={TextField}
                name="email"
                placeholder="Email"
                type="email"
                variant="outlined"
                fullWidth
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500"
              />
            </div>
            <div>
              <Field
                as={TextField}
                name="password"
                placeholder="Password"
                type="password"
                variant="outlined"
                fullWidth
              />
              <ErrorMessage
                name="password"
                component="div"
                className="text-red-500"
              />
            </div>
          </div>
          <Button
            sx={{ padding: ".8rem , 0rem" }}
            fullWidth
            variant="contained"
            type="submit"
            color="primary">
            Login
          </Button>
        </Form>
      </Formik>
    </>
  );
}
