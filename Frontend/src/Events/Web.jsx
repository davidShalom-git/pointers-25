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
            <li>Late submissions will not be accepted.</li>
            <li>Copied content will result in immediate disqualification.</li>
            <li>Use of the internet is prohibited.</li>
            <li>The judges' decisions are final and binding.</li>
            <li>Strictly prohibited from including external website links in their portfolios.</li>
            <li>All content must be original and self-contained within the provided format.</li>
            <li>The assets will be provided before hand.</li>
            <li>Participants must create their portfolios using only HTML and CSS.</li>
          </ul>

          {/* Button to Navigate to Google Form */}
          <div className="text-center mt-8">
            <a href="https://forms.gle/HwwfL6YbkFuY44aR6" target="_blank" rel="noopener noreferrer">
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
