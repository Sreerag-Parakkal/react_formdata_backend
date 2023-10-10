import React from "react";
import "./form.css";
import "bootstrap/dist/css/bootstrap.min.css";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import instance from "./axios";

function App() {
  const userSchema = yup.object().shape({
    userName: yup.string().required("Please enter Username"),
    email: yup.string().required("Please enter email"),
    password: yup.string().min(5).max(15).required("Please enter password"),
  });

  const { handleSubmit, register, formState:{errors} } = useForm({
    resolver:yupResolver(userSchema),
  });

  const formSubmit = (data) => {
    console.log(data);
    instance.post("http://localhost:4000/api/v1/userSignup",data)
  };

  return (
    <div>
      <div className="container mx-0 px-0">
        <div className="row justify-content-end">
          <div className="col-md-6 align-items-center text-white justify-content-center p-5 shadow form my-3 rounded-corner border border-dark rounded">
            <h1 className="display-6 fw-bolder mb-5">Signup</h1>
            <form onSubmit={handleSubmit(formSubmit)} method="POST">
              <div class="mb-3">
                <label for="name" class="form-label">
                  Username
                </label>
                <input
                  type="text"
                  placeholder="Username"
                  class="form-control"
                  id="name"
                  {...register("userName")}
                />
                <span className="text-danger">{errors.userName?.message}</span>
              </div>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  Email
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  placeholder="Email"
                  aria-describedby="emailHelp"
                  {...register("email")}
                />
                <span className="text-danger">{errors.email?.message}</span>
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">
                  Password
                </label>
                <input
                  type="password"
                  class="form-control"
                  placeholder="Password"
                  id="exampleInputPassword1"
                  {...register("password")}
                />
                <span className="text-danger">{errors.password?.message}</span>
              </div>
              <button
                type="submit"
                class="btn btn-outline-light w-100 mt-4 rounded-pill"
              >
                Signup
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
