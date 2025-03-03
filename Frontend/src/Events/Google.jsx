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

          <h5 className="text-center text-xl font-bold mb-6 text-gray-800">Find the Location</h5>
            <p>Find the Location" is an exciting and interactive game that challenges players to identify a specific place based on visual cues and given clues. Players must carefully analyze the details in the image and use the provided clues to determine the correct location. The faster and more accurately they identify the place, the higher their chances of winning. Points will be awarded based on correctness and efficiency.</p>
          
            <h3 className="text-center text-xl font-bold mb-6 text-gray-800">Rules</h3>
            <li>A team should contain 2 members..</li>
            <li>Phones and other electronic devices are not allowed.</li>
            <li>This event consists of only one round.</li>
            <li>For every team, 5 questions will be asked. Marks will be based on the location frequency.</li>
            <li>Winners are decided based on the marks.</li>
            <h3 className="text-center text-xl font-bold mb-6 text-gray-800">Round 1</h3>
            <li>This round is about guessing the location name or the nearest place.</li>
            <li>Clues will be provided to help find the location.</li>
            <li>60 seconds will be given for each question.</li>
            
           
          </ul>

          <h2 className="text-xl mt-20">Contact For Further Details:</h2>
          <h2 className="text-xl mt-5">Name: S.Mohan</h2>
          <h2 className="text-xl mt-2">Contact No: +91 8883214777</h2>
         
          


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
