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
          <h1 className=" text-xl font-extrabold mb-6 text-gray-800">Topic and Submission Guideliness:</h1>
            <li>The presentation must be based on topics related to your department domain, project ideas, or innovative research</li>
            <li>Participants must submit their research papers before the deadline. Late submissions will not be accepted.</li>
            <li>Papers must be original and should not have been published or presented elsewhere.</li>
            <li>Plagiarism should be below 10-15% with proper citations.</li>

            <h1 className=" text-xl font-extrabold mb-6 text-gray-800">Team & Presentation Guidelines</h1>
            <li>Each team must consist of 3 to 4 participants (no more than 4 members).</li>
            <li>Each participant/team will get 8-10 minutes to present their paper..</li>
            <li>The use of AI-generated content should be minimal and used only in exceptional cases...</li>

            <h1 className=" text-xl font-extrabold mb-6 text-gray-800">Evaluation Criteria</h1>
            <li>Content Quality – Relevance and depth of research.</li>
            <li>Presentation Skills – Clarity, confidence, and engagement.</li>
            <li>Time Management – Adhering to the given time limit.</li>
            <li>Visual Aids – Effective use of slides and supporting materials.</li>
            <li>Q&A Handling – Ability to answer judges’ and audience’s questions.</li>

            <h1 className=" text-xl font-extrabold mb-6 text-gray-800">General Rules</h1>
            <li>Any form of plagiarism or misrepresentation will lead to immediate disqualification.</li>
            <li>The decision of the judges will be final and binding.</li>
            <li>Winners will be awarded cash prizes as per event guidelines.</li>
            <li>All participants will receive a participation certificate.</li>
           
          </ul>

          <h2 className="text-xl mt-20">Contact For Further Details:</h2>
          <h2 className="text-xl mt-5">Name: G.Suryamani</h2>
          <h2 className="text-xl mt-2">Contact No: +91 8610192822</h2>
          <h2 className="text-xl mt-5">Name: V.Yogeshwari</h2>
          <h2 className="text-xl mt-2">Contact No: +91 9790970202</h2>
          


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
