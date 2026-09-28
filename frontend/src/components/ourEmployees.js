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
    // objectPosition: "center 15%",
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
    id: 19,
    image: "/employee_pics/susmitha.jpeg", 
    name: "Susmitha Patiwada",
    position: "HR",
    objectPosition: "top",
  },
  {
    id: 21,
    image: "/employee_pics/lokesh.jpeg", 
    name: "Vaddevalli lokesh",
    position: "Full Stack  Intern",
    objectPosition: "top",
  },
  {
    id: 22,
    image: "/employee_pics/pushpak.jpeg", 
    name: "Tanneeru Pushpak",
    position: "COO",
  }
];

const OurEmployees = () => {
  return (
    <div className="our-employees">
      <h2 style={{ color: "white" }}>Our Employees</h2>

      <p style={{ color: "white" }}>
        Meet the dedicated team behind our success. Our employees are the
        heart of our company, bringing passion, expertise, and commitment to
        every project.
      </p>

      <div className="slider">
        <div className="slide-track">
          {[...employees, ...employees].map((employee, index) => (
            <div className="employee-card" key={index}>
              <img 
                src={employee.image} 
                alt={employee.name} 
                style={{ objectPosition: employee.objectPosition || "center" }}
              />
              <h4 style={{ fontSize: "13px" }}>{employee.name}</h4>
              <h4 style={{ fontSize: "12px" }} >{employee.position}</h4>
              {/* <h4 style={{ fontSize: "12px" }}>{employee.Role}</h4> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurEmployees;