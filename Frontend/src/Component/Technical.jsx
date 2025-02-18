import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import cse from '../assets/cse.png';
import it from '../assets/it.png';
import code from '../assets/code.png';
import sy from '../assets/sy.png';
import Nav from './Nav';
import NonTechPage from './Non_Tech';

const Technical = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const topics = useMemo(
    () => [
      { title: 'PPT', imgSrc: cse, direc: '/ppt' },
      { title: 'Quiz', imgSrc: it, direc: '/quiz' },
      { title: 'Syntax Showdown', imgSrc: sy, direc: '/code' },
      { title: 'Web Craft', imgSrc: code, direc: '/web' },
    ],
    []
  );

  const filteredTopics = useMemo(
    () => topics.filter((topic) =>
      topic.title.toLowerCase().includes(searchQuery.toLowerCase())
    ),
    [searchQuery, topics]
  );

  return (
    <>
     
      <div className="container mx-auto my-10 px-3 mt-10">
        <div className="bg-white p-6 w-[95%] sm:p-10 sm:w-3/4 md:w-1/2 mx-auto mb-10 rounded-[40px]">
          <h1 className="text-black text-center text-lg sm:text-2xl font-bold italic leading-relaxed">
            Technical
          </h1>
        </div>
        
        <div className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6 mx-auto mt-10 mb-20 px-4">
          {filteredTopics.map((topic, index) => (
            <Link to={topic.direc} className="text-black hover:text-gray-400">
            <div
              key={index}
              className="shadow-lg shadow-black p-7 md:p-8 mb-10 rounded-full bg-white lg:w-[70%] md:w-[90%] w-[80%] mx-auto"
            >
              <img
                src={topic.imgSrc}
                className="h-[130px] md:h-[180px] mx-auto object-contain"
                loading="lazy"
                alt={topic.title}
              />
              <h1 className="text-center mt-6 text-lg md:text-xl text-black">
                  {topic.title}
              </h1>
            </div>
              </Link>
          ))}
        </div>
        <Link to='/nont' className="text-black text-lg sm:text-2xl font-bold italic leading-relaxed">
        <div className="bg-white flex items-center justify-center p-6 w-[95%] sm:p-10 sm:w-3/4 md:w-1/2 mx-auto mb-10 rounded-[40px]">
            Non-Technical →
        </div>
        </Link>

      </div>
    </>
  );
};

export default Technical;
