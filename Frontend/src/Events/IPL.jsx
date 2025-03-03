import bk from "../assets/Nature.gif";

const Code = () => {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-4 bg-fixed bg-center bg-cover w-full"
    >
      {/* Form Container */}
      <div className="relative w-full h-full flex flex-col lg:flex-row items-center justify-evenly bg-fixed bg-cover bg-center lg:mt-20 mt-64 p-4 space-y-8 lg:space-y-0 lg:space-x-8">
        <div className="bg-white flex-1 p-8 rounded-2xl shadow-2xl border border-gray-300 mb-8 lg:mb-0 max-w-lg ">
          <h1 className="text-center text-3xl font-extrabold mb-6 text-gray-800">📜 Rules & Guidelines</h1>
          <ul className="text-gray-700 list-decimal list-inside space-y-3 text-lg leading-relaxed">
          <h1 className=" text-xl font-extrabold mb-6 text-gray-800">Game Description.</h1>
          <p>Get ready for a game of misheard words, hilarious guesses, and lots of laughter! One person will wear noise-canceling headphones with loud music playing, while another says a phrase out loud. The person wearing the headphones must try to read the speaker's lips and guess what they are saying.</p>
          <h1 className=" text-xl font-extrabold mb-6 text-gray-800">General Rules:</h1>
         <li>A team should contain 2 members</li>
         <li>Phones and other electronic devices are not allowed.</li>
         <li>This event consists of three rounds.</li>
         <li>Each round consists of 6 to 8 questions (except for the 3rd round).</li>
         <li>Winners are decided based on the answers given within the time limit.</li>
          <h1 className=" text-xl font-extrabold mb-6 text-gray-800">Round 1:</h1>
         <li>This round is about guessing the word or a phrase.</li>
         <li>Hand gestures and pointing out objects are not allowed..</li>
         <li>This round carries 6-8 questions..</li>
          <h1 className=" text-xl font-extrabold mb-6 text-gray-800">Round 2:</h1>
         <li>This round is about identifying the BGM or songs..</li>
         <li>Actions are allowed, but lip-syncing is not permitted...</li>
         <li>This round carries 6-8 questions...</li>
          <h1 className=" text-xl font-extrabold mb-6 text-gray-800">Round 3:</h1>
         <li>This round is about guessing the lyrics in between the songs.</li>

        
          </ul>

          <h2 className="text-xl mt-20">Contact For Further Details:</h2>
       
          <h2 className="text-xl mt-2">Contact No: +91 9345190189</h2>
         
          <h2 className="text-xl mt-2">Contact No: +91 8778234617</h2>
          


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
