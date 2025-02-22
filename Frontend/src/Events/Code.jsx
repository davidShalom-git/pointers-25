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
            <li>Individual participants only.</li>
            <li>Accepted languages: C++, Python, Java.</li>
            <li>Buggy code will be provided with each problem description.</li>
            <li>Participants will be penalized for writing their own solution to the given problem. You need to fix the given code and then submit it.</li>
            <li>Preliminary Round: Each participant will be given a set of 10 buggy codes with some syntactical errors.</li>
            <li>Preliminary Round: Points will be awarded for debugging each error.</li>
            <li>Preliminary Round: Duration is 30 minutes.</li>
            <li>Preliminary Round: Only the top 7 participants will be selected for the final round.</li>
            <li>Final Round: A set of 2 questions will be given to each candidate.</li>
            <li>Final Round: The top 3 winners will be awarded exciting cash prizes.</li>
          </ul>

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
