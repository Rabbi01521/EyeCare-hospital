import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <div className="flex pt-20 flex-col items-center justify-center bg-gray-300 h-screen select-none">
        <div className="flex flex-col -mt-32 bg-white px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-xl shadow-2xl w-full max-w-md  border-l-4 border-indigo-600">
          <div className="font-medium self-center text-xl sm:text-2xl uppercase w-60 text-center bg-indigo-600 shadow-2xl p-6 rounded-full text-white">
            Sign In
          </div>
          <form
            //   onSubmit={handleLogin}
            className="mt-10"
          >
            <div>
              <div className="relative w-full mb-3">
                <input
                  //   onBlur={handleEmail}
                  type="email"
                  name="email"
                  className="border-0 p-4 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                  placeholder="Email"
                  style={{ transition: "all 0.15s ease 0s" }}
                />
                {/* <small className="p-2 text-red-500">{error}</small> */}
              </div>
              <div className="relative w-full mb-3">
                <input
                  //   onBlur={handlePassword}
                  type="password"
                  name="password"
                  className="border-0 p-4 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                  placeholder="Password"
                  style={{ transition: "all 0.15s ease 0s" }}
                />
                {/* <small className="p-2 text-red-500">{error}</small> */}
              </div>
              <div className="text-center mt-6">
                <input
                  type="submit"
                  name="signin"
                  id="signin"
                  value="Sign In"
                  className="p-3 rounded-lg bg-indigo-600 outline-none text-white shadow w-32 justify-center focus:bg-red-700 hover:bg-red-500"
                />
              </div>
              <div className="my-4">
                <div>
                  <div>
                    <div className="flex flex-wrap justify-center gap-2">
                      <button className="bg-blue-500 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
                        <svg
                          className="w-5 h-5 fill-current"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                        >
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                        </svg>
                      </button>

                      <button
                        // onClick={handleGithubSignIn}
                        className="bg-gray-700 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          role="img"
                          className="w-5"
                          preserveAspectRatio="xMidYMid meet"
                          viewBox="0 0 24 24"
                        >
                          <g fill="none">
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385c.6.105.825-.255.825-.57c0-.285-.015-1.23-.015-2.235c-3.015.555-3.795-.735-4.035-1.41c-.135-.345-.72-1.41-1.23-1.695c-.42-.225-1.02-.78-.015-.795c.945-.015 1.62.87 1.845 1.23c1.08 1.815 2.805 1.305 3.495.99c.105-.78.42-1.305.765-1.605c-2.67-.3-5.46-1.335-5.46-5.925c0-1.305.465-2.385 1.23-3.225c-.12-.3-.54-1.53.12-3.18c0 0 1.005-.315 3.3 1.23c.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23c.66 1.65.24 2.88.12 3.18c.765.84 1.23 1.905 1.23 3.225c0 4.605-2.805 5.625-5.475 5.925c.435.375.81 1.095.81 2.22c0 1.605-.015 2.895-.015 3.3c0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"
                              fill="currentColor"
                            />
                          </g>
                        </svg>
                      </button>

                      <button
                        // onClick={handleGoogleSignIn}
                        className="bg-red-500 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          role="img"
                          className="w-5"
                          preserveAspectRatio="xMidYMid meet"
                          viewBox="0 0 24 24"
                        >
                          <g fill="none">
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M12 0C5.372 0 0 5.373 0 12s5.372 12 12 12c6.627 0 12-5.373 12-12S18.627 0 12 0zm.14 19.018c-3.868 0-7-3.14-7-7.018c0-3.878 3.132-7.018 7-7.018c1.89 0 3.47.697 4.682 1.829l-1.974 1.978v-.004c-.735-.702-1.667-1.062-2.708-1.062c-2.31 0-4.187 1.956-4.187 4.273c0 2.315 1.877 4.277 4.187 4.277c2.096 0 3.522-1.202 3.816-2.852H12.14v-2.737h6.585c.088.47.135.96.135 1.474c0 4.01-2.677 6.86-6.72 6.86z"
                              fill="currentColor"
                            />
                          </g>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap mt-6">
                <div className="w-1/2 text-left">
                  <Link to="/" className="text-blue-900 text-xl">
                    <small>Forgot password?</small>
                  </Link>
                </div>
                <div className="w-1/2 text-right">
                  <Link to="/signup" className="text-blue-900 text-xl">
                    <small>Sign up</small>
                  </Link>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
