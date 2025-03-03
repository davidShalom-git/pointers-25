import bk from "../assets/Nature.gif";

const Code = () => {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-4 bg-fixed bg-center bg-cover w-full"
  
    >
      {/* Form Container */}
      <div className="relative w-full h-full flex flex-col lg:flex-row items-center justify-evenly bg-fixed bg-cover bg-center lg:mt-20 mt-20 p-4 space-y-8 lg:space-y-0 lg:space-x-8">
        <div className="bg-white flex-1 p-8 rounded-2xl shadow-2xl border border-gray-300 mb-8 lg:mb-0 max-w-lg w-full">
          <h1 className="text-center text-3xl font-extrabold mb-6 text-gray-800">📜 Rules & Guidelines</h1>
          <ul className="text-gray-700 list-decimal list-inside space-y-3 text-lg leading-relaxed">
            <li>1.Movie Mania</li>
            <li>2.Cine Wheel</li>
            <li>3.Bridge Builder</li>
            <h3 className="text-center text-3xl font-bold mb-6 text-gray-800">Movie Mania</h3>
            <li>Each team is provided with a buzzer.</li>
            <li>When a team finds the movie name, they must press the buzzer and provide the correct answer.</li>
            <h3 className="text-center text-3xl font-bold mb-6 text-gray-800">Cine Wheel</h3>
            <li>Cine Wheel is a game where a spinning wheel contains different movie names</li>
            <li>Players take turns spinning the wheel in a clockwise direction.</li>
            <li>The player must spin the wheel with enough force to complete at least one full rotation.</li>
            <li>The players must find a minimum of 3 and a maximum of 5 songs from the given movie within 1 minute.</li>
            <h1 className="text-center text-3xl font-extrabold mb-6 text-gray-800 mt-5">Bridge Builder</h1>
            <li>Participants must build a story based on random pictures provided.</li>
            <h1 className=" text-xl font-bold mb-6 text-gray-800 mt-2">This round lasts 3 minutes:</h1>
            <li>2 minutes for building the story.</li>
            <li>1 minute for narrating the story.</li>
            <h1 className="text-center text-3xl font-extrabold mb-6 text-gray-800 mt-5">Rules</h1>
            <li>A team should contain a maximum of 3 participants.</li>
            <li>Mobile phones and any other electronic gadgets are strictly prohibited (except in Round 1: Movie Mania).</li>
            <li>Scores will be awarded based on team performance.</li>
          </ul>

          <h2 className="text-xl mt-20">Contact For Further Details:</h2>
        
          <h2 className="text-xl mt-2">Contact No: +91 9566115026 </h2>

          

          <h1 class="text-center mt-24 mb-10 text-xl font-extrabold ">🪪 Your College ID Card is Mandatory to attend the Events.</h1>



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
