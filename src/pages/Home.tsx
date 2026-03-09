import { useState, useEffect, useCallback } from "react"
import { Link } from "react-router-dom"
import { MapPin, Calendar, Users, ShieldCheck, Globe, Clock, Headset, Star, Quote } from "lucide-react"
import image from "../assets/hero.jpeg"
import BlogCard from "../components/BlogCard"
import axios from "axios";
// import { Router } from "react-router-dom";
import QuiltedImageList from "../components/ImageList";
import PackageCard from "../components/PackageCard";
import { packagesData } from "./Packages";

interface Blog {
    id: string;
    img: string;
    title: string;
    description: string;
}

const Home = () => {
    const [showAll, setShowAll] = useState(false)
    const [blogs, setBlogs] = useState<Blog[]>([])

    const fetchblogs = useCallback(async () => {


        try {

            const res = await axios.get("http://localhost:5000/blogs")
            console.log(res.data)



            const data = res.data

            setBlogs(data)

        } catch (error) {


            console.log(error)

        }





    }, []);


    useEffect(() => {
        fetchblogs();
    }, [fetchblogs]);


    const loadBlog = async (id: string) => {

        const res = await axios.get(`http://localhost:5000/blogs/${id}`)
        console.log(res.data)
        alert(res.data.title)





    }



    const displayedBlogs = showAll ? blogs : blogs.slice(0, 3)

    return (
        <div className="text-black bg-white flex justify-center items-center flex-col">
            <div className="relative w-full h-[100vh] overflow-hidden">
                <img
                    src={image}
                    alt="Hero"
                    className="absolute inset-0 w-full h-[90vh] object-cover"
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 w-full h-[90vh] bg-black/40 flex flex-col justify-center items-center">

                    <h1 className="text-white text-6xl text-center font-bold mogra-font px-4 uppercase">Inspiration for travel by real people</h1>
                    <p className="text-white text-xl font-bold mt-4 italic">Book Smart, Travel Simple</p>
                    <button className='text-black bg-white px-10 py-3 font-bold mt-10 hover:bg-gray-200 transition-all transform hover:scale-105 active:scale-95 shadow-lg' >Book Your Travel Now</button>

                </div>

            </div>

            {/* Booking area */}

            <div className="bg-white text-black flex flex-col md:flex-row justify-center items-stretch relative z-10 mt-[-15vh] shadow-2xl overflow-hidden w-[95vw] md:w-fit border border-black mx-auto">
                {/* Destination */}
                <div className="flex items-center gap-3 p-5 border-b md:border-b-0 md:border-r border-black min-w-full md:min-w-[200px] lg:min-w-[250px]">
                    <div className="bg-gray-100 p-2 rounded-lg">
                        <MapPin size={20} className="text-black" />
                    </div>
                    <div className="flex flex-col flex-1">
                        <label className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">Destination</label>
                        <select className="text-black bg-transparent font-bold outline-none cursor-pointer w-full text-sm md:text-base">
                            <option value="0">Select Destination</option>
                            <option value="1">Paris, France</option>
                            <option value="2">Kyoto, Japan</option>
                            <option value="3">Bali, Indonesia</option>
                        </select>
                    </div>
                </div>

                {/* Dates */}
                <div className="flex items-center gap-3 p-5 border-b md:border-b-0 md:border-r border-black min-w-full md:min-w-fit">
                    <div className="bg-gray-100 p-2 rounded-lg">
                        <Calendar size={20} className="text-black" />
                    </div>
                    <div className="flex flex-1 justify-between gap-2 md:gap-4">
                        <div className="flex flex-col flex-1">
                            <label className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">Check In</label>
                            <input type="date" className="bg-transparent font-bold outline-none cursor-pointer text-xs md:text-sm w-full" />
                        </div>
                        <div className="hidden sm:block border-r border-black h-8 self-end mx-1"></div>
                        <div className="flex flex-col flex-1">
                            <label className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">Check Out</label>
                            <input type="date" className="bg-transparent font-bold outline-none cursor-pointer text-xs md:text-sm w-full" />
                        </div>
                    </div>
                </div>

                {/* Members */}
                <div className="flex items-center gap-3 p-5 border-b md:border-b-0 md:border-r border-black min-w-full md:min-w-fit">
                    <div className="bg-gray-100 p-2 rounded-lg">
                        <Users size={20} className="text-black" />
                    </div>
                    <div className="flex flex-col flex-1">
                        <label className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">Travelers</label>
                        <input
                            type="number"
                            defaultValue={1}
                            min={1}
                            onInput={(e) => {
                                if (parseInt(e.currentTarget.value) < 1) e.currentTarget.value = "1";
                            }}
                            onKeyDown={(e) => {
                                if (["-", "e", "E", "+", "."].includes(e.key)) e.preventDefault();
                            }}
                            className="bg-transparent font-bold outline-none w-full md:w-16 text-sm"
                        />
                    </div>
                </div>

                {/* Submit */}
                <div className="flex justify-center p-5 items-center min-w-full md:min-w-fit bg-gray-50 md:bg-white">
                    <button className="w-full md:w-auto text-white bg-black px-8 lg:px-10 py-4 font-bold hover:bg-gray-800 transition-all transform hover:scale-105 active:scale-95 shadow-lg rounded-xl uppercase text-xs tracking-widest whitespace-nowrap">
                        Book Now
                    </button>
                </div>
            </div>

            {/* Why Choose Us Section */}
            <div className="w-full bg-gray-200 py-24 mt-[-10vh] px-4 md:px-10">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col items-center mb-16 text-center">
                        <h2 className="text-4xl md:text-5xl font-bold text-black mogra-font mb-4 uppercase tracking-tight">Why Choose Us</h2>
                        <div className="w-24 h-1.5 bg-black mb-6"></div>
                        <p className="text-gray-500 max-w-2xl text-lg">
                            We provide the best travel experiences with a focus on safety, local expertise, and 24/7 support.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
                        {[
                            { icon: <ShieldCheck size={40} />, title: "Secure Travel", desc: "Your safety is our top priority with verified stays and guides." },
                            { icon: <Globe size={40} />, title: "Worldwide Coverage", desc: "Explore over 50+ countries with our hand-picked local itineraries." },
                            { icon: <Clock size={40} />, title: "Flexible Dates", desc: "Easy booking and flexible cancellation policies for all packages." },
                            { icon: <Headset size={40} />, title: "24/7 Support", desc: "Our travel experts are always available to help you on your journey." }
                        ].map((service, index) => (
                            <div key={index} className="flex flex-col items-center text-center group cursor-default">
                                <div className="mb-6 p-5 bg-white rounded-2xl shadow-sm border border-gray-100 group-hover:bg-black group-hover:text-white transition-all duration-300 transform group-hover:-translate-y-2">
                                    {service.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                                <p className="text-gray-500 text-sm leading-relaxed">{service.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Blogs */}

            <div className="flex justify-center items-center py-12">
                <h1 className="text-black text-6xl text-center font-bold mogra-font px-4">Latest Travel Stories</h1>
            </div>


            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-auto mb-16 w-[90vw] z-10">


                {displayedBlogs.map((blog, index) => (
                    <BlogCard
                        key={index}
                        img={image}
                        title={blog.title}
                        description={blog.description}
                        onClick={() => loadBlog(blog.id)}
                        tags={["Travel", "Adventure"]}
                    />
                ))}

            </div>

            <div className="flex justify-center items-center pb-20">
                <button
                    onClick={() => setShowAll(!showAll)}
                    className="text-white bg-black px-12 py-4 font-bold rounded-full hover:bg-gray-800 transition-all transform hover:scale-105 active:scale-95 shadow-xl uppercase tracking-wider"
                >
                    {showAll ? "Show Less Stories" : "View All Stories"}
                </button>
            </div>

            {/* Parallax Promo Section */}
            <div
                className="w-full h-[40vh] relative flex justify-center items-center overflow-hidden mt-16 shadow-inner"
                style={{
                    backgroundImage: `url(${image})`,
                    backgroundAttachment: 'fixed',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover'
                }}
            >
                {/* Dark Contrast Overlay */}
                <div className="absolute inset-0 bg-black/40"></div>

                <h2 className="relative z-10 text-white text-4xl md:text-5xl font-bold uppercase mogra-font tracking-widest text-center px-4">
                    Ready for your next adventure?
                </h2>
            </div>


            {/* Adventure by Numbers (Stats) */}
            <div className="w-full bg-black py-20 px-4 md:px-10 mb-16">
                <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-10">
                    {[
                        { num: "12k+", label: "Happy Travelers" },
                        { num: "50+", label: "Countries Explored" },
                        { num: "200+", label: "Local Guides" },
                        { num: "99%", label: "Satisfaction Rate" }
                    ].map((stat, index) => (
                        <div key={index} className="flex flex-col items-center text-center">
                            <span className="text-4xl md:text-5xl font-bold text-white mogra-font mb-2">{stat.num}</span>
                            <span className="text-gray-400 uppercase tracking-widest text-[10px] font-bold">{stat.label}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Packages */}
            <div className="flex flex-col justify-center items-center gap-4">



                <h1 className="text-black text-6xl text-center font-bold mogra-font px-4 mt-10">Top Packages</h1>


                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-auto w-[90vw] z-10">
                    {packagesData
                        .filter((pkg) => pkg.isPopular)
                        .slice(0, 3)
                        .map((pkg, index) => (
                            <PackageCard
                                key={index}
                                {...pkg}
                                onSelect={() => console.log(`Selected ${pkg.title}`)}
                            />
                        ))}
                </div>

                <div className="flex justify-center items-center pb-20">
                    <Link to="/packages">
                        <button className="text-white bg-black px-12 py-4 font-bold rounded-full hover:bg-gray-800 transition-all transform hover:scale-105 active:scale-95 shadow-xl uppercase tracking-wider">
                            View All Packages
                        </button>
                    </Link>
                </div>
            </div>

            {/* Testimonials Section */}
            <div className="w-full bg-gray-200 py-24 px-4 md:px-10">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col items-center mb-16 text-center">
                        <h2 className="text-4xl md:text-5xl font-bold text-black mogra-font mb-4 uppercase tracking-tight">What Our Travelers Say</h2>
                        <div className="w-24 h-1.5 bg-black mb-6"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { name: "Sarah Johnson", loc: "London, UK", text: "The best trip I've ever had! The local guides were amazing and every detail was perfectly handled." },
                            { name: "Mark Davis", loc: "New York, USA", text: "Exceptional service and beautiful destinations. I've recommended this to all my friends and family." },
                            { name: "Elena Rodriguez", loc: "Madrid, Spain", text: "Perfectly organized and stress-free. The itineraries are thoughtfully curated for real exploration." }
                        ].map((rev, index) => (
                            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col relative overflow-hidden">
                                <Quote className="absolute top-4 right-4 text-gray-100" size={60} />
                                <div className="flex gap-1 mb-4">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} size={16} className="text-black fill-black" />
                                    ))}
                                </div>
                                <p className="text-gray-600 italic mb-6 relative z-10 leading-relaxed">"{rev.text}"</p>
                                <div className="mt-auto flex items-center gap-4">
                                    <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center font-bold text-gray-500">
                                        {rev.name[0]}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-black">{rev.name}</h4>
                                        <p className="text-gray-400 text-xs">{rev.loc}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="w-full h-auto flex flex-col justify-center items-center gap-4 mb-20 px-4">
                <h1 className="text-black text-6xl text-center font-bold mogra-font mt-10">Gallery</h1>
                <QuiltedImageList />
            </div>
        </div>
    )
}

export default Home
