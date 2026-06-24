import Footer from './footer'
import '../style.css'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/blogstyles.css';
function BlogPage() {
  // example blog posts

  const posts = [
    {
      id: 1,
      // title: "Welcome to LVC Solutions Blog",
       title: "Welcome to LVC Solutions Blog",
      date: "June 06, 2026",
      // content:
      //   "LVC Solutions is a technology-driven company specializing in Artificial Intelligence, Generative AI, Software Development, Cloud Solutions, Digital Transformation, and Business Innovation. We help organizations, startups, educational institutions, and professionals leverage technology to achieve sustainable growth and long-term success. In today,s rapidly evolving digital landscape, businesses require more than software solutions. They need strategic technology partners who understand their challenges, identify opportunities, and deliver scalable solutions that drive measurable outcomes. At LVC Solutions, we combine technical expertise, industry knowledge, and innovation to help organizations navigate digital transformation with confidence. Our services span custom software development, enterprise applications, AI-powered solutions, cloud engineering, automation, data analytics, product development, and technology consulting. By leveraging modern technologies and industry best practices, we build reliable, secure, and scalable solutions tailored to the unique needs of every client. Beyond technology services, LVC Solutions is committed to creating opportunities and building ecosystems that support career development, workforce transformation, entrepreneurship, and business growth. Through our platforms and initiatives, we connect students, professionals, universities, employers, startups, investors, and advisors to foster meaningful collaboration and innovation. Our growing ecosystem includes: LVC Fair Job A verified hiring and talent platform designed to improve trust, transparency, and efficiency in recruitment. By reducing fraudulent profiles, fake recruiters, and unverified organizations, LVC Fair Job creates a secure environment where employers and job seekers can connect with confidence. LVC Academy A career-focused learning and development platform that provides practical training, industry mentorship, internship opportunities, and hands-on project experience across emerging technologies and business disciplines. LVC Spotlight Media A digital media and branding division that helps businesses, startups, and professionals strengthen their online presence through strategic content creation, digital marketing, public relations, and brand storytelling. LVC Venture OS A startup support ecosystem designed to empower founders, investors, and advisors through mentorship, business guidance, networking opportunities, fundraising support, operational resources, and growth-focused services. At the heart of everything we do is a commitment to innovation, excellence, and impact. We believe technology should not only solve business problems but also create opportunities, accelerate growth, and improve outcomes for individuals and organizations alike. Our vision is to build a global ecosystem where technology, talent, entrepreneurship, and innovation converge to create lasting value. By empowering businesses, supporting emerging talent, and enabling startups to scale, we are helping shape the future of work, business, and digital transformation. Whether you are seeking advanced technology solutions, exploring career opportunities, building a startup, or looking to transform your organization through innovation, LVC Solutions is ready to help you achieve your goals. Partner with LVC Solutions and discover how technology, talent, and innovation can drive your next stage of growth."
      content: `

<h3>Transforming Businesses Through Technology, AI, Talent, and Innovation</h3>

<p>LVC Solutions is a technology-driven company specializing in Artificial Intelligence, Generative AI, Software Development, Cloud Solutions, Digital Transformation, and Business Innovation. We help organizations, startups, educational institutions, and professionals leverage technology to achieve sustainable growth and long-term success.</p>

<p>In today’s rapidly evolving digital landscape, businesses require more than software solutions. They need strategic technology partners who understand their challenges, identify opportunities, and deliver scalable solutions that drive measurable outcomes. At LVC Solutions, we combine technical expertise, industry knowledge, and innovation to help organizations navigate digital transformation with confidence.</p>

<p>Our services span custom software development, enterprise applications, AI-powered solutions, cloud engineering, automation, data analytics, product development, and technology consulting. By leveraging modern technologies and industry best practices, we build reliable, secure, and scalable solutions tailored to the unique needs of every client.</p>

<p>Beyond technology services, LVC Solutions is committed to creating opportunities and building ecosystems that support career development, workforce transformation, entrepreneurship, and business growth. Through our platforms and initiatives, we connect students, professionals, universities, employers, startups, investors, and advisors to foster meaningful collaboration and innovation.</p>

<h3>Our Growing Ecosystem</h3>

<h4>LVC Fair Job</h4>

<p>A verified hiring and talent platform designed to improve trust, transparency, and efficiency in recruitment. By reducing fraudulent profiles, fake recruiters, and unverified organizations, LVC Fair Job creates a secure environment where employers and job seekers can connect with confidence.</p>

<h4>LVC Academy</h4>

<p>A career-focused learning and development platform that provides practical training, industry mentorship, internship opportunities, and hands-on project experience across emerging technologies and business disciplines.</p>

<h4>LVC Spotlight Media</h4>

<p>A digital media and branding division that helps businesses, startups, and professionals strengthen their online presence through strategic content creation, digital marketing, public relations, and brand storytelling.</p>

<h4>LVC Venture OS</h4>

<p>A startup support ecosystem designed to empower founders, investors, and advisors through mentorship, business guidance, networking opportunities, fundraising support, operational resources, and growth-focused services.</p>

<h3>Our Commitment</h3>

<p>At the heart of everything we do is a commitment to innovation, excellence, and impact. We believe technology should not only solve business problems but also create opportunities, accelerate growth, and improve outcomes for individuals and organizations alike.</p>

<h3>Our Vision</h3>

<p>Our vision is to build a global ecosystem where technology, talent, entrepreneurship, and innovation converge to create lasting value. By empowering businesses, supporting emerging talent, and enabling startups to scale, we are helping shape the future of work, business, and digital transformation.</p>

<h3>Partner With Us</h3>

<p>Whether you are seeking advanced technology solutions, exploring career opportunities, building a startup, or looking to transform your organization through innovation, LVC Solutions is ready to help you achieve your goals.</p>

<p>Partner with LVC Solutions and discover how technology, talent, and innovation can drive your next stage of growth.</p>
`
      },
    {
      id: 2,
      title: "How Technology Helps Businesses Grow",
      date: "June 06, 2026",
      content:
        "From automation to data-driven decisions, technology is transforming businesses. At LVC Solutions, we help companies adapt and thrive."
    },
    {
      id: 3,
      title: "Our Commitment to Clients",
      date: "June 06, 2026",
      content:
        "We believe in building long-term relationships by providing reliable, scalable, and affordable solutions tailored to client needs."
    },
    // {
    //   id: 4,
    //   title: "Welcome to LVC Solutions Blog",
    //   date: "August 27, 2025",
    //   content:
    //     "At LVC Solutions, we provide innovative technology and business solutions. This blog is where we share updates, tips, and insights."
    // },
    // {
    //   id: 5,
    //   title: "How Technology Helps Businesses Grow",
    //   date: "August 20, 2025",
    //   content:
    //     "From automation to data-driven decisions, technology is transforming businesses. At LVC Solutions, we help companies adapt and thrive."
    // },
    // {
    //   id: 6,
    //   title: "Our Commitment to Clients",
    //   date: "August 10, 2025",
    //   content:
    //     "We believe in building long-term relationships by providing reliable, scalable, and affordable solutions tailored to client needs."
    // },
    // {
    //   id: 7,
    //   title: "Welcome to LVC Solutions Blog",
    //   date: "August 27, 2025",
    //   content:
    //     "At LVC Solutions, we provide innovative technology and business solutions. This blog is where we share updates, tips, and insights."
    // },
    // {
    //   id: 8,
    //   title: "How Technology Helps Businesses Grow",
    //   date: "August 20, 2025",
    //   content:
    //     "From automation to data-driven decisions, technology is transforming businesses. At LVC Solutions, we help companies adapt and thrive."
    // },
    // {
    //   id: 9,
    //   title: "Our Commitment to Clients",
    //   date: "August 10, 2025",
    //   content:
    //     "We believe in building long-term relationships by providing reliable, scalable, and affordable solutions tailored to client needs."
    // },
    // {
    //   id: 10,
    //   title: "Welcome to LVC Solutions Blog",
    //   date: "August 27, 2025",
    //   content:
    //     "At LVC Solutions, we provide innovative technology and business solutions. This blog is where we share updates, tips, and insights."
    // },
    // {
    //   id: 11,
    //   title: "How Technology Helps Businesses Grow",
    //   date: "August 20, 2025",
    //   content:
    //     "From automation to data-driven decisions, technology is transforming businesses. At LVC Solutions, we help companies adapt and thrive."
    // },
    // {
    //   id: 12,
    //   title: "Our Commitment to Clients",
    //   date: "August 10, 2025",
    //   content:
    //     "We believe in building long-term relationships by providing reliable, scalable, and affordable solutions tailored to client needs."
    // },
    // {
    //   id: 13,
    //   title: "Our Commitment to Clients",
    //   date: "August 10, 2025",
    //   content:
    //     "We believe in building long-term relationships by providing reliable, scalable, and affordable solutions tailored to client needs."
    // }
  ];
  //images


  const images = [
    {
      src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Website Maintenance & Support",
      title: "Website Maintenance & Support",
    },
    {
      src: "https://images.unsplash.com/photo-1726066012699-1c843dad5fd8?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "E-commerce Development",
      title: "E-commerce Development",
    },
    {
      src: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?q=80&w=2006&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Website Growth",
      title: "Website Growth",
    },

    {
      src: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Website Design",
      title: "Website Design",
    },
    {
      src: "https://images.pexels.com/photos/5473302/pexels-photo-5473302.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "Cybersecurity",
      title: "Cybersecurity",
    },
    {
      src: "https://images.pexels.com/photos/4508751/pexels-photo-4508751.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "Cloud",
      title: "Cloud",
    },
    {
      src: "https://images.pexels.com/photos/4709289/pexels-photo-4709289.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "Data & Analytics",
      title: "Data & Analytics",
    },
    {
      src: "https://images.pexels.com/photos/4491461/pexels-photo-4491461.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "Consulting",
      title: "Consulting",
    },

    {
      src: "https://images.pexels.com/photos/4065158/pexels-photo-4065158.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "Digital Transformation",
      title: "Digital Transformation",
    },
    {
      src: "https://images.pexels.com/photos/8438979/pexels-photo-8438979.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "Innovation",
      title: "Innovation",
    },
    {
      src: "https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "Artificial Intelligence",
      title: "Artificial Intelligence",
    },
    {
      src: "https://images.pexels.com/photos/4065158/pexels-photo-4065158.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "Cybersecurity",
      number: "1",
      title: "Is DeepSeek China's Sputnik Moment?",
      description: "IS DEEPSEEK",
    },
    {
      src: "https://images.pexels.com/photos/3810792/pexels-photo-3810792.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "Data & Analytics",
      number: "2",
      title: "Iot is transforming hospitals into smart environments",
      description: "IOT FOR HEALTH CARE ",
    },
    {
      src: "https://images.pexels.com/photos/8438979/pexels-photo-8438979.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "Digital Transformation",
      number: "3",
      title: "Six Takeaways From a Monumental Week for AI",
      description: "TAKEAWAYS FROM A DIRECTORY",
    }
  ];

  let [pageNumber, setPageNumber] = useState(1)
  let maxPages = Math.ceil(posts.length / 6)
  let offset = (pageNumber - 1) * 6

  // console.log(pageNumbernpm )

  //load different pages
  function pages(arrow) {
    if (arrow === 'left' && pageNumber > 1) {
      setPageNumber(prev => prev - 1)
    } else if (arrow === 'right' && pageNumber < maxPages) {
      setPageNumber(prev => prev + 1)
    }
  }

  return (
    <main className='blog-page'>
      <div className='blog-section-herobanner'>
        <div className='blog-container'>
          <div className='blog-content'>
            <p className="blog-subtitle">Blog</p>
            <hr className="underline" />
            <h1 className="blog-title" style={{fontSize:"48px"}}>LVC Solutions Blog</h1>
            <h5 className='blog-description'>Insights, updates, and ideas from our team.</h5>
          </div>
        </div>
      </div>

      <div className='blogs-container py-5 bg-black text-white'>
        <h1
          style={{ color: '#333', textAlign: 'start' }}
          className="blog-herotitle text-white"> Keep Up With Blogs  </h1>
        <hr className="underline-2" />

        <div className='blog-posts-container '>
          {posts.slice(offset, offset + 6).map((post) => (
            <article key={post.id} className="blog-posts text-white">
              <Link style={{ textDecoration: 'none', color: 'black' }} to={'/blog/' + post.id} state={{ post, image: images[post.id - 1] }}>
                <img className='blog-posts-imgs' src={images[post.id - 1].src} alt={images[post.id - 1].alt} />
                <h2 className='text-white'>{post.title}</h2>
                <small className='text-white  blog-date'>{post.date}</small>
                {/* {post.content.length > 110 ? (
                  <p className='blog-desc'>{post.content.slice(0,110)}... <br/><b style={{color:'light black'}}>Read more</b></p>
                ) : (
                  <p className='blog-desc'>{post.content}</p>
                )} */}
                {post.content.length > 110 ? (
  <p className='blog-desc'>
    {post.content.replace(/<[^>]*>/g, '').slice(0, 110)}...
    <br />
    <b>Read more</b>
  </p>
) : (
  <p className='blog-desc'>
    {post.content.replace(/<[^>]*>/g, '')}
  </p>
)}
              </Link>
            </article>
          ))}
        </div>
        <div className='blog-arrows'>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50" height="50"
            fill="currentColor"
            className="bi bi-arrow-left-short"
            viewBox="0 0 16 16"
            onClick={() => pages('left')}
          >
            <path fillRule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5" />
          </svg>
          <div className='blogs-page-number'>
            {pageNumber}
          </div>
          <svg xmlns="http://www.w3.org/2000/svg"
            width="50" height="50"
            fill="currentColor"
            className="bi bi-arrow-right-short"
            viewBox="0 0 16 16"
            onClick={() => pages('right')}
          >
            <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8" />
          </svg>
        </div>
      </div>
      <Footer />
    </main >
  );
}

export default BlogPage;
