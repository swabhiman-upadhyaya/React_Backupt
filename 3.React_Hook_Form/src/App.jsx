import { useForm } from "react-hook-form"


const App = () => {

  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  console.log(errors)

  const FormSubmitHandler = (e) => {
    console.log(e)

    reset()
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-5">
      <form
        onSubmit={handleSubmit(FormSubmitHandler)}
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
            {...register("name",
              {
                required: "Name is required",
                minLength: { value: 3, message: "Name must be contain 3 digits" },
                maxLength: { value: 20, message: "Name muse be less than 20 digits" }
              }
            )}
            type="text"
            placeholder="Enter your name"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
          />

          {errors.name && <p className="text-red-600">{errors.name.message}</p>}

        </div>

        {/* Email */}
        <div>
          <label className="block mb-2 text-gray-700 font-medium">
            Email
          </label>
          <input
            {...register("email",
              {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Enter a valid email address"
                }
              }
            )}
            placeholder="Enter your email"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.email && <p className="text-red-600">Enter a valid Email</p>}
        </div>

        {/* Password */}
        <div>
          <label className="block mb-2 text-gray-700 font-medium">
            Password
          </label>
          <input
            {...register("password")}
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
            {...register("message")}
            rows="4"
            placeholder="Enter your message"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500 resize-none"
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold transition">
          Submit
        </button>

      </form>
    </div >
  );
};

export default App;