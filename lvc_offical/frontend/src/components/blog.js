import Footer from './footer'
import '../style.css'
import { useState } from 'react';
import { Link } from 'react-router-dom'

function BlogPage() {
  // example blog posts

  const posts = [
    {
      id: 1,
      title: "Welcome to LVC Solutions Blog",
      date: "August 27, 2025",
      content:
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,'
    },
    {
      id: 2,
      title: "How Technology Helps Businesses Grow",
      date: "August 20, 2025",
      content:
        "From automation to data-driven decisions, technology is transforming businesses. At LVC Solutions, we help companies adapt and thrive."
    },
    {
      id: 3,
      title: "Our Commitment to Clients",
      date: "August 10, 2025",
      content:
        "We believe in building long-term relationships by providing reliable, scalable, and affordable solutions tailored to client needs."
    },
    {
      id: 4,
      title: "Welcome to LVC Solutions Blog",
      date: "August 27, 2025",
      content:
        "At LVC Solutions, we provide innovative technology and business solutions. This blog is where we share updates, tips, and insights."
    },
    {
      id: 5,
      title: "How Technology Helps Businesses Grow",
      date: "August 20, 2025",
      content:
        "From automation to data-driven decisions, technology is transforming businesses. At LVC Solutions, we help companies adapt and thrive."
    },
    {
      id: 6,
      title: "Our Commitment to Clients",
      date: "August 10, 2025",
      content:
        "We believe in building long-term relationships by providing reliable, scalable, and affordable solutions tailored to client needs."
    },
    {
      id: 7,
      title: "Welcome to LVC Solutions Blog",
      date: "August 27, 2025",
      content:
        "At LVC Solutions, we provide innovative technology and business solutions. This blog is where we share updates, tips, and insights."
    },
    {
      id: 8,
      title: "How Technology Helps Businesses Grow",
      date: "August 20, 2025",
      content:
        "From automation to data-driven decisions, technology is transforming businesses. At LVC Solutions, we help companies adapt and thrive."
    },
    {
      id: 9,
      title: "Our Commitment to Clients",
      date: "August 10, 2025",
      content:
        "We believe in building long-term relationships by providing reliable, scalable, and affordable solutions tailored to client needs."
    },
    {
      id: 10,
      title: "Welcome to LVC Solutions Blog",
      date: "August 27, 2025",
      content:
        "At LVC Solutions, we provide innovative technology and business solutions. This blog is where we share updates, tips, and insights."
    },
    {
      id: 11,
      title: "How Technology Helps Businesses Grow",
      date: "August 20, 2025",
      content:
        "From automation to data-driven decisions, technology is transforming businesses. At LVC Solutions, we help companies adapt and thrive."
    },
    {
      id: 12,
      title: "Our Commitment to Clients",
      date: "August 10, 2025",
      content:
        "We believe in building long-term relationships by providing reliable, scalable, and affordable solutions tailored to client needs."
    },
    {
      id: 13,
      title: "Our Commitment to Clients",
      date: "August 10, 2025",
      content:
        "We believe in building long-term relationships by providing reliable, scalable, and affordable solutions tailored to client needs."
    }
  ];
  //images


  const images = [
    {
      src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Website Maintenance and Support",
      title: "Website Maintenance and Support",
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
            <h1 className="blog-title">LVC Solutions Blog</h1>
            <h5>Insights, updates, and ideas from our team.</h5>
          </div>
        </div>
      </div>

      <div className='blogs-container py-5'>
        <h1
          style={{ color: '#333', textAlign: 'start' }}
          className="blog-herotitle"> Keep Up With Blogs  </h1>
        <hr className="underline-2" />

        <div className='blog-posts-container'>
          {posts.slice(offset, offset + 6).map((post) => (
            <article key={post.id} className="blog-posts">
              <Link style={{ textDecoration: 'none', color: 'black' }} to={'/blog/' + post.id} state={{ post, image: images[post.id - 1] }}>
                <img className='blog-posts-imgs' src={images[post.id - 1].src} alt={images[post.id - 1].alt} />
                <h2>{post.title}</h2>
                <small>{post.date}</small>
                {post.content.length > 110 ? (
                  <p>{post.content.slice(0,110)}... <br/><b style={{color:'light black'}}>Read more</b></p>
                ) : (
                  <p>{post.content}</p>
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
