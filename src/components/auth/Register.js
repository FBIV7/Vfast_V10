import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {Redirect} from 'react-router-dom'
import { register } from "../../actions/auth";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";


const Register = ({ register,isAuthenticated}) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmpassword: "",
  });
  //  const [isLoggedIn,setisLoggedIn] = useState('false')

  const { name, email, password, confirmpassword } = formData;
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
 
  const onSubmit = async (e) => {
    e.preventDefault();
    //meaasge
   register({ name, email, password, confirmpassword });
  // //  setisLoggedIn(true)
  // //  if(isLoggedIn) {
  //   return <Redirect to="/Dashboard" />;

  // //  }
  
  };
  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

 

  // useEffect(() => {
  //   return {
  //   if(localStorage.getItem('token'))
  //   {
  //      <Redirect to='/dashboard'/>
  //   }
  // }
  // }, [onSubmit]
  // )

  return (
    <div class="h-screen w-screen styleBack">
      <div class="flex flex-col items-center flex-1 h-full justify-center px-4 sm:px-0">
        <div
          class="flex rounded-lg shadow-lg w-full sm:w-3/4 lg:w-1/2 bg-white sm:mx-0"
          style={{ height: "500px" }}
        >
          <div class="flex flex-col w-full md:w-1/2 p-4">
            <div class="flex flex-col flex-1 justify-center mb-8">
              <img
                className="mx-auto"
                src="/assets/VFast.png"
                alt="vfastLogo"
                width="110px"
              ></img>

              <h1 class="text-4xl text-center  font-semibold">
                WELCOME BACK!..
              </h1>
              <div class="w-full mt-4">
                <form
                  class="form-horizontal w-3/4 mx-auto"
                  method="POST"
                  action="#"
                  onSubmit={(e) => onSubmit(e)}
                >
                  <div class="flex flex-col mt-4">
                    <input
                      id="name"
                      type="text"
                      class="flex-grow h-8 px-2 border rounded border-grey-400"
                      name="name"
                      placeholder="Name"
                      onChange={(e) => onChange(e)}
                    />
                  </div>
                  <div class="flex flex-col mt-4">
                    <input
                      id="email"
                      type="text"
                      class="flex-grow h-8 px-2 border rounded border-grey-400"
                      name="email"
                      placeholder="Email"
                      onChange={(e) => onChange(e)}
                    />
                  </div>
                  <div class="flex flex-col mt-4">
                    <input
                      id="password"
                      type="password"
                      class="flex-grow h-8 px-2 rounded border border-grey-400"
                      name="password"
                      required
                      minLength="6"
                      placeholder="Password"
                      onChange={(e) => onChange(e)}
                    />
                  </div>
                  <div class="flex flex-col mt-4">
                    <input
                      id="confirmpassword"
                      type="password"
                      class="flex-grow h-8 px-2 rounded border border-grey-400"
                      name="confirmpassword"
                      required
                      minLength="6"
                      placeholder="Confirm Password"
                      onChange={(e) => onChange(e)}
                    />
                  </div>
                  <div class="flex items-center mt-4">
                    <input
                      type="checkbox"
                      name="remember"
                      id="remember"
                      class="mr-2"
                    />{" "}
                    <label for="remember" class="text-sm text-grey-dark">
                      Remember Me
                    </label>
                  </div>

                  <div class="flex flex-col mt-8">
                    <button
                      type="submit"
                      class="bg-blue-500 hover:bg-blue-700 text-white text-sm font-semibold py-2 px-4 rounded"
                    >
                      Signup
                    </button>
                  </div>
                </form>

                <div class="text-center mt-4">
                  <Link
                    class="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                    to="/login"
                  >
                    Already have an account? Login!
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div class="hidden md:block md:w-1/2 rounded-r-lg Siginimage"></div>
        </div>
      </div>
    </div>
  );
};

Register.propTypes = {
  register: PropTypes.func.isRequired,
};


export default connect(mapStateToProps, { register })(Register);
