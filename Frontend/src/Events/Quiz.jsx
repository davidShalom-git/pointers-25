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
            <li>Participants must Register before the event starts. Late Entries will not be Entertained.</li>
            <li>The Quiz will be Conducted in multiple rounds (3 to 4 rounds)</li>
            <li>Each Round will have a fixed time limit, and participants must submit their answers within the given time.</li>
            <li>In Each round, only top-scoring contestants will proceed to the next stage. (Each round has elimination).</li>
            <li>The quiz will be conducted in teams of two members, depending on event guidelines. (Per team should have 2 Members).</li>
            <li>Use of Mobile phone or other digital device is strictly prohibited.</li>
            <li>Any attempt to cheat, such as consulting sources or copying answers, will lead to immediate disqualification.</li>
            <li>Winners will be awarded cash prizes as per guidelines</li>
            <li>Participation Certificates will be given to all Contestants.</li>
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
