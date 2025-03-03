import bk from "../assets/Nature.gif";

const Code = () => {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-4 bg-fixed bg-center bg-cover w-full"
    >
      {/* Form Container */}
      <div className="relative w-full h-full flex flex-col lg:flex-row items-center justify-evenly bg-fixed bg-cover bg-center lg:mt-20 mt-64 p-4 space-y-8 lg:space-y-0 lg:space-x-8">
        <div className="bg-white flex-1 p-8 rounded-2xl shadow-2xl border border-gray-300 mb-8 lg:mb-0 max-w-lg">
          <h1 className="text-center text-3xl font-extrabold mb-6 text-gray-800">📜 Rules & Guidelines</h1>
          <ul className="text-gray-700 list-decimal list-inside space-y-3 text-lg leading-relaxed">
          <h1 className=" text-xl font-extrabold mb-6 text-gray-800">Instructions to be followed:</h1>
         <li>Individual participants only.</li>
         <h1 className=" text-xl font-extrabold mb-6 text-gray-800">1.Preliminary Round</h1>
         <li>Participants will answer 10 multiple-choice questions (MCQs) based on programming concepts (Python, Java, and C).</li>
         <li>Time allotted: 20 minutes.</li>
         <li>The 7 top-performing participants will qualify for the next round.</li>
         <h1 className=" text-xl font-extrabold mb-6 text-gray-800">2. Mains Round</h1>
         <li>Participants will be given problem statements to solve using their preferred programming language (Python, Java, or C).</li>
         <li>Time allotted: 40 minutes.</li>
         <li>Solutions will be evaluated based on accuracy, efficiency, Timing, and code quality.</li>
         <h1 className=" text-xl font-extrabold mb-6 text-gray-800">General Rules:</h1>
         <li>The use of external resources and tab-switching is strictly prohibited.</li>
         <li>Any form of malpractice will lead to immediate disqualification.</li>
         </ul>
          <h2 className="text-xl mt-20">Contact For Further Details:</h2>
          <h2 className="text-xl mt-5">Name: V.Dhivya</h2>
          <h2 className="text-xl mt-2">Contact No: +91 8903376835</h2>
          <h2 className="text-xl mt-5">Name: G.Sharmila</h2>
          <h2 className="text-xl mt-2">Contact No: +91 7305547675</h2>
          


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
