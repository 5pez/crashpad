import React from "react";
import axios from "axios";

const Login = () => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const isEnabled = username.length > 0 && password.length > 0;
  const userObject = {
    identifier: username,
    password: password,
  };
  return (
    <div>
      <h1 className="flex justify-center font-bold text-gray-800 text-2xl py-4">
        Login
      </h1>
      <div className="flex justify-center h-screen">
        <form
          className="w-full max-w-lg"
          onSubmit={(e) => {
            e.preventDefault();
            axios
              // .post("https://api.crashpad.dev/auth/local", userObject)
              .post("http://localhost:1337/auth/local", userObject)
              .then((res) => {
                alert(`Welcome, ${res.data.user.first_name}`);
                console.log(res);
              })
              .catch((err) => {
                alert("Account doesn't exist. Please register first.");
                console.log(err);
              });
          }}
        >
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="username"
          >
            Username
          </label>
          <input
            id="username"
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white"
            type="text"
            name="username"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="password"
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            disabled={!isEnabled}
            className="w-full bg-yellow-500 rounded mt-6 px-24 py-4 text-lg font-semibold text-white mr-1 focus:ring-4 focus:ring-yellow-300 focus:ring-inset"
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
