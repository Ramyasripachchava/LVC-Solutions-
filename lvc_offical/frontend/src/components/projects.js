import { useState } from "react";
import ProjectModal from "./projectmodal.js";
import "bootstrap/dist/css/bootstrap.min.css";
import TransformationStartsHere from "./transformationStartsHere.js";
import Footer from "./footer.js";
import { Link } from "react-router-dom";
import "../style.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projectsData = {
    fairJobPortal: {
      title: "Fair Job – AI-Powered Job Portal",
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop",
      description:
        "Fair Job is a cutting-edge AI-powered job portal that combines the power of Generative AI and LLMs to simplify and improve the hiring process for both job seekers and employers.",
      features: [
        "AI-powered chatbot for candidate information collection",
        "ATS keyword matching and resume analysis",
        "Tailored job recommendations",
        "AI-driven virtual interview system",
        "Real-time response evaluation",
        "Secure e-verification system",
      ],
    },
    smartQR: {
      title: "SmartQR - AI-Powered Contactless Ordering",
      image:
        "https://images.unsplash.com/photo-1533749047139-189de3cf06d3?q=80&w=2069&auto=format&fit=crop",
      description:
        "Revolutionize your dining experience with our AI-powered, contactless ordering system. SmartQR simplifies restaurant interaction through intelligent chatbot-driven ordering.",
      features: [
        "QR code menu scanning",
        "Intelligent chatbot ordering",
        "Contactless payment processing",
        "Real-time analytics dashboard",
        "Inventory management",
        "POS system integration",
      ],
    },
    supermarketAnalytics: {
      title: "AI-Powered Supermarket Analytics",
      image:
        "https://images.unsplash.com/photo-1534723452862-4c874018d66d?q=80&w=2070&auto=format&fit=crop",
      description:
        "Optimize supermarket sales and inventory management through automated reporting and intelligent restocking suggestions powered by advanced AI models.",
      features: [
        "Real-time sales tracking",
        "Intelligent restocking suggestions",
        "Predictive demand analysis",
        "Visual analytics dashboard",
        "Multi-store support",
        "Dynamic pricing recommendations",
      ],
    },
    liquorDelivery: {
      title: "Liquor Delivery App",
      image:
        "https://images.unsplash.com/photo-1516997121675-4c2d1684aa3e?q=80&w=2069&auto=format&fit=crop",
      description:
        "A secure, mobile-first platform for ordering and delivering liquor products with age verification and real-time tracking capabilities. This solution streamlines the delivery process while ensuring compliance with local regulations.",
      features: [
        "Age verification system",
        "Real-time order tracking",
        "Secure payment processing",
        "Inventory management",
        "Route optimization",
        "Compliance monitoring",
      ],
    },
    worksuite: {
      title: "Worksuite - Employee Management System",
      image:
        "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=2073&auto=format&fit=crop",
      description:
        "A comprehensive employee management solution that streamlines HR processes, attendance tracking, and performance management. The system provides powerful analytics and reporting tools for better workforce management.",
      features: [
        "Employee data management",
        "Attendance tracking",
        "Performance evaluation",
        "Leave management",
        "Payroll integration",
        "Analytics dashboard",
      ],
    },
    smsGateway: {
      title: "SMS Gateway Platform",
      image:
        "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?q=80&w=2070&auto=format&fit=crop",
      description:
        "A robust SMS communication platform that enables businesses to send bulk messages, automated notifications, and two-factor authentication codes. The system handles high volumes of messages with real-time delivery tracking.",
      features: [
        "Bulk SMS sending",
        "Delivery tracking",
        "API integration",
        "Message scheduling",
        "Template management",
        "Analytics and reporting",
      ],
    },
    carRental: {
      title: "Car Rental Module",
      image:
        "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=2070&auto=format&fit=crop",
      description:
        "An online platform designed to facilitate seamless car rentals, allowing customers to search, book, and manage vehicle rentals while providing administrators with comprehensive management tools.",
      features: [
        "Location-based vehicle search",
        "Real-time availability tracking",
        "Booking management system",
        "Secure payment processing",
        "Admin dashboard",
        "Detailed reporting",
      ],
    },
    tableTrack: {
      title: "Table Track Order Management",
      image:
        "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=2074&auto=format&fit=crop",
      description:
        "A comprehensive solution designed for restaurants and retail stores, integrating seamlessly with POS systems for efficient table management and order tracking.",
      features: [
        "Real-time order tracking",
        "Table management",
        "Mobile ordering interface",
        "POS integration",
        "Inventory management",
        "Analytics dashboard",
      ],
    },
    warehouseSystem: {
      title: "Warehouse Management System",
      image:
        "https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=2070&auto=format&fit=crop",
      description:
        "A robust solution designed to optimize warehouse operations, including inventory management, order processing, and shipment tracking with real-time updates and automation.",
      features: [
        "Real-time inventory tracking",
        "Automated order fulfillment",
        "Barcode/RFID integration",
        "Role-based access control",
        "Third-party logistics integration",
        "Analytics and reporting",
      ],
    },
    crudFirebase: {
      title: "CRUD Firebase Application",
      image:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2070&auto=format&fit=crop",
      description:
        "A powerful system designed for managing data through Firebase, offering a web-based interface that allows users to perform Create, Read, Update, and Delete operations on data stored in Firestore.",
      features: [
        "Real-time data synchronization",
        "Secure user authentication",
        "Role-based access control",
        "Data validation",
        "Firebase security rules",
        "Performance optimization",
      ],
    },
    nexTask: {
      title: "NexTask Project Management System",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
      description:
        "A comprehensive solution designed to streamline project planning, task management, and team collaboration. It offers features such as task assignment, progress tracking, and real-time notifications.",
      features: [
        "Task assignment and tracking",
        "Real-time notifications",
        "Third-party integrations",
        "Role-based access",
        "Workflow automation",
        "Analytics dashboard",
      ],
    },
    bookingHub: {
      title: "Booking Hub Event Management",
      image:
        "https://images.unsplash.com/photo-1505236858219-8359eb29e329?q=80&w=2070&auto=format&fit=crop",
      description:
        "A comprehensive platform designed to simplify event planning and management. It enables organizers to create and manage events, handle online ticket bookings, and securely process payments.",
      features: [
        "Event creation and management",
        "Online ticket booking",
        "QR code check-ins",
        "Vendor management",
        "Automated reminders",
        "Analytics and reporting",
      ],
    },
    blackPOS: {
      title: "Black POS Product Management",
      image:
        "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?q=80&w=2070&auto=format&fit=crop",
      description:
        "A comprehensive solution for businesses to efficiently manage product inventories, sales transactions, and reporting. The system streamlines store operations and enhances customer experience through its intuitive interface.",
      features: [
        "Real-time inventory tracking",
        "Barcode generation and scanning",
        "Secure payment processing",
        "Multi-store synchronization",
        "Role-based user management",
        "Advanced analytics dashboard",
      ],
    },
    parcelBox: {
      title: "Parcel Box Inventory System",
      image:
        "https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=2070&auto=format&fit=crop",
      description:
        "A comprehensive platform designed to help businesses efficiently manage their inventory, sales, and purchase records with real-time tracking and automated updates.",
      features: [
        "Real-time inventory tracking",
        "Automated stock updates",
        "Invoice generation",
        "Barcode scanning",
        "Supplier management",
        "Performance analytics",
      ],
    },
    niftyEws: {
      title: "NiftyEws Loan Management",
      image:
        "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?q=80&w=2070&auto=format&fit=crop",
      description:
        "A comprehensive platform designed to streamline the entire loan lifecycle, from application and approval to repayment and tracking with automated notifications.",
      features: [
        "Loan application processing",
        "EMI calculations",
        "Automated notifications",
        "Payment tracking",
        "Customer management",
        "Compliance monitoring",
      ],
    },
    emailBuilder: {
      title: "Drag & Drop Email Template Builder",
      image:
        "https://images.unsplash.com/photo-1526649661456-89c7ed4d00b8?q=80&w=2070&auto=format&fit=crop",
      description:
        "An intuitive, web-based application designed to help users create, customize, and export responsive email templates without any coding skills.",
      features: [
        "Drag-and-drop interface",
        "Real-time preview",
        "HTML/CSS export",
        "Template management",
        "Email service integration",
        "Responsive design testing",
      ],
    },
    dentalCRM: {
      title: "Yaazhini Dental Clinic CRM",
      image:
        "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2068&auto=format&fit=crop",
      description:
        "A comprehensive solution designed to manage patient data, appointments, prescriptions, and invoices for dental clinics.",
      features: [
        "Patient management",
        "Appointment scheduling",
        "Prescription tracking",
        "Automated invoicing",
        "Medical history records",
        "Analytics dashboard",
      ],
    },
    agriPortal: {
      title: "Agriculture Portal with ML",
      image:
        "https://images.unsplash.com/photo-1560493676-04071c5f467b?q=80&w=2074&auto=format&fit=crop",
      description:
        "A web-based platform designed to support farmers in optimizing crop yield and resource management using machine learning algorithms.",
      features: [
        "Crop yield prediction",
        "Weather analysis",
        "Soil condition monitoring",
        "Resource optimization",
        "Market trend insights",
        "Interactive visualizations",
      ],
    },
    studentPerformance: {
      title: "Student Performance Prediction",
      image:
        "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=2070&auto=format&fit=crop",
      description:
        "A machine learning-powered system that predicts student academic performance based on historical data, providing valuable insights for educational institutions.",
      features: [
        "Performance prediction",
        "Data visualization",
        "Risk assessment",
        "Intervention recommendations",
        "Progress tracking",
        "Analytical reporting",
      ],
    },
    timetable: {
      title: "Timetable Management System",
      image:
        "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?q=80&w=2068&auto=format&fit=crop",
      description:
        "A powerful platform designed to help educational institutions efficiently manage schedules for classes, meetings, and events with automatic conflict detection.",
      features: [
        "Automated scheduling",
        "Conflict detection",
        "Resource allocation",
        "Real-time updates",
        "Calendar integration",
        "Multi-user access",
      ],
    },
    quiz: {
      title: "Interactive Quiz Platform",
      image:
        "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2070&auto=format&fit=crop",
      description:
        "An interactive online learning platform designed to enhance knowledge retention and mastery through customizable quizzes with real-time feedback.",
      features: [
        "Quiz creation tools",
        "Progress tracking",
        "Real-time feedback",
        "Social sharing",
        "Leaderboard system",
        "Performance analytics",
      ],
    },
    fastnFitness: {
      title: "FastnFitness Wellness Platform",
      image:
        "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop",
      description:
        "An innovative fitness and wellness platform designed to help individuals efficiently achieve their health and fitness goals, even with a busy schedule.",
      features: [
        "Personalized workout plans",
        "AI-driven recommendations",
        "Real-time tracking",
        "Wearable device integration",
        "Live virtual training",
        "Community features",
      ],
    },
    farmerCallCenter: {
      title: "Farmer-Call-Center Platform",
      image:
        "https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?q=80&w=2074&auto=format&fit=crop",
      description:
        "An innovative helpline platform designed to connect farmers with agricultural experts for timely advice and solutions through AI-driven responses and expert consultations.",
      features: [
        "24/7 Support system",
        "Multilingual support",
        "Live call routing",
        "Knowledge base",
        "Expert consultation",
        "Mobile accessibility",
      ],
    },
    cropRecommendation: {
      title: "Crop Recommendation System",
      image:
        "https://images.unsplash.com/photo-1615811361523-6bd03d7748e7?q=80&w=2074&auto=format&fit=crop",
      description:
        "A web-based platform designed to assist farmers in making informed decisions about crop cultivation based on real-time environmental data.",
      features: [
        "ML-based predictions",
        "Soil analysis",
        "Weather integration",
        "IoT sensor support",
        "Custom notifications",
        "Data visualization",
      ],
    },
    torchIO: {
      title: "TorchIO Medical Imaging Library",
      image:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop",
      description:
        "An open-source Python library designed to simplify the preprocessing and analysis of 3D medical images for deep learning applications.",
      features: [
        "3D medical image processing",
        "Data augmentation",
        "Patch-based sampling",
        "GPU acceleration",
        "PyTorch integration",
        "Automated preprocessing",
      ],
    },
    plantex: {
      title: "Plantex E-Commerce Platform",
      image:
        "https://images.unsplash.com/photo-1604762524889-3e2fcc145683?q=80&w=2071&auto=format&fit=crop",
      description:
        "An e-commerce platform designed to provide a seamless shopping experience for plant enthusiasts, gardeners, and farmers.",
      features: [
        "Seller dashboard",
        "Inventory management",
        "Secure payments",
        "Order tracking",
        "Community forums",
        "Educational content",
      ],
    },
    farmKart: {
      title: "FarmKart Direct-to-Consumer Platform",
      image:
        "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=2070&auto=format&fit=crop",
      description:
        "An innovative e-commerce platform designed to connect farmers directly with consumers, offering fresh produce and agricultural products without intermediaries.",
      features: [
        "Farmer product listing",
        "Inventory management",
        "Order fulfillment",
        "Real-time tracking",
        "Review system",
        "Secure payments",
      ],
    },
  };

  return (
    <main>
      <div className="projects-section-herobanner">
        <div className="projects-container">
          <div className="projects-content">
            <p className="projects-subtitle">Projects</p>
            <hr className="underline" />
            <h1 className="projects-title">Our Projects</h1>
            <p className="mb-4" style={{ color: "#f1f1f1" }}>
              We are working on exciting projects that we can't wait to share
              with you. Check back soon to see our latest work!
            </p>
            <Link to="/contact" className="btn btn-primary-whatwedo">
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      {/* Ongoing Projects Section */}
      <div className="lvc-difference-section">
        <div className="section-header">
          <h1>Ongoing Projects</h1>
          <p className="section-subtitle">Current innovations in development</p>
        </div>

        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={30}
          slidesPerView={3}
          initialSlide={0}
          rewind={true}
          centeredSlides={false}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          className="difference-cards-swiper"
        >
          <SwiperSlide>
            <div
              className="difference-card"
              onClick={() => setSelectedProject(projectsData.fairJobPortal)}
            >
              <div className="card-image">
                <img
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop"
                  alt="Fair Job Portal"
                  className="difference-card-img"
                />
              </div>
              <div className="card-content">
                <h3>Fair Job Portal</h3>
                <p>
                  AI-powered job portal with intelligent matching and assessment
                </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div
              className="difference-card"
              onClick={() => setSelectedProject(projectsData.smartQR)}
            >
              <div className="card-image">
                <img
                  src="https://images.unsplash.com/photo-1533749047139-189de3cf06d3?q=80&w=2069&auto=format&fit=crop"
                  alt="SmartQR"
                  className="difference-card-img"
                />
              </div>
              <div className="card-content">
                <h3>SmartQR</h3>
                <p>AI-powered contactless ordering system for restaurants</p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div
              className="difference-card"
              onClick={() =>
                setSelectedProject(projectsData.supermarketAnalytics)
              }
            >
              <div className="card-image">
                <img
                  src="https://images.unsplash.com/photo-1534723452862-4c874018d66d?q=80&w=2070&auto=format&fit=crop"
                  alt="Supermarket Analytics"
                  className="difference-card-img"
                />
              </div>
              <div className="card-content">
                <h3>Supermarket Analytics</h3>
                <p>AI-powered analytics solution for inventory optimization</p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      {/* Completed Projects Section */}
      <div className="lvc-difference-section">
        <div className="section-header">
          <h1>Completed Projects</h1>
          <p className="section-subtitle">Successfully delivered solutions</p>
        </div>

        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={30}
          slidesPerView={3}
          initialSlide={0}
          rewind={true}
          centeredSlides={false}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          className="difference-cards-swiper"
        >
          <SwiperSlide>
            <div
              className="difference-card"
              onClick={() => setSelectedProject(projectsData.liquorDelivery)}
            >
              <div className="card-image">
                <img
                  src={projectsData.liquorDelivery.image}
                  alt={projectsData.liquorDelivery.title}
                  className="difference-card-img"
                />
              </div>
              <div className="card-content">
                <h3>{projectsData.liquorDelivery.title}</h3>
                <p>Mobile-first platform for secure liquor delivery</p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div
              className="difference-card"
              onClick={() => setSelectedProject(projectsData.worksuite)}
            >
              <div className="card-image">
                <img
                  src={projectsData.worksuite.image}
                  alt={projectsData.worksuite.title}
                  className="difference-card-img"
                />
              </div>
              <div className="card-content">
                <h3>{projectsData.worksuite.title}</h3>
                <p>Comprehensive employee management system</p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div
              className="difference-card"
              onClick={() => setSelectedProject(projectsData.smsGateway)}
            >
              <div className="card-image">
                <img
                  src={projectsData.smsGateway.image}
                  alt={projectsData.smsGateway.title}
                  className="difference-card-img"
                />
              </div>
              <div className="card-content">
                <h3>{projectsData.smsGateway.title}</h3>
                <p>Robust platform for SMS communication integration</p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div
              className="difference-card"
              onClick={() => setSelectedProject(projectsData.carRental)}
            >
              <div className="card-image">
                <img
                  src={projectsData.carRental.image}
                  alt={projectsData.carRental.title}
                  className="difference-card-img"
                />
              </div>
              <div className="card-content">
                <h3>{projectsData.carRental.title}</h3>
                <p>Seamless car rental management platform</p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div
              className="difference-card"
              onClick={() => setSelectedProject(projectsData.tableTrack)}
            >
              <div className="card-image">
                <img
                  src={projectsData.tableTrack.image}
                  alt={projectsData.tableTrack.title}
                  className="difference-card-img"
                />
              </div>
              <div className="card-content">
                <h3>{projectsData.tableTrack.title}</h3>
                <p>Integrated restaurant order management system</p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div
              className="difference-card"
              onClick={() => setSelectedProject(projectsData.warehouseSystem)}
            >
              <div className="card-image">
                <img
                  src={projectsData.warehouseSystem.image}
                  alt={projectsData.warehouseSystem.title}
                  className="difference-card-img"
                />
              </div>
              <div className="card-content">
                <h3>{projectsData.warehouseSystem.title}</h3>
                <p>Advanced warehouse operations management solution</p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div
              className="difference-card"
              onClick={() => setSelectedProject(projectsData.crudFirebase)}
            >
              <div className="card-image">
                <img
                  src={projectsData.crudFirebase.image}
                  alt={projectsData.crudFirebase.title}
                  className="difference-card-img"
                />
              </div>
              <div className="card-content">
                <h3>{projectsData.crudFirebase.title}</h3>
                <p>Real-time data management system with Firebase</p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div
              className="difference-card"
              onClick={() => setSelectedProject(projectsData.nexTask)}
            >
              <div className="card-image">
                <img
                  src={projectsData.nexTask.image}
                  alt={projectsData.nexTask.title}
                  className="difference-card-img"
                />
              </div>
              <div className="card-content">
                <h3>{projectsData.nexTask.title}</h3>
                <p>Collaborative project management solution</p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div
              className="difference-card"
              onClick={() => setSelectedProject(projectsData.bookingHub)}
            >
              <div className="card-image">
                <img
                  src={projectsData.bookingHub.image}
                  alt={projectsData.bookingHub.title}
                  className="difference-card-img"
                />
              </div>
              <div className="card-content">
                <h3>{projectsData.bookingHub.title}</h3>
                <p>Comprehensive event management platform</p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div
              className="difference-card"
              onClick={() => setSelectedProject(projectsData.blackPOS)}
            >
              <div className="card-image">
                <img
                  src={projectsData.blackPOS.image}
                  alt={projectsData.blackPOS.title}
                  className="difference-card-img"
                />
              </div>
              <div className="card-content">
                <h3>{projectsData.blackPOS.title}</h3>
                <p>Advanced POS and inventory management solution</p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div
              className="difference-card"
              onClick={() => setSelectedProject(projectsData.parcelBox)}
            >
              <div className="card-image">
                <img
                  src={projectsData.parcelBox.image}
                  alt={projectsData.parcelBox.title}
                  className="difference-card-img"
                />
              </div>
              <div className="card-content">
                <h3>{projectsData.parcelBox.title}</h3>
                <p>Real-time inventory and sales management platform</p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div
              className="difference-card"
              onClick={() => setSelectedProject(projectsData.niftyEws)}
            >
              <div className="card-image">
                <img
                  src={projectsData.niftyEws.image}
                  alt={projectsData.niftyEws.title}
                  className="difference-card-img"
                />
              </div>
              <div className="card-content">
                <h3>{projectsData.niftyEws.title}</h3>
                <p>Comprehensive loan lifecycle management system</p>
              </div>
            </div>
          </SwiperSlide>

          {/* Add these slides after your existing completed project slides */}
          <SwiperSlide>
            <div
              className="difference-card"
              onClick={() => setSelectedProject(projectsData.emailBuilder)}
            >
              <div className="card-image">
                <img
                  src={projectsData.emailBuilder.image}
                  alt={projectsData.emailBuilder.title}
                  className="difference-card-img"
                />
              </div>
              <div className="card-content">
                <h3>{projectsData.emailBuilder.title}</h3>
                <p>No-code email template creation platform</p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div
              className="difference-card"
              onClick={() => setSelectedProject(projectsData.dentalCRM)}
            >
              <div className="card-image">
                <img
                  src={projectsData.dentalCRM.image}
                  alt={projectsData.dentalCRM.title}
                  className="difference-card-img"
                />
              </div>
              <div className="card-content">
                <h3>{projectsData.dentalCRM.title}</h3>
                <p>Complete dental practice management solution</p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div
              className="difference-card"
              onClick={() => setSelectedProject(projectsData.agriPortal)}
            >
              <div className="card-image">
                <img
                  src={projectsData.agriPortal.image}
                  alt={projectsData.agriPortal.title}
                  className="difference-card-img"
                />
              </div>
              <div className="card-content">
                <h3>{projectsData.agriPortal.title}</h3>
                <p>ML-powered agricultural management platform</p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div
              className="difference-card"
              onClick={() =>
                setSelectedProject(projectsData.studentPerformance)
              }
            >
              <div className="card-image">
                <img
                  src={projectsData.studentPerformance.image}
                  alt={projectsData.studentPerformance.title}
                  className="difference-card-img"
                />
              </div>
              <div className="card-content">
                <h3>{projectsData.studentPerformance.title}</h3>
                <p>ML-powered student performance prediction system</p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div
              className="difference-card"
              onClick={() => setSelectedProject(projectsData.timetable)}
            >
              <div className="card-image">
                <img
                  src={projectsData.timetable.image}
                  alt={projectsData.timetable.title}
                  className="difference-card-img"
                />
              </div>
              <div className="card-content">
                <h3>{projectsData.timetable.title}</h3>
                <p>Smart academic scheduling and resource management</p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div
              className="difference-card"
              onClick={() => setSelectedProject(projectsData.quiz)}
            >
              <div className="card-image">
                <img
                  src={projectsData.quiz.image}
                  alt={projectsData.quiz.title}
                  className="difference-card-img"
                />
              </div>
              <div className="card-content">
                <h3>{projectsData.quiz.title}</h3>
                <p>Engaging learning assessment platform</p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div
              className="difference-card"
              onClick={() => setSelectedProject(projectsData.fastnFitness)}
            >
              <div className="card-image">
                <img
                  src={projectsData.fastnFitness.image}
                  alt={projectsData.fastnFitness.title}
                  className="difference-card-img"
                />
              </div>
              <div className="card-content">
                <h3>{projectsData.fastnFitness.title}</h3>
                <p>AI-powered personalized fitness platform</p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div
              className="difference-card"
              onClick={() => setSelectedProject(projectsData.farmerCallCenter)}
            >
              <div className="card-image">
                <img
                  src={projectsData.farmerCallCenter.image}
                  alt={projectsData.farmerCallCenter.title}
                  className="difference-card-img"
                />
              </div>
              <div className="card-content">
                <h3>{projectsData.farmerCallCenter.title}</h3>
                <p>24/7 agricultural expert consultation system</p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div
              className="difference-card"
              onClick={() =>
                setSelectedProject(projectsData.cropRecommendation)
              }
            >
              <div className="card-image">
                <img
                  src={projectsData.cropRecommendation.image}
                  alt={projectsData.cropRecommendation.title}
                  className="difference-card-img"
                />
              </div>
              <div className="card-content">
                <h3>{projectsData.cropRecommendation.title}</h3>
                <p>ML-powered crop cultivation advisor</p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div
              className="difference-card"
              onClick={() => setSelectedProject(projectsData.torchIO)}
            >
              <div className="card-image">
                <img
                  src={projectsData.torchIO.image}
                  alt={projectsData.torchIO.title}
                  className="difference-card-img"
                />
              </div>
              <div className="card-content">
                <h3>{projectsData.torchIO.title}</h3>
                <p>Advanced medical image processing library</p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div
              className="difference-card"
              onClick={() => setSelectedProject(projectsData.plantex)}
            >
              <div className="card-image">
                <img
                  src={projectsData.plantex.image}
                  alt={projectsData.plantex.title}
                  className="difference-card-img"
                />
              </div>
              <div className="card-content">
                <h3>{projectsData.plantex.title}</h3>
                <p>Comprehensive plant and gardening marketplace</p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div
              className="difference-card"
              onClick={() => setSelectedProject(projectsData.farmKart)}
            >
              <div className="card-image">
                <img
                  src={projectsData.farmKart.image}
                  alt={projectsData.farmKart.title}
                  className="difference-card-img"
                />
              </div>
              <div className="card-content">
                <h3>{projectsData.farmKart.title}</h3>
                <p>Direct farmer-to-consumer marketplace platform</p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <TransformationStartsHere/>
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
      <Footer />
    </main>
  );
};

export default Projects;
