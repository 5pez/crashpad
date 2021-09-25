import React from "react";
import axios from "axios";

const Register = () => {
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [userType, setUserType] = React.useState("");
  const isEnabled = email.length > 0 && password.length > 0;
  const userObject = {
    first_name: firstName,
    last_name: lastName,
    email: email,
    password: password,
  };
  return (
    <>
      <h1 class="flex justify-center font-bold text-gray-800 text-2xl py-4">
        Register
      </h1>
      <div class="flex justify-center h-screen">
        <form
          class="w-full max-w-lg"
          onSubmit={(e) => {
            e.preventDefault();
            axios
              .post("https://api.crashpad.dev/users", userObject)
              .then((res) => {
                alert(
                  `Thanks for registering, ${res.data.first_name}!\nYou can now login with these credentials.`
                );
                console.log(res);
              })
              .catch((err) => {
                alert(`Account with ${email} already exists.`);
              });
          }}
        >
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-first-name"
              >
                First Name
              </label>
              <input
                required
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="text"
                placeholder="Jane"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div class="w-full md:w-1/2 px-3">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-last-name"
              >
                Last Name
              </label>
              <input
                required
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                type="text"
                placeholder="Doe"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
          </div>
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full px-3">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-email"
              >
                Email
              </label>
              <input
                required
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-email"
                type="email"
                placeholder="email@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div class="flex flex-wrap -mx-3 mb-0">
            <div class="w-full px-3">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-password"
              >
                Password
              </label>
              <input
                required
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-password"
                type="password"
                placeholder="******************"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <p class="text-gray-600 text-xs italic">
                Make it as long and as crazy as you'd like
              </p>
            </div>
          </div>

          <div class="inline-block relative w-full">
            <select
              required
              class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-4 pr-8 mt-6 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
              value={userType}
              onChange={(e) => setUserType(e.target.value)}
            >
              <option>Will you be renting or hosting?</option>
              <option value="renter">I will be renting</option>
              <option value="host">I will be hosting</option>
            </select>
            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                class="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
          <div class="w-full md:w-full px-3 mb-6 md:mb-0 py-8">
            <button
              disabled={!isEnabled}
              type="submit"
              class="w-full bg-yellow-500 rounded px-24 py-4 text-lg font-semibold text-white mr-1 focus:ring-4 focus:ring-yellow-300 focus:ring-inset"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Register;
