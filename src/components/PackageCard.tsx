import { Check } from "lucide-react";

interface PackageProps {
    title: string;
    price: string;
    description: string;
    features: string[];
    image: string;
    isPopular?: boolean;
    onSelect?: () => void;
}

const PackageCard = ({ title, price, description, features, image, isPopular, onSelect }: PackageProps) => {
    return (
        <div className={`relative flex flex-col w-full bg-white border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-2xl group ${isPopular ? 'ring-2 ring-black' : ''}`}>
            {isPopular && (
                <div className="absolute top-0 right-0 bg-black text-white px-4 py-1 text-xs font-bold uppercase tracking-widest z-10">
                    Most Popular
                </div>
            )}

            <div className="relative h-44 overflow-hidden">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300" />
            </div>

            <div className="flex flex-col p-6 flex-grow">
                <div className="mb-4">
                    <h3 className="text-2xl font-bold text-black mb-1">{title}</h3>
                    <p className="text-gray-500 text-sm line-clamp-1">{description}</p>
                </div>

                <div className="mb-4">
                    <div className="flex items-baseline gap-1">
                        <span className="text-3xl font-bold text-black">{price}</span>
                        <span className="text-gray-400 text-xs">/ package</span>
                    </div>
                </div>

                <ul className="flex flex-col gap-2 mb-6 flex-grow">
                    {features.slice(0, 4).map((feature, index) => (
                        <li key={index} className="flex items-start gap-3 text-sm text-gray-600">
                            <span className="mt-0.5 bg-black rounded-full p-0.5 flex-shrink-0">
                                <Check size={12} className="text-white" />
                            </span>
                            <span className="line-clamp-1">{feature}</span>
                        </li>
                    ))}
                </ul>

                <button
                    onClick={onSelect}
                    className={`w-full py-4 px-6 font-bold uppercase tracking-widest transition-all duration-300 ${isPopular
                        ? 'bg-black text-white hover:bg-gray-800'
                        : 'bg-white text-black border border-black hover:bg-black hover:text-white'
                        }`}
                >
                    Get Started
                </button>
            </div>
        </div>
    );
};

export default PackageCard;
