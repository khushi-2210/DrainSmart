import { useState } from "react";

const AuthForm = ({ role, onAuthSuccess }) => {
  const [mode, setMode] = useState("signin"); // signin | signup
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Mock auth (replace with backend later)
    if (email && password && (mode === "signin" || name)) {
      onAuthSuccess();
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded-xl border border-gray-200 shadow-lg">
      {/* Heading */}
      <h2 className="text-2xl font-bold text-gray-900 text-center mb-1">
        {mode === "signin" ? "Sign In" : "Sign Up"} as {role}
      </h2>

      <p className="text-sm text-gray-600 text-center mb-6">
        {mode === "signin"
          ? "Access your dashboard"
          : "Create a new account"}
      </p>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        {mode === "signup" && (
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-3 rounded-lg border border-gray-300
                       text-gray-900 placeholder-gray-400
                       focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        )}

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-3 rounded-lg border border-gray-300
                     text-gray-900 placeholder-gray-400
                     focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-3 rounded-lg border border-gray-300
                     text-gray-900 placeholder-gray-400
                     focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700
                     text-white py-3 rounded-lg font-semibold transition"
        >
          {mode === "signin" ? "Sign In" : "Sign Up"}
        </button>
      </form>

      {/* Toggle */}
      <div className="text-center mt-4 text-sm text-gray-500">
        {mode === "signin" ? (
          <>
            Don’t have an account?{" "}
            <button
              onClick={() => setMode("signup")}
              className="text-blue-600 hover:underline font-medium"
            >
              Sign Up
            </button>
          </>
        ) : (
          <>
            Already have an account?{" "}
            <button
              onClick={() => setMode("signin")}
              className="text-blue-600 hover:underline font-medium"
            >
              Sign In
            </button>
          </>
        )}
      </div>

      {/* Footer note */}
      <p className="text-xs text-gray-400 text-center mt-4">
        * Mock authentication for demo
      </p>
    </div>
  );
};

export default AuthForm;

