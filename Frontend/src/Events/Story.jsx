import bk from "../assets/Nature.gif";

const Code = () => {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-4 bg-fixed bg-center bg-cover w-full"
      style={{ backgroundImage: `url(${bk})` }}
    >
      {/* Form Container */}
      <div className="relative w-full h-full flex flex-col lg:flex-row items-center justify-evenly bg-fixed bg-cover bg-center lg:mt-20 mt-20 p-4 space-y-8 lg:space-y-0 lg:space-x-8">
        <div className="bg-white flex-1 p-8 rounded-2xl shadow-2xl border border-gray-300 mb-8 lg:mb-0 max-w-lg">
          <h1 className="text-center text-3xl font-extrabold mb-6 text-gray-800">📜 Rules & Guidelines</h1>
          <ul className="text-gray-700 list-decimal list-inside space-y-3 text-lg leading-relaxed">
            <p className="text-bold text-xl">Description</p>
            <p className="text-bold mb-10">Every great tale begins with a single idea just like that Story building is all about crafting compelling characters, exciting plots, and immersive worlds</p>
            <p className="text-bold text-xl">Pictures</p>
            <p className="text-bold mb-10">It is a visual puzzle or game where participants are shown a series of images and must identify the common theme, word, phrase, or concept that links them together. It helps to think the participants outside the box and make logical or creative associations between different pictures. </p>
            <p className="text-bold text-xl">Spin Wheel</p>
            <p className="text-bold mb-10">A wheel is divided into sections with different options, and writers spin it to determine aspects of their story. </p>
            <li>There are 2 Rounds in this event</li>
            <li>A Team Should has 2 Members</li>
            <li>Each Team Carries 4 Minutes</li>
            <li>Electronic Devices are Not Allowed</li>
            <li>Teams should have 3 to 4 participants.</li>
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
