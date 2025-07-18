import {
  Button,
  FormControlLabel,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useState } from "react";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { registerUserAction } from "../../redux/auth/auth.action";

const initialValues = { firstName: "", lastName : "", email: "", password: "", gender: "male" };
const validationSchema = {
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
};

export default function Register() {
  const [formValue, setFormValue] = useState({});

  const [gender, setGender] = useState("male");
  const dispatch = useDispatch();

  const handleSubmit = (values) => {
    values.gender = gender;
    dispatch(registerUserAction(values));
    setFormValue(values);
    console.log("Form submitted with values:", values);
  };

  const handleChange = (event) => {
    setGender(event.target.value);
  }

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
                name="firstName"
                placeholder="First Name"
                type="text"
                variant="outlined"
                fullWidth
              />
              <ErrorMessage
                name="firstName"
                component="div"
                className="text-red-500"
              />
            </div>
            <div>
              <Field
                as={TextField}
                name="lastName"
                placeholder="Last Name"
                type="text"
                variant="outlined"
                fullWidth
              />
              <ErrorMessage
                name="lastName"
                component="div"
                className="text-red-500"
              />
            </div>
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
            <RadioGroup
              aria-label="Gender"
              defaultValue="male"
              name="gender"
              row 
              onChange={handleChange}>
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
              />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
            </RadioGroup>
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
