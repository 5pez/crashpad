import React from "react";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const isEnabled = email.length > 0 && password.length > 0;
  const userObject = {
    email: email,
    password: password,
  };
  return (
    <div>
      <h1 class="flex justify-center font-bold text-gray-800 text-2xl py-4">
        Login
      </h1>
      <div class="flex justify-center h-screen">
        <form
          class="w-full max-w-lg"
          onSubmit={(e) => {
            e.preventDefault();
            axios.post("/users/login", userObject).then((res) => {
              console.log(res);
              window.location.href = "/";
            });
          }}
        >
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="email"
          >
            Email
          </label>
          <input
            id="email"
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white"
            type="text"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="password"
          >
            Password
          </label>
          <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="password"
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            disabled={!isEnabled}
            class="w-full bg-yellow-500 rounded mt-6 px-24 py-4 text-lg font-semibold text-white mr-1 focus:ring-4 focus:ring-yellow-300 focus:ring-inset"
            type="submit"
            ///TODO: fix if required forms are not filled out
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
