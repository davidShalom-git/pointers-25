import bk from "../assets/Nature.gif";

const Code = () => {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-4 bg-fixed bg-center bg-cover w-full"
      style={{ backgroundImage: `url(${bk})` }}
    >
      {/* Form Container */}
      <div className="relative w-full h-full flex flex-col lg:flex-row items-center justify-evenly bg-fixed bg-cover bg-center lg:mt-20 mt-64 p-4 space-y-8 lg:space-y-0 lg:space-x-8">
        <div className="bg-white flex-1 p-8 rounded-2xl shadow-2xl border border-gray-300 mb-8 lg:mb-0 max-w-lg">
          <h1 className="text-center text-3xl font-extrabold mb-6 text-gray-800">📜 Rules & Guidelines</h1>
          <ul className="text-gray-700 list-decimal list-inside space-y-3 text-lg leading-relaxed">
            <li>Team Composition: Players can participate in teams (as per event rules)..</li>
            <li>Time Limit: Each round should have a fixed time limit (e.g., 60 seconds per guess).</li>
            <li>Point System: Points are awarded based on the accuracy and speed of guesses.</li>
            <li>Device Usage: Participants can or cannot use mobile phones, depending on the format (decide whether it's an open-knowledge game or restricted).</li>
            <li>Players are shown a location on Google Maps, Street View, or an image, and they must guess the exact place.</li>
            <li>Players are given hints or riddles about famous places.</li>
            <li>They must identify the location within the time limit</li>
            <li>No searching on Google (if you want a purely knowledge-based game).</li>
            <li>Accuracy of the guess (closer = more points),Time taken (faster = bonus points).</li>
          </ul>

          <h1 class="text-center mt-10 mb-10 text-xl font-extrabold">🪪 Your College ID Card is Mandatory to attend the Events.</h1>

          {/* Button to Navigate to Google Form */}
          <div className="text-center mt-8">
            <a href="https://forms.gle/g9svm2eXapaesefy7" target="_blank" rel="noopener noreferrer">
              <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold rounded-lg shadow-md hover:scale-105 transition-all duration-300">
                Register Now
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Code;
