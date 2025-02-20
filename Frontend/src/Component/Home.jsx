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
import Spline from "@splinetool/react-spline";
import { Link } from "react-router-dom";
import gsap from "gsap";
import educate from "../assets/educate.jpg";
import explore from "../assets/Explore.png";
import point from '../assets/poin.jpg'
import "../App.css";
import galaxy from "../assets/galaxy.png";

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
  const pointerRef = useRef(null);
  const k25Ref = useRef(null);
  const pointerMobileRef = useRef(null);
  const k25MobileRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);
  const h1Ref = useRef(null);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    if (!navRef.current || !imageRef.current || !textRef.current || !h1Ref.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        navRef.current,
        { y: -100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power2.out" }
      );

      gsap.timeline()
        .from(imageRef.current, {
          x: window.innerWidth < 768 ? 0 : -200,
          opacity: 0,
          duration: 1.5,
          ease: "power2.out",
        })
        .from(textRef.current, {
          y: 200,
          opacity: 0,
          duration: 1.5,
          ease: "power2.out",
        }, "-=1")
        .to(h1Ref.current, {
          text: "Smart Learning...",
          duration: 2,
          ease: "power2.inOut",
        }, "-=1");
    });

    return () => ctx.revert();
  }, []);


  const [activeIndex, setActiveIndex] = useState(null);

  const questions = [
    { question: "Who can participate?", answer: "Students from various engineering branches can participate." },
    { question: "How many events can students participate in?", answer: "Students can participate Two Technical events and Two Non-Tecnical Events." },
    { question: "Will food be provided during the event?", answer: "Yes, food is available for participants. Accommodation is also available upon prior request." },
    { question: "Is the amount refundable?", answer: "No." },
    { question: "Will participation certificates be provided?", answer: "Yes." },
  ];


  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  useEffect(() => {
    // For large screens
    gsap.fromTo(pointerRef.current, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1.5, ease: 'power3.out' });
    gsap.fromTo(k25Ref.current, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1.5, ease: 'power3.out', delay: 0.5 });
    // For small screens
    gsap.fromTo(pointerMobileRef.current, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1.5, ease: 'power3.out' });
    gsap.fromTo(k25MobileRef.current, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1.5, ease: 'power3.out', delay: 0.5 });
  }, []);

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
        <div className="flex flex-col items-center justify-center text-center">
          <div className="relative w-full h-[100vh] flex items-center justify-center bg-black overflow-hidden">
            <h1 ref={pointerRef} className="absolute left-10 md:left-20 lg:left-5 top-1/2 transform -translate-y-1/2 text-5xl md:text-8xl lg:text-7xl text-white font-bold opacity-70 hidden lg:block">
              POINTER'S
            </h1>
            <h1 ref={k25Ref} className="absolute right-10 md:right-20 lg:right-20 top-1/2 transform -translate-y-1/2 text-5xl md:text-8xl lg:text-7xl text-white font-bold opacity-70 hidden lg:block">
              2K25
            </h1>
            <h1 ref={pointerMobileRef} className="absolute top-12 mt-2 text-5xl md:text-8xl lg:text-8xl text-white font-bold opacity-70 lg:hidden space-y-3">
              POINTER'S
            </h1>
            <h1 ref={k25MobileRef} className="absolute top-28 text-5xl md:text-8xl lg:text-8xl text-white font-bold opacity-70 lg:hidden space-y-2">
              2K25
            </h1>
            <Spline scene="https://prod.spline.design/echVvdtq9JHAKrMx/scene.splinecode" />
          </div>
        </div>



        <div id='cse' className="flex flex-col md:flex-row items-center justify-between py-16 gap-10">
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl font-bold text-white">Pointer's 2K25</h2>
            <p className="text-lg text-gray-400 mt-4">
              Join us for POINTER'S 2K25, a premier event where minds meet, ideas flourish, and visions come to life. Witness the pinnacle of technological innovation, engage with industry leaders, and be part of an experience that defines the future.
            </p>
          </div>
          <div className="w-full md:w-[50%]">
            <img src={point} alt="Team" className="rounded-lg shadow-lg w-full" />
          </div>
        </div>

        <div className="text-center  w-full lg:ml-64 mb-10">
          <ParallaxText baseVelocity={5}>Dept CSE </ParallaxText>
          <ParallaxText baseVelocity={-5}>Pointer's 2K25</ParallaxText>
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

        <div id="organizer" className="py-16 text-center">
          <h2 className="text-3xl font-extrabold text-gray-300">Staff's Organizers</h2>

          <div className="flex overflow-x-auto py-4 gap-10 mt-10">
            {[
            { name: "Mrs.V.Umadevi", role: "HOD/CSE", desgination: "CONVENER" },
            { name: "Mrs.G.Shoba", role: "AP/CSE",desgination: "CO-CONVENER" },
            { name: "Mr.N.Anandhakumar", role: "AP/CSE" , desgination: "CO-ORDINATOR"},
            { name: "Mrs.K.M.Banupriya", role: "AP/CSE" ,desgination: "CO-ORDINATOR"},
            { name: "Mrs.R.Kalaivanisri", role: "AP/CSE" ,desgination: "CO-ORDINATOR"},
            { name: "Mrs.P.Nithya", role: "AP/CSE", desgination: "ORGANIZING COMMITTEE" },
            { name: "Ms.M.Sowndharya", role: "AP/CSE",desgination: "ORGANIZING COMMITTEE" },
            { name: "Mr.K.Neelamegam", role: "AP/CSE", desgination: "ORGANIZING COMMITTEE" },
            { name: "Mrs.M.Maheshwari", role: "AP/CSE", desgination: "ORGANIZING COMMITTEE" },
            { name: "Mrs.F.Faziyudeen", role: "AP/CSE",desgination: "ORGANIZING COMMITTEE" },
            { name: "Mrs.S.Lalitha", role: "AP/CSE",desgination: "ORGANIZING COMMITTEE" },
            { name: "Mrs.A.Winni De Leo", role: "AP/CSE",desgination: "ORGANIZING COMMITTEE" },
          ].map((member, index) => (
              <div key={index} className="min-w-[300px] text-center shadow-lg p-5 rounded-lg bg-white">
                
                <h3 className="text-xl font-semibold mt-4">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
                <p className="text-gray-600">{member.desgination}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="py-16 text-center">
          <h2 className="text-3xl font-extrabold text-gray-300">Student Organizers</h2>
          <div className="flex overflow-x-auto py-4 gap-10 mt-10">
            {[{ name: "Mr.S.Mohan", role: "IV Year",desgination: "PRESIDENT" },
            {name: "Ms.V.Yoogasri", role: "IV Year",desgination: "VICE-PRESIDENT" },
            {name: "Mr.Y.S.Adithya Srinivas", role: "IV Year" , desgination: "SECRETARY"},
            {name: "Mr.K.Yuvaraj", role: "IV Year", desgination: 'JOINT SECRETARY'},
            {name: "Mr.S.Balu", role: "IV Year",desgination: "TREASURER" }, 
            {name: "Ms.S.Harini", role: "IV Year",desgination: "JOINT TREASURER" },
            {name: "Ms.V.Logeshwari", role: "IV Year",desgination: "PROGRAMME ORGANIZER" },
            {name: "Ms.S.A.Sherly", role: "IV Year",desgination: 'CO-PROGRAMME ORGANIZER' },
            {name: "Ms.R.P.Haripriya", role: "IV Year",desgination: 'DTP CO-ORDINATOR' },
            {name: "Ms.K.B.Akshaya", role: "IV Year",desgination: 'TECHNICAL SCRUTINIZER' },
            {name: "Mr.B.S.Venkatanathan", role: "IV Year",desgination: 'HEAD OF MULTIMEDIA' },
          ].map((member, index) => (
              <div key={index} className="min-w-[300px] text-center shadow-lg p-5 rounded-lg bg-white">
               
                <h3 className="text-xl font-semibold mt-4">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
                <p className="text-gray-600">{member.desgination}</p>
             
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
    <p className="text-center text-xl mt-5 text-gray-600">S.Mohan</p>
    <p className="text-center text-xl text-gray-600">+91 8883214777</p>
    <p className="text-center text-xl mt-5 text-gray-600">V.Logeshwari</p>
    <p className="text-center text-xl text-gray-600">+91 9790970202</p>
    <p className="text-center text-xl mt-5 text-gray-600">S.Balu</p>
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
