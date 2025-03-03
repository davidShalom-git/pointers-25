import { useRef, useEffect, useState } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame
} from "framer-motion";
import { wrap } from "@motionone/utils";
import Typewriter from 'react-typewriter-effect';
import { Link } from "react-router-dom";
import educate from "../assets/educate.jpg";
import explore from "../assets/Explore.png";
import point from '../assets/point.jpg'
import "../App.css";
import galaxy from "../assets/galaxy.png";
import gsap from 'gsap';


const ParallaxText = ({ children, baseVelocity = 100 }) => {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false
  });

  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);
  const directionFactor = useRef(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();
    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="parallax">
      <motion.div className="scroller" style={{ x }}>
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
      </motion.div>
    </div>
  );
};

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);
  const imageRef = useRef(null);

  const [key, setKey] = useState(0);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const interval = setInterval(() => {
      setKey(prevKey => prevKey + 1);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  const [activeIndex, setActiveIndex] = useState(null);

  const questions = [
    { question: "Who can participate?", answer: "Students from various engineering branches can participate." },
    { question: "How many events can students participate in?", answer: "Students can participate Two Technical events and Two Non-Tecnical Events." },
    { question: "Will food be provided during the event?", answer: "Yes, food is available for participants. Accommodation is also available upon prior request." },
    { question: "Is the amount refundable?", answer: "No." },
    { question: "Will participation certificates be provided?", answer: "Yes." },
    { question: "Is Transportation Available?", answer: "Yes, For Further Details Contact Us...." },
  ];

  const organizers = [
    { image:  educate},
    { image: explore},
   
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % organizers.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + organizers.length) % organizers.length);
  };

  const handleSelect = (index) => {
    setCurrentIndex(index);
  };

  const prevIndex = (currentIndex - 1 + organizers.length) % organizers.length;
  const nextIndex = (currentIndex + 1) % organizers.length;

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };



  return (
    <>
      <div
        className="container flex flex-col md:flex-row justify-between items-center text-white px-6 py-5 rounded-[40px] mx-auto bg-black mt-5"
        ref={navRef}
      >

        <div className="flex justify-between w-full md:w-auto">
          <img ref={imageRef} src={galaxy} alt="Galaxy Icon" className="h-10 w-10 animate-spin" />
          <button className="md:hidden" onClick={toggleMenu} aria-label="Toggle Menu">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>


        <div className={`flex-1 md:flex ${isOpen ? "block" : "hidden"} md:block justify-center mt-4 md:mt-0`}>
          <ul className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
            <li><Link to="/home" className="text-xl text-white hover:text-gray-400">Home</Link></li>
            <li><a href="#cse" className="text-xl text-white hover:text-gray-400">About</a></li>
            <li><a href="#event" className="text-xl text-white hover:text-gray-400">Events</a></li>
            <li><a href="#organizer" className="text-xl text-white hover:text-gray-400">Contact</a></li>
          </ul>
        </div>
      </div>

      <div className="container mx-auto px-3">
      <div className="flex flex-col justify-center items-center h-24 mt-64 mb-46">
      <Typewriter
                textStyle={{
                    fontFamily: 'Poppins, sans-serif',
                    fontWeight: 'bold',
                    fontSize: '2.7rem',
                    textAlign: 'center',
                    background: 'linear-gradient(90deg, #00DBDE 0%, #FC00FF 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    display: 'inline-block'
                }}
                startDelay={100}
                cursorColor="#fff"
                multiText={[
                    "Arunai Engineering College...",
                    "Department of Computer Science and Engineering!"
                ]}
                multiTextDelay={1000}  
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1500}  
                loop={true} 
            />
               <h4 className='mt-5 text-white text-xl'>Empowering the Innovation</h4>
                            
        </div>

        <section id="cse" className="py-20 px-6 md:px-16 text-white">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">


            <motion.div
              className="w-full md:w-1/2 text-center md:text-left"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-extrabold bg-clip-text  text-blue-500">
                POINTERS 2K25
              </h2>
              <p className="text-lg text-gray-300 mt-4 leading-relaxed">
                🚀 <span className="font-semibold text-blue-500">Join Us for POINTERS 2K25</span> – National Level Technical Symposium!<br />
                📅 <span className="font-semibold text-blue-500">Date:</span> March 11-12, 2025<br />
                📍 <span className="font-semibold text-blue-500">Venue:</span> Arunai Engineering College..<br />
                <span className="block mt-3">Unleash your <span className="text-blue-500 font-semibold">creativity, innovation,</span> and <span className="text-blue-500 font-semibold">technical skills</span> at POINTERS 2K25!</span>
                Participate in <span className="font-semibold text-blue-500">exciting tech events</span>, coding challenges, workshops, and more while networking with industry experts.
                <br /><br />
                💡 <span className="text-blue-500 font-semibold">Showcase your talent</span>, compete, learn, and win exciting prizes!<br />
                💡 <span className=" font-semibold">Showcase your talent</span>, compete, learn, and win exciting prizes!<br />
                🔗 Stay tuned for registrations and event updates. Be a part of this <span className=" font-semibold text-blue-500">mega tech fest</span>!
              </p>
            </motion.div>

            {/* Right Section - Image */}
            <motion.div
              className="w-full md:w-[50%]"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <img
                src={point}
                alt="Team"
                className="rounded-lg shadow-2xl w-full hover:scale-105 transition-transform duration-300"
              />
            </motion.div>

          </div>
        </section>

        <div className="text-center  w-full lg:ml-64 mb-10">
          <ParallaxText baseVelocity={5}>Dept of CSE </ParallaxText>
          <ParallaxText baseVelocity={-5}>Pointers 2K25</ParallaxText>
        </div>



        <div id="event" className="bg-white p-6 w-[95%] sm:p-10 sm:w-3/4 md:w-1/2 mx-auto mb-10 rounded-[40px]">
          <h1 className="text-black text-center text-2xl lg:text-4xl  sm:text-2xl font-extrabold italic leading-relaxed">
            EVENTS
          </h1>
        </div>

        <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-2 space-y-6 gap-6 mt-20 mx-auto mb-10 px-6">
          {[
            { img: explore, label: "Technical", bg: "bg-white", text: "text-black", shadow: "shadow-black", link: "/technical" },
            { img: educate, label: "NonTech", bg: "bg-gradient-to-r from-black to-black", text: "text-white", shadow: "shadow-white", link: "/nont" },
          ].map((dept, index) => (
            <Link to={dept.link} className="text-center text-md text-white font-bold italic">
              <motion.div
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
                key={index}
                className={`${dept.bg} ${dept.shadow} shadow-xl p-10 flex flex-col items-center justify-center h-[180px] w-[105%] md:w-[60%] lg:w-[70%] lg:h-[240px] mx-auto rounded-3xl transition-transform transform hover:scale-105`}
              >
                <img src={dept.img} className="h-[120px] mx-auto" alt={dept.label} />
                <p className={`${dept.text} mt-2`}>{dept.label}</p>
              </motion.div>
            </Link>
          ))}
        </div>

        
        <div className="py-16 text-center">
  <h2 className="text-3xl font-extrabold text-gray-300">Student Organizers</h2>
  <div className="flex overflow-x-auto py-4 gap-10 mt-10" style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}>
    {[{ name: "Mr.S.Mohan", role: "IV Year", designation: "PRESIDENT" },
    { name: "Mr.K.Nityananda", role: "IV Year", designation: "VICE-PRESIDENT" },
    { name: "Mr.Y.S.Adithya Srinivas", role: "IV Year", designation: "SECRETARY" },
    { name: "Mr.K.Yuvaraj", role: "IV Year", designation: "JOINT SECRETARY" },
    { name: "Mr.S.Balu", role: "IV Year", designation: "TREASURER" },
    { name: "Mr.R.Mithun Ragavendiran", role: "IV Year", designation: "HEAD OF MULTIMEDIA" },
    { name: "Ms.K.B.Akshaya", role: "IV Year", designation: "TECHNICAL SCRUTINIZER" },
    { name: "Ms.R.P.Haripriya", role: "IV Year", designation: "DTP CO-ORDINATOR" },
    { name: "Ms.S.Harini", role: "IV Year", designation: "DTP CO-ORDINATOR" },
    { name: "Ms.V.Logeshwari", role: "IV Year", designation: "PROGRAMME ORGANIZER" },
    { name: "Mr.K.Bala Murugan", role: "IV Year", designation: "CO-PROGRAMME ORGANIZER" },
    ].map((member, index) => (
      <div key={index} className="min-w-[300px] text-center shadow-lg p-5 rounded-lg bg-white">
        <h3 className="text-xl font-semibold mt-4">{member.name}</h3>
        <p className="text-gray-600">{member.role}</p>
        <p className="text-gray-600">{member.designation}</p>
      </div>
    ))}
  </div>
