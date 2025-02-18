import { useState } from "react";
import bk from "../assets/Nature.gif";
import axios from "axios";

const Code = () => {
  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    Phone_No: "",
    College: "",
    Accommodation: "" // Added field for radio button
  });

  const [isRegistered, setIsRegistered] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");

    if (!formData.Accommodation) {
      setErrorMessage("Please select an accommodation option.");
      return;
    }

    try {
      const response = await axios.post("https://pointers.onrender.com/api/cse/ppt", formData);
      console.log("Registration Successful:", response.data);

      setIsRegistered(true);
      setFormData({ Name: "", Email: "", Phone_No: "", College: "", Accommodation: "" });
    } catch (error) {
      console.error("Registration Failed:", error);
      setErrorMessage("Participant can only register for one event");
    }
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-4 bg-fixed bg-center bg-cover w-full"
      style={{ backgroundImage: `url(${bk})` }}
    >
      {/* Form Container */}
      <div className="relative w-full h-full flex flex-col lg:flex-row items-center justify-evenly bg-fixed bg-cover bg-center lg:mt-20 mt-64 p-4 space-y-8 lg:space-y-0 lg:space-x-8">
        <div className="bg-white flex-1 p-8 rounded-lg shadow-lg border border-gray-300 mb-8 lg:mb-0">
          <h1 className="text-center text-2xl font-bold mb-4">Rules</h1>
          <ul className="text-gray-700 list-decimal list-inside space-y-4">
            <li>Participants must submit their research papers before the deadline.</li>
            <li>Papers must be original and unpublished elsewhere.</li>
            <li>Each paper should relate to the given topics.</li>
            <li>The decision of the judges is final and binding.</li>
            <li>Plagiarism should be below 10-15%, with proper citations.</li>
            <li>Teams should have 3 to 4 participants.</li>
            <li>Each participant gets 8-10 minutes to present their paper.</li>
          </ul>
        </div>

        <div className="max-w-full flex-1 w-full mb-20 p-8 rounded-lg shadow-lg" style={{
          background: "rgba(255, 255, 255, 0.1)",
          backdropFilter: "blur(15px)",
          borderRadius: "12px",
          border: "1px solid rgba(255, 255, 255, 0.3)",
          boxShadow: "0 4px 6px rgba(255, 255, 255, 0.1)",
          padding: "2rem",
          color: "white"
        }}>
          <h2 className="text-2xl font-bold text-center mb-6 text-white">Registration</h2>

          {isRegistered ? (
            <p className="text-center text-green-400 font-bold text-lg">🎉 Registration Successful! 🎉</p>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-300">Name</label>
                <input
                  type="text"
                  value={formData.Name}
                  onChange={(e) => setFormData({ ...formData, Name: e.target.value })}
                  className="w-full p-2 border border-gray-300 rounded mt-1 bg-transparent text-white"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-300">Email</label>
                <input
                  type="email"
                  value={formData.Email}
                  onChange={(e) => setFormData({ ...formData, Email: e.target.value })}
                  className="w-full p-2 border border-gray-300 rounded mt-1 bg-transparent text-white"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-300">Mobile No</label>
                <input
                  type="tel"
                  value={formData.Phone_No}
                  onChange={(e) => setFormData({ ...formData, Phone_No: e.target.value })}
                  className="w-full p-2 border border-gray-300 rounded mt-1 bg-transparent text-white"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-300">College</label>
                <input
                  type="text"
                  value={formData.College}
                  onChange={(e) => setFormData({ ...formData, College: e.target.value })}
                  className="w-full p-2 border border-gray-300 rounded mt-1 bg-transparent text-white"
                  required
                />
              </div>

              {/* Accommodation Radio Buttons */}
              <div className="mb-4">
                <label className="block text-gray-300">Accommodation</label>
                <div className="flex space-x-4 mt-2">
                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="Accommodation"
                      value="With Accommodation"
                      checked={formData.Accommodation === "With Accommodation"}
                      onChange={(e) => setFormData({ ...formData, Accommodation: e.target.value })}
                      className="w-5 h-5"
                      required
                    />
                    <span className="text-white">With Accommodation</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="Accommodation"
                      value="Without Accommodation"
                      checked={formData.Accommodation === "Without Accommodation"}
                      onChange={(e) => setFormData({ ...formData, Accommodation: e.target.value })}
                      className="w-5 h-5"
                      required
                    />
                    <span className="text-white">Without Accommodation</span>
                  </label>
                </div>
              </div>

              {errorMessage && <p className="text-red-400 text-center mb-4">{errorMessage}</p>}

              <div className="flex flex-col lg:flex-row justify-center space-y-4 lg:space-y-0 lg:space-x-4">
                <button type="submit" className="relative group border-2 px-10 py-2 rounded-xl border-white text-white font-bold text-lg transition-all hover:bg-white hover:text-black">
                  Register
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Code;
