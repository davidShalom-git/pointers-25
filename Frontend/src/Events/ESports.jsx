import React from 'react';
import bgmi from '../assets/bgmi.pdf';
import ff from '../assets/ff.pdf';

const Code = () => {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center mt-20 px-4 bg-fixed bg-center bg-cover w-full"
    
    >
      <div className="bg-white flex-1 p-8 rounded-2xl shadow-2xl border border-gray-300 mb-8 lg:mb-0 max-w-lg">
        <h1 className="text-center text-3xl font-extrabold mb-6 text-gray-800">📜 Rules & Guidelines</h1>
        <h1 className="text-center text-3xl font-bold mb-6 text-gray-800">General Rules</h1>
        <ul className="text-gray-700 list-decimal list-inside space-y-3 text-lg leading-relaxed">
          <li>Players are not allowed to use any form of external assistance or cheat software...</li>
          <li>Any use of hacks or third-party programs will result in disqualification.</li>
          <li>Disrespectful language, trolling, or any disruptive behavior toward opponents, organizers, or officials may lead to team disqualification.</li>
          <li>Teams must complete their registration on the official platform before the tournament begins</li>
          <li>The tournament will be conducted over two days, with players divided into two batches.</li>
          <li>If a player is involved in another event on day one, they will compete on day two..</li>
          <li>Players devices and software may be checked before and after matches.</li>
          <li>Winners will receive exciting prizes.</li>
          <li>All participants will receive a participation certificate.</li>
        </ul>
        
        <div className="text-center mt-8 flex-shrink-0 mb-20">
          <a href={bgmi} download="bgmi-rules.pdf">
            <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold rounded-lg shadow-md hover:scale-105 transition-all duration-300">
              Download BGMI Rules PDF
            </button>
          </a>
          <a href={ff} download="ff-rules.pdf">
            <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white mt-5 font-semibold rounded-lg shadow-md hover:scale-105 transition-all duration-300">
              Download Free Fire Rules PDF
            </button>
          </a>
        </div>

        <h2 className="text-xl mt-20">Contact For Further Details:</h2>
        <h2 className="text-xl font-bold mt-10">Free Fire:</h2>
       
        <h2 className="text-xl mt-2">Contact No: +91 6374882631</h2>
      
        <h2 className="text-xl mt-2">Contact No: +91 9342886897</h2>
        <h2 className="text-xl font-bold mt-20">BGMI:</h2>
      
        <h2 className="text-xl mt-2">Contact No: +91 9342594645</h2>
    
        <h2 className="text-xl mt-2">Contact No: +91 9360790976</h2>

        <h1 className="text-center mt-24 mb-10 text-xl font-extrabold ">🪪 Your College ID Card is Mandatory to attend the Events.</h1>
      </div>
     
      <div className="text-center mt-8 flex-shrink-0 mb-20">
        <a href="https://forms.gle/g9svm2eXapaesefy7" target="_blank" rel="noopener noreferrer">
          <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold rounded-lg shadow-md hover:scale-105 transition-all duration-300">
            Register Now
          </button>
        </a>
      </div>
    </div>
  );
};

export default Code;
