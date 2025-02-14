import { useRef, useEffect } from "react";
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
import cse from "../assets/cse.png";
import educate from "../assets/educate.png";
import explore from "../assets/Explore.png";
import success from "../assets/success.png";
import vegeta from '../assets/vegeta.png';
import Nav from "./Nav";
import "../App.css";

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
      <Nav />
      <div className="container mx-auto px-3">
        <div className="flex flex-col items-center justify-center text-center">
          <div className="relative w-full h-[100vh] flex items-center justify-center bg-black overflow-hidden">
            <h1 ref={pointerRef} className="absolute left-10 md:left-20 lg:left-5 top-1/2 transform -translate-y-1/2 text-5xl md:text-8xl lg:text-8xl text-white font-bold opacity-70 hidden lg:block">
              POINTER
            </h1>
            <h1 ref={k25Ref} className="absolute right-10 md:right-20 lg:right-20 top-1/2 transform -translate-y-1/2 text-5xl md:text-8xl lg:text-8xl text-white font-bold opacity-70 hidden lg:block">
              2K25
            </h1>
            <h1 ref={pointerMobileRef} className="absolute top-12 mt-2 text-5xl md:text-8xl lg:text-8xl text-white font-bold opacity-70 lg:hidden space-y-3">
              POINTER
            </h1>
            <h1 ref={k25MobileRef} className="absolute top-28 text-5xl md:text-8xl lg:text-8xl text-white font-bold opacity-70 lg:hidden space-y-2">
              2K25
            </h1>
            <Spline scene="https://prod.spline.design/echVvdtq9JHAKrMx/scene.splinecode" />
          </div>
        </div>

        <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-2 space-y-6 gap-6 mt-20 mx-auto mb-10 px-6">
          {[
            { img: explore, label: "Explore", bg: "bg-white", text: "text-black", shadow: "shadow-black" },
            { img: educate, label: "Educate", bg: "bg-gradient-to-r from-black to-black", text: "text-white", shadow: "shadow-white" },
            { img: educate, label: "Educate", bg: "bg-gradient-to-r from-black to-black", text: "text-white", shadow: "shadow-white" },
            { img: success, label: "Achieve", bg: "bg-white", text: "text-black", shadow: "shadow-black" }
          ].map((dept, index) => (
            <div
              key={index}
              className={`${dept.bg} ${dept.shadow} shadow-xl p-10 flex flex-col items-center justify-center h-[160px] w-[90%] md:w-[60%] lg:w-[70%] lg:h-[200px] mx-auto rounded-3xl transition-transform transform hover:scale-105 animate-bounce`}
            >
              <img src={dept.img} className="h-[120px] mx-auto" alt={dept.label} />
              <p className={`mt-5 text-xl font-semibold ${dept.text}`}>
                <Link to={dept.link}>{dept.label}</Link>
              </p>
            </div>
          ))}
        </div>

        <div className="flex flex-col mx-auto md:flex-col lg:flex-row lg:space-x-2 mt-20 mb-10 justify-evenly md:border lg:border lg:border-white border border-white md:border-black p-5 md:p-10 lg:p-5 md:mx-auto rounded-xl shadow-lg lg:w-[90%]">
          {/* Image Section */}
          <div className="flex justify-center mb-6 md:mb-0">
            <img src={cse} className="h-[300px] md:h-[440px] w-auto mx-auto rounded-lg" alt="Learn" />
          </div>

          {/* Text Section */}
          <div className="flex flex-col justify-center items-center h-auto w-[103%] md:w-[100%] mt-5 lg:w-[50%] mx-auto bg-white border border-white lg:p-7 p-10">
            <h2 className="text-2xl md:text-3xl font-bold text-black text-center md:text-left mb-4">
              Learn What Matters
            </h2>
            <p className="text-base md:text-lg text-black leading-relaxed">
              Education is not just about acquiring knowledge; it is about learning what truly matters in life. Whether you're exploring new skills or diving deeper into your passions, the journey of learning shapes the future. Focus on what excites you, what sparks curiosity, and what has the power to impact your life and the world around you. With the right tools and mindset, anything is possible. Start learning today and discover the true power of education.
            </p>
          </div>
        </div>

        <div className="text-center  w-full lg:ml-64 mb-10">
          <ParallaxText baseVelocity={-5}>Pointers 2K25</ParallaxText>
          <ParallaxText baseVelocity={5}>CSE VETERANS</ParallaxText>
        </div>


        <div className="flex flex-col justify-evenly  lg:flex-row">

        </div>


        <div className="bg-white p-6 w-[95%] sm:p-10 sm:w-3/4 md:w-1/2 mx-auto mb-10 rounded-[40px]">
          <h1 className="text-black text-center text-lg sm:text-2xl font-bold italic leading-relaxed">
            Events
          </h1>
        </div>

        <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-2 space-y-6 gap-6 mt-20 mx-auto mb-10 px-6">
          {[
            { img: explore, label: "Technical", bg: "bg-white", text: "text-black", shadow: "shadow-black", link: "/technical" },
            { img: educate, label: "NonTech", bg: "bg-gradient-to-r from-black to-black", text: "text-white", shadow: "shadow-white", link: "/nont" },

          ].map((dept, index) => (
            <motion.div whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              key={index}
              className={`${dept.bg} ${dept.shadow} shadow-xl p-10 flex flex-col items-center justify-center h-[180px] w-[105%] md:w-[60%] lg:w-[70%] lg:h-[240px] mx-auto rounded-3xl transition-transform transform hover:scale-105`}
            >
              <img src={dept.img} className="h-[120px] mx-auto" alt={dept.label} />
              <p className={`mt-5 text-xl font-semibold ${dept.text}`}>
                <Link to={dept.link}>{dept.label}</Link>
              </p>
            </motion.div>
          ))}
        </div>

        

      </div>
    </>
  );
};

export default Home;
