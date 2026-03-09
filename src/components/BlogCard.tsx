
const BlogCard = ({ img, title, description, onClick, tags }: { img: string, title: string, description: string, onClick: () => void, tags: string[] }) => {

    return (

        <div className="w-full h-full box-shadow text-black p-3 flex bg-white flex-col gap-4 transition-shadow duration-300 relative group overflow-hidden">

            <div className="relative overflow-hidden">
                <img src={img} className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500" alt={title} />
                <div className="absolute top-3 left-3 flex gap-2 flex-wrap">
                    {tags.map((tag, index) => (
                        <span key={index} className="backdrop-blur-md bg-white/30 border border-white/40 text-white text-[10px] px-3 py-1 font-bold uppercase tracking-wider shadow-sm">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>


            <div className="flex flex-col gap-2 flex-grow">
                <h3 className="font-bold text-xl leading-tight">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
            </div>


            <div  className=" flex">

                
            <button className="bg-white text-black font-bold hover:bg-black hover:text-white transition-all duration  border-b bg-white text-start" onClick={onClick}>View Post</button>

            </div>


        </div>

    )


}

export default BlogCard;