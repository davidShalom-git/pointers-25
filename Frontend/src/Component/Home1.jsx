import React, { useState, useEffect, useRef } from 'react';
import gsap from "gsap";
import galaxy from "../assets/galaxy.png";
import bk from '../assets/net.gif';
import Typewriter from 'react-typewriter-effect';
import { Link } from 'react-router-dom';


const Home1 = () => {
    const [key, setKey] = useState(0); 
    const navRef = useRef(null);
      const imageRef = useRef(null);
      const textRef = useRef(null);
      const h1Ref = useRef(null);
      const [isOpen, setIsOpen] = useState(false);
    
      const toggleMenu = () => setIsOpen(!isOpen);
      const closeMenu = () => setIsOpen(false);
    
      useEffect(() => {
        if (!navRef.current || !imageRef.current || !textRef.current || !h1Ref.current) return;
    
        const ctx = gsap.context(() => {
          gsap.fromTo(
            navRef.current,
            { y: -100, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, ease: "power2.out" }
          );
        });
    
        return () => ctx.revert();
      }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setKey(prevKey => prevKey + 1); 
        }, 8000);

        return () => clearInterval(interval); 
    }, []);

    return (
        <>
        
        <div className="bg-fixed bg-center min-h-screen w-full" style={{ backgroundImage: `url(${bk})` }}>
            <div className="flex flex-col lg:flex-row md:flex-col justify-center items-center text-3xl mt-5 lg:mt-0 min-h-screen">
                <div className='mx-auto text-center'>
                    <Typewriter
                        key={key}  
                        textStyle={{
                            fontFamily: 'sans-serif',
                            color: 'white',
                            fontWeight: 'bold',
                            fontSize: '1em',
                            lineHeight: '1.2em',
                            marginLeft: 30, // Adjust the line height as needed
                        }}
                        startDelay={100}
                        cursorColor="#3F3D56"
                        multiText={[
                            "Arunai Engineering College....",
                            "Department of Computer Science and Engineering!"
                        ]}
                        multiTextDelay={100}
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000}
                        loop={false} 
                    />
                    <h4 className='mt-5 text-white text-xl'>Empowering Innovation, Transforming the Future.</h4>
                    <button className='mt-5 bg-white text-black px-9 rounded-xl shadow-lg transition-transform transform hover:scale-105 hover:bg-gray-200'>
                        <Link to='/home' className='text-2xl'>Explore</Link>
                    </button>
                </div>
            </div>
        </div>
        </>
    );
};

export default Home1;
