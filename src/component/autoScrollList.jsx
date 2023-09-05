import React, { useRef, useEffect } from 'react';

const AutoScrollList = () => {
  const scrollBar = [
    {
      id: 1,
      link: "Software developers",
    },
    {
      id: 2,
      link: "Web design",
    },
    {
      id: 3,
      link: "UI/UX",
    },
    {
      id: 4,
      link: "Backend Devs",
    },
    {
      id: 5,   
      link: "Data analysts",
    },
    {
      id: 6,   
      link: "Dev Rel",
    },
    {
      id: 7,   
      link: "Cyber security",
    },
    {
      id: 8,   
      link: "Project managers",
    },
    {
      id: 9,   
      link: "Game Devs",
    },
    {
      id: 10,   
      link: "Media managers",
    },
  ];

  const scrollBarRef = useRef(null);

  useEffect(() => {
    const scrollInterval = setInterval(() => {
      if (scrollBarRef.current) {
        scrollBarRef.current.scrollLeft += 1; // Adjust the scroll speed
        if (scrollBarRef.current.scrollLeft >= scrollBarRef.current.scrollWidth - scrollBarRef.current.clientWidth) {
          scrollBarRef.current.scrollLeft = 0;
        }
      }
    }, 50); // Adjust the interval duration (milliseconds)

    return () => {
      clearInterval(scrollInterval);
    };
  }, []);

  return (
    <ul ref={scrollBarRef} className="flex overflow-hidden h-14 items-center bg-blue-300 justify-between">
      {scrollBar.map(({ id, link }) => (
        <li key={id} className='px-4  text-sm font-bold  text-blue-950'>
          <>{link} </>
        </li>
      ))}
    </ul>
  );
};

export default AutoScrollList;
