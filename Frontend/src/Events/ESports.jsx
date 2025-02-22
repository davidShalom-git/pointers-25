import bk from "../assets/Nature.gif";

const Code = () => {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-4 bg-fixed bg-center bg-cover w-full"
      style={{ backgroundImage: `url(${bk})` }}
    >
      
      <div className="relative w-full h-full flex flex-col lg:flex-row items-center justify-evenly bg-fixed bg-cover bg-center lg:mt-20 mt-64 p-4 space-y-8 lg:space-y-0 lg:space-x-8">
        <div className="bg-white flex-1 p-8 rounded-2xl shadow-2xl border border-gray-300 mb-8 lg:mb-0 max-w-lg">
          <h1 className="text-center text-3xl font-extrabold mb-6 text-gray-800">📜 Rules & Guidelines</h1>
          <h1 className="text-center text-3xl font-bold mb-6 text-gray-800">BGMI</h1>
          <ul className="text-gray-700 list-decimal list-inside space-y-3 text-lg leading-relaxed">
            <li>Players are not allowed to use any form of external assistance or cheat software. You can be disqualified for using hacks or third-party programs.
            </li>
            <li>Disrespectful language, trolling, or any disruptive behaviour toward opponents, organizers, or officials can lead to a team being disqualified.
            </li>
            <li>Teams must complete their registration on the official platform before the tournament begins.
            </li>
            <li>The game will be conducted over two days, with players divided into two batches.
            </li>
            <li>If you are involved in another event on day one, you will take part in day two.
            </li>
            <li>Player’s devices and software may be checked before and after matches.</li>
            <li>Erangal (only squads are allowed )</li>
            <li>TDM (1 VS 1)</li>
            <li>Winners Will Get Exciting Prices</li>
            <li>Participants will also receive a participation certificate.</li>
          </ul>
        </div>

        {/* Register Button */}
        <div className="text-center mt-8 flex-shrink-0">
          <a href="https://forms.gle/g9svm2eXapaesefy7" target="_blank" rel="noopener noreferrer">
            <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold rounded-lg shadow-md hover:scale-105 transition-all duration-300">
              Register Now
            </button>
          </a>
        </div>

        <div className="bg-white flex-1 p-8 rounded-2xl shadow-2xl border border-gray-300 mb-8 lg:mb-0 max-w-lg">
          <h1 className="text-center text-3xl font-extrabold mb-6 text-gray-800">📜 Rules & Guidelines</h1>
          <h1 className="text-center text-3xl font-bold mb-6 text-gray-800">Free Fire</h1>
          <ul className="text-gray-700 list-decimal list-inside space-y-3 text-lg leading-relaxed">
            <li>Players are not allowed to use any form of external assistance or cheat software. You can be disqualified for using hacks or third-party programs..</li>
            <li>Disrespectful language, trolling, or any disruptive behaviour toward opponents, organizers, or officials can lead to a team being disqualified.</li>
            <li>Teams must complete their registration on the official platform before the tournament begins.</li>
            <li>The game will be conducted over two days, with players divided into two batches.</li>
            <li>If you are involved in another event on day one, you will take part in day two.</li>
            <li>Player’s devices and software may be checked before and after matches.</li>
            <li>Winners Will Get Exciting Prices</li>
            <li>Participants will also receive a participation certificate.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Code;
