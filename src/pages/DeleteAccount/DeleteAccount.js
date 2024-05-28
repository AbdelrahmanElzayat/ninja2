import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Ensure you import useNavigate if it's used
import MainLayouts from "../../Layouts/MainLayouts";
import Common from "../../components/commonSection/Common";
import { Helmet } from "react-helmet-async";
import { Button, Container, Form as BootstrapForm } from "react-bootstrap";
import "./DeleteAccount.css";
import { AuthContext } from "../../contextApi/AuthContext";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const DeleteAccount = () => {
  const navigate = useNavigate(); // Make sure useNavigate is used
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { Disactive } = useContext(AuthContext);

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .required("Password is required"),
  });

  const initialValues = {
    email: "",
    password: "",
  };

  const onSubmit = async (values, { setSubmitting }) => {
    try {
      const res = await Disactive({
        login: values.email,
        password: values.password,
      });
      if (res.data) {
        navigate("/", { replace: true });
      }
    } catch (error) {
      // Handle the error appropriately, e.g., show a toast message
      console.error(error);
    }
    setSubmitting(false);
  };

  return (
    <MainLayouts>
      <Common
        title="إلغاء تفعيل حسابك"
        description="اذا كان لديك اي إستفسار او تواجه اي مشكلة فلا تتردد بالتواصل معنا"
      />

      <div className="deleteAccountPage">
        <Container>
          <div className="deleteAccountContainer">
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
            >
              {({ isSubmitting }) => (
                <Form>
                  <BootstrapForm.Group className="mb-3" controlId="formBasicEmail">
                    <BootstrapForm.Label>Email address</BootstrapForm.Label>
                    <Field
                      name="email"
                      type="email"
                      as={BootstrapForm.Control}
                      placeholder="Enter email"
                    />
                    <ErrorMessage name="email" component="div" className="text-danger" />
                    <BootstrapForm.Text className="text-muted">
                      We'll never share your email with anyone else.
                    </BootstrapForm.Text>
                  </BootstrapForm.Group>
                  <BootstrapForm.Group className="mb-3" controlId="formBasicPassword">
                    <BootstrapForm.Label>Password</BootstrapForm.Label>
                    <Field
                      name="password"
                      type="password"
                      as={BootstrapForm.Control}
                      placeholder="Password"
                    />
                    <ErrorMessage name="password" component="div" className="text-danger" />
                  </BootstrapForm.Group>
                  <Button variant="danger" type="submit" disabled={isSubmitting}>
                    Disactive Account
                  </Button>
                </Form>
              )}
            </Formik>
          </div>
        </Container>
      </div>
    </MainLayouts>
  );
};

export default DeleteAccount;