</div>




        <div className="max-w-md mx-auto bg-gradient-to-br from-white to-gray-100 rounded-2xl shadow-xl overflow-hidden md:max-w-2xl my-8 border border-gray-200">
          <div className="p-8">
            <h2 className="text-2xl font-extrabold text-gray-800 text-center mb-4">📩 Contact Us</h2>
            <p className="text-center text-gray-600 text-lg leading-relaxed">
              Have questions? Feel free to reach out to us. We're happy to help! 🎉
            </p>

            <p className="text-center text-xl text-gray-600 mt-5">+91 8883214777</p>
        
            <p className="text-center text-xl text-gray-600">+91 9790970202</p>
           
            <p className="text-center text-xl text-gray-600">+91 9677379586</p>

            <div className="flex justify-center mt-6">
              <a
                href="mailto:pointers2k25@gmail.com"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-bold text-lg rounded-lg shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-300"
              >
                ✉️ Send Email
              </a>
            </div>
          </div>
        </div>


        <div className="text-center text-blue-500 font-bold text-2xl mt-20">
          🚀 On-Spot Registration is also Available! 🚀
        </div>
        <div className="text-center text-gray-400 text-xl mb-16">
          Join the excitement and register on-site today!
        </div>

        <div className="py-16 text-center" id="organizer">
      <h2 className="text-3xl font-extrabold text-gray-300">Our Sponsorships</h2>
      <div className="flex justify-center items-center mt-10 space-x-4">
        <div
          className="min-w-[200px] text-center shadow-lg p-5 rounded-lg  cursor-pointer"
          onClick={() => handleSelect(prevIndex)}
        >
          <img src={organizers[prevIndex].image} alt={`Organizer ${prevIndex + 1}`} className="w-full h-auto rounded-lg" />
        </div>
        <div className="min-w-[300px] max-w-[500px] w-full text-center shadow-lg p-10 rounded-lg ">
          <img src={organizers[currentIndex].image} alt={`Organizer ${currentIndex + 1}`} className="w-full h-auto rounded-lg mb-4" />
        </div>
        <div
          className="min-w-[200px] text-center shadow-lg p-5 rounded-lg  cursor-pointer"
          onClick={() => handleSelect(nextIndex)}
        >
          <img src={organizers[nextIndex].image} alt={`Organizer ${nextIndex + 1}`} className="w-full h-auto rounded-lg" />
        </div>
      </div>
      <div className="flex mt-4 justify-center space-x-2">
        <button onClick={handlePrevious} className="px-4 py-2 bg-gray-300 text-gray-700 rounded">
          &lt;
        </button>
        <button onClick={handleNext} className="px-4 py-2 bg-gray-300 text-gray-700 rounded">
          &gt;
        </button>
      </div>
    </div>




        <div className="py-8 px-4 mx-auto">
          <h2 className="text-2xl font-bold text-gray-400 text-center mb-6">Frequenlty Asked Questions!</h2>
          {questions.map((item, index) => (
            <div key={index} className="mb-4 flex flex-col justify-center items-center">
              <button
                onClick={() => handleToggle(index)}
                className="lg:w-[50%]  w-full text-left py-2 px-4 bg-gray-200 rounded-md focus:outline-none"
              >
                <h3 className="text-lg font-semibold lg:w-[50%] w-full text-gray-700">{item.question}</h3>
              </button>
              {activeIndex === index && (
                <div className="mt-2 pl-4 pr-2 py-2 lg:w-[50%] w-full bg-gray-100 rounded-md">
                  <p className="text-gray-600">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </>
  );
};

export default Home;
