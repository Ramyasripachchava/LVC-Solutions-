import { useEffect, useState, useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";


function BlogArticle() {
    const location = useLocation()
    const { post, image } = location.state || {}
    const [sec, setSec] = useState(8)
    let navigate = useNavigate()

    let redirect = useCallback(() => {
        navigate('/blog', { replace: true })
    }, [navigate])

    useEffect(() => {
        let timer
        if (!post) {
            setTimeout(redirect, 8000)
            timer = setInterval(() => {
                setSec(prevSec => prevSec - 1);
            }, 1000)
        }

        return () => clearInterval(timer)
    }, [post, redirect])

    // console.log(sec)

    return (
        <div className='blog-post-container bg-white'>
            {post ? (
                <div >
                    {/* <div className='blog-section-herobanner' style={{backgroundImage:`url(${image.src}`}}>
                        <div className='blog-container'>
                            <div className='blog-content'>
                                <p className="blog-subtitle">Blog</p>
                                <hr className="underline" />
                                <h1 className="blog-title">LVC Solutions Blog</h1>
                                <h5>Insights, updates, and ideas from our team.</h5>
                            </div>
                        </div>
                    </div> */}
                    <div className='blog-post-img-container'>
                        <img className='blog-post-img' alt={image.alt} src={image.src} />
                    </div>
                    <div className='blog-post-headings'>
                        <h2>{post.title}</h2>
                        <p>{post.date}</p>
                    </div>

                    <div className='blog-post-content'>
                        <p style={{ color: '#232323ff' }}>{post.content}</p>
                    </div>
                </div>

            ) : (
                <div className='blog-post-error' style={{ backgroundColor: 'black', textAlign: 'center' }}>
                    <div className='blog-post-error-content'>
                        <p style={{ color: 'white', fontSize: '1.5vmax' }}>I'm sorry, it seems that there was a problem
                            <br /> you will be redirected back to the blogs page in
                            <br /> {sec} {sec === 1 ? <>second</> : <>seconds</>}</p>
                        <button onClick={redirect} className="btn spotlight-media-button">Redirect Now</button>
                    </div>

                </div>

            )}
        </div>
    )
}


export default BlogArticle;
