import { useRef } from "react";

const App = () => {

  const inputRef = useRef({});
  

  const submitHandler = (e) => {
    e.preventDefault();

    console.log(inputRef.current.name.value)
    console.log(inputRef.current.email.value)
    console.log(inputRef.current.password.value)
    console.log(inputRef.current.message.value)

  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-5">

      <form 
      onSubmit={submitHandler}
      className="bg-white w-full max-w-md p-6 rounded-2xl shadow-lg space-y-5">

        <h1 className="text-3xl font-bold text-center text-gray-800">
          Contact Form
        </h1>

        {/* Name */}
        <div>
          <label className="block mb-2 text-gray-700 font-medium">
            Name
          </label>
          <input
          ref={(e) => inputRef.current.name = e}
            type="text"
            placeholder="Enter your name"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block mb-2 text-gray-700 font-medium">
            Email
          </label>
          <input
          ref={(e) => inputRef.current.email = e}
            type="email"
            placeholder="Enter your email"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Password */}
        <div>
          <label className="block mb-2 text-gray-700 font-medium">
            Password
          </label>
          <input
          ref={(e) => inputRef.current.password = e}
            type="password"
            placeholder="Enter your password"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Message */}
        <div>
          <label className="block mb-2 text-gray-700 font-medium">
            Message
          </label>
          <textarea
          ref={(e) => inputRef.current.message = e}
            rows="4"
            placeholder="Enter your message"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500 resize-none"
          ></textarea>
        </div>

        {/* Submit Button */}
        <button className="w-full bg-blue-600 hover:bg-blue-700 active:scale-98 text-white py-2 rounded-lg font-semibold transition">
          Submit
        </button>

      </form>

    </div>
  );
};

export default App;