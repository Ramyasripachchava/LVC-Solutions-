import React, { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "./ourEmployees.css";

const employees = [
  {
    id: 1,
    image: "/employee_pics/Venkat_ceo.jpeg",
    name: "Venkat Gunji",
    position: "Founder & CEO",
  },
  {
    id: 2,
    image: "/employee_pics/teja.jpeg",
    name: "Duggani Venkata Sai teja",
    position: "Full Stack  Intern",
  },
  {
    id: 3,
    image: "/employee_pics/vamsi.jpeg",
    name: "Achanta Bhanu Vamsi",
    position: "Full Stack  Intern",
  },
  {
    id: 4,
    image: "/employee_pics/chandan.jpeg",
    name: "T.K.Chandan",
    position: "Full Stack Intern",
    objectPosition: "top",
  },
  {
    id: 5,
    image: "/employee_pics/chakresh.jpeg",
    name: "Chakresh",
    position: "Full Stack Intern",
    objectPosition: "top",
  },
  {
    id: 6,
    image: "/employee_pics/rakesh.jpeg",
    name: "Rakesh  kumar",
    position: "Full Stack Intern",
  },
  {
    id: 7,
    image: "/employee_pics/yasaswini.jpeg",
    name: "Nagallaa yasaswini",
    position: "Full Stack Intern",
  },
  {
    id: 8,
    image: "/employee_pics/janardhan.jpeg",
    name: "S.Janardhan",
    position: "Full Stack Intern",
    objectPosition: "center 10%",
  },
  {
    id: 9,
    image: "/employee_pics/tejaswini.jpeg",
    name: "N.Tejaswini",
    position: "Full Stack Intern",
  },
  {
    id: 10,
    image: "/employee_pics/puneeth.jpeg",
    name: "Puneeth Kumar",
    position: "Full Stack Intern",
  },
  {
    id: 11,
    image: "/employee_pics/revanth.jpeg",
    name: "MADDULA REVANTH SRI",
    position: "Full Stack Intern",
  },
  {
    id: 12,
    image: "/employee_pics/sowjanya.jpeg",
    name: "Sowjanya Attuluri",
    position: "QA Engineer",
    objectPosition: "top",
  },
  {
    id: 13,
    image: "/employee_pics/nageswar.jpeg",
    name: "Nageswararao Kondeti",
    position: "UI/UX Designer",
  },
  {
    id: 14,
    image: "/employee_pics/kranthi.jpeg",
    name: "Kranthi Polisheety",
    position: "UI/UX Designer",
  },
  {
    id: 15,
    image: "/employee_pics/ram.jpeg",
    name: "Vamsi Ram Nandigam",
    position: "QA Engineer Intern",
    objectPosition: "top",
  },
  {
    id: 16,
    image: "/employee_pics/anu.jpeg",
    name: "Anantha Lakshmi Putta",
    position: "QA Engineer Intern",
  },
  {
    id: 17,
    image: "/employee_pics/gattham.jpeg",
    name: "Anu Gattham",
    position: "QA Engineer Intern",
  },
  {
    id: 18,
    image: "/employee_pics/hasritha.jpeg",
    name: "Hasritha Rayavaram",
    position: "QA Engineer Intern",
  },
  {
    id: 19,
    image: "/employee_pics/alekhya.jpeg",
    name: "Alekhya Attuluri",
    position: "HR",
    objectPosition: "top",
  },
  {
    id: 20,
    image: "/employee_pics/susmitha.jpeg",
    name: "Susmitha Patiwada",
    position: "HR",
    objectPosition: "top",
  },
  {
    id: 21,
    image: "/employee_pics/lokesh.jpeg",
    name: "Vaddevalli lokesh",
    position: "Gen AI Intern",
    objectPosition: "top",
  },
  {
    id: 22,
    image: "/employee_pics/deepika.jpeg",
    name: "Bhuma Chaitanya Deepika",
    position: "Gen AI Intern",
    objectPosition: "top",
  },
  {
    id: 23,
    image: "/employee_pics/pushpak.jpeg",
    name: "Tanneeru Pushpak",
    position: "COO",
  },
];

// Triplicate list for continuous infinite loop in both directions
const employeeList = [...employees, ...employees, ...employees];

const OurEmployees = () => {
  const scrollRef = useRef(null);
  const isHoveredRef = useRef(false);
  const isInteractingRef = useRef(false);
  const resumeTimeoutRef = useRef(null);

  // Drag-to-scroll state
  const [isDragging, setIsDragging] = useState(false);
  const dragStartX = useRef(0);
  const scrollStartX = useRef(0);

  // Initialize scroll position in the center set on mount
  useEffect(() => {
    if (scrollRef.current) {
      const singleSetWidth = scrollRef.current.scrollWidth / 3;
      if (singleSetWidth > 0) {
        scrollRef.current.scrollLeft = singleSetWidth;
      }
    }
  }, []);

  // Auto-scroll loop using requestAnimationFrame
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let animationFrameId;
    const speed = 0.8; // Smooth auto-scroll speed

    const animate = () => {
      if (!isHoveredRef.current && !isInteractingRef.current) {
        if (container) {
          container.scrollLeft += speed;
          const singleSetWidth = container.scrollWidth / 3;
          if (singleSetWidth > 0 && container.scrollLeft >= singleSetWidth * 2) {
            container.scrollLeft -= singleSetWidth;
          }
        }
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  // Handle seamless wrap-around on manual scroll/drag
  const handleScroll = () => {
    const container = scrollRef.current;
    if (!container) return;

    const singleSetWidth = container.scrollWidth / 3;
    if (singleSetWidth <= 0) return;

    if (container.scrollLeft >= singleSetWidth * 2) {
      container.scrollLeft -= singleSetWidth;
    } else if (container.scrollLeft <= 10) {
      container.scrollLeft += singleSetWidth;
    }
  };

  // Manual scroll by buttons (Left / Right)
  const scrollByAmount = (direction) => {
    const container = scrollRef.current;
    if (!container) return;

    isInteractingRef.current = true;
    clearTimeout(resumeTimeoutRef.current);
    resumeTimeoutRef.current = setTimeout(() => {
      isInteractingRef.current = false;
    }, 3500);

    const singleSetWidth = container.scrollWidth / 3;
    const scrollAmount = 280; // Approximate card width + gap

    if (direction === "left") {
      if (container.scrollLeft <= singleSetWidth * 0.4) {
        container.scrollLeft += singleSetWidth;
      }
      container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    } else {
      if (container.scrollLeft >= singleSetWidth * 1.9) {
        container.scrollLeft -= singleSetWidth;
      }
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  // Mouse drag handlers
  const handleMouseDown = (e) => {
    setIsDragging(true);
    isInteractingRef.current = true;
    clearTimeout(resumeTimeoutRef.current);
    dragStartX.current = e.pageX - scrollRef.current.offsetLeft;
    scrollStartX.current = scrollRef.current.scrollLeft;
  };

  const handleMouseMove = (e) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - dragStartX.current) * 1.3;
    scrollRef.current.scrollLeft = scrollStartX.current - walk;
  };

  const handleMouseUpOrLeave = () => {
    if (isDragging) {
      setIsDragging(false);
      clearTimeout(resumeTimeoutRef.current);
      resumeTimeoutRef.current = setTimeout(() => {
        isInteractingRef.current = false;
      }, 2500);
    }
  };

  // Hover handlers to pause auto-scroll when inspecting
  const handleMouseEnter = () => {
    isHoveredRef.current = true;
  };

  const handleMouseLeave = () => {
    isHoveredRef.current = false;
    handleMouseUpOrLeave();
  };

  // Touch handlers for mobile/tablet swipe
  const handleTouchStart = () => {
    isInteractingRef.current = true;
    clearTimeout(resumeTimeoutRef.current);
  };

  const handleTouchEnd = () => {
    clearTimeout(resumeTimeoutRef.current);
    resumeTimeoutRef.current = setTimeout(() => {
      isInteractingRef.current = false;
    }, 3000);
  };

  return (
    <div className="our-employees">
      <h2 style={{ color: "white" }}>Our Employees</h2>

      <p style={{ color: "white" }}>
        Meet the dedicated team behind our success. Our employees are the
        heart of our company, bringing passion, expertise, and commitment to
        every project.
      </p>

      <div
        className="slider-wrapper"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Left Scroll Button */}
        <button
          className="slider-arrow-btn left-arrow"
          onClick={() => scrollByAmount("left")}
          aria-label="Scroll left"
        >
          <ChevronLeft size={24} />
        </button>

        {/* Scrollable Container with Drag & Swipe */}
        <div
          className={`slider ${isDragging ? "dragging" : ""}`}
          ref={scrollRef}
          onScroll={handleScroll}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUpOrLeave}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div className="slide-track">
            {employeeList.map((employee, index) => (
              <div className="employee-card" key={`${employee.id}-${index}`}>
                <img
                  src={employee.image}
                  alt={employee.name}
                  draggable="false"
                  style={{ objectPosition: employee.objectPosition || "center" }}
                />
                <h4 style={{ fontSize: "13px" }}>{employee.name}</h4>
                <h4 style={{ fontSize: "12px", opacity: 0.85 }}>{employee.position}</h4>
              </div>
            ))}
          </div>
        </div>

        {/* Right Scroll Button */}
        <button
          className="slider-arrow-btn right-arrow"
          onClick={() => scrollByAmount("right")}
          aria-label="Scroll right"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default OurEmployees;