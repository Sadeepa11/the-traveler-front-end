import PackageCard from "../components/PackageCard";
import heroImage from "../assets/hero.jpeg";

export const packagesData = [
    {
        title: "Standard Break",
        price: "$49",
        description: "Perfect for a quick escape and basic discovery.",
        image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
        isPopular: true,
        features: [
            "2-day trip planning",
            "Basic accommodation listing",
            "Public transport guide",
            "Email support"
        ]
    },
    {
        title: "Explorer Plus",
        price: "$99",
        description: "Our most popular choice for avid travelers.",
        image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e",
        isPopular: true,
        features: [
            "5-day detailed itinerary",
            "Hand-picked hotel bookings",
            "24/7 Concierge support",
            "Restaurant reservations",
            "Hidden gems locations"
        ]
    },
    {
        title: "Luxury Retreat",
        price: "$249",
        description: "The ultimate premium experience for connoisseurs.",
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
        isPopular: true,
        features: [
            "10-day bespoke journey",
            "Luxury resort access",
            "Private chauffeur",
            "VIP lounge access",
            "Professional photographer",
            "Gourmet dining experiences"
        ]
    },
    {
        title: "Luxury Retreat",
        price: "$249",
        description: "The ultimate premium experience for connoisseurs.",
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
        isPopular: false,
        features: [
            "10-day bespoke journey",
            "Luxury resort access",
            "Private chauffeur",
            "VIP lounge access",
            "Professional photographer",
            "Gourmet dining experiences"
        ]
    },
    {
        title: "Luxury Retreat",
        price: "$249",
        description: "The ultimate premium experience for connoisseurs.",
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
        isPopular: false,
        features: [
            "10-day bespoke journey",
            "Luxury resort access",
            "Private chauffeur",
            "VIP lounge access",
            "Professional photographer",
            "Gourmet dining experiences"
        ]
    }

];

const Packages = () => {
    return (
        <div className="w-full bg-white">
            {/* Hero Section */}
            <div className="relative w-full h-[60vh] overflow-hidden">
                <img
                    src={heroImage}
                    alt="Packages Hero"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center px-4">
                    <h1 className="text-white text-5xl md:text-7xl font-bold mogra-font uppercase tracking-wider mb-4">
                        Travel Packages
                    </h1>
                    <div className="w-24 h-1.5 bg-white mb-6"></div>
                    <p className="text-white text-lg md:text-xl max-w-2xl font-medium italic opacity-90">
                        Choose the perfect adventure tailored to your needs.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto py-20 px-4 md:px-10">
                <div className="flex flex-col items-center mb-16 text-center">
                    <p className="text-gray-500 max-w-2xl text-lg">
                        From quick escapes to bespoke luxury journeys, we have it all. Discover our hand-picked selections below.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {packagesData.map((pkg, index) => (
                        <PackageCard
                            key={index}
                            {...pkg}
                            onSelect={() => console.log(`Selected ${pkg.title}`)}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Packages
