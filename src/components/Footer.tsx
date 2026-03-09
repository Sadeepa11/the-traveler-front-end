import { Link } from "react-router-dom";
import { Instagram, Twitter, Facebook, Mail, Phone, MapPin, Send } from "lucide-react";
import Logo from "../assets/logo.png";

const Footer = () => {
    return (
        <footer className="bg-black text-white pt-20 pb-10 px-4 md:px-10">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                {/* Brand Section */}
                <div className="flex flex-col gap-6">
                    <div className="flex items-center gap-3">
                        <img src={Logo} alt="Logo" className="w-10 h-10 bg-white p-1 rounded-md object-contain" />
                        <h2 className="text-3xl font-bold mogra-font tracking-wider">ADVENTURE.</h2>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed">
                        Explore the world's most beautiful destinations with hand-picked itineraries and local experts. Your journey begins with a single click.
                    </p>
                    <div className="flex gap-4">
                        <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-white/20 transition-all">
                            <Instagram size={20} />
                        </a>
                        <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-white/20 transition-all">
                            <Twitter size={20} />
                        </a>
                        <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-white/20 transition-all">
                            <Facebook size={20} />
                        </a>
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-lg font-bold mb-6 uppercase tracking-widest">Quick Links</h3>
                    <ul className="flex flex-col gap-4 text-gray-400 text-sm">
                        <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
                        <li><Link to="/packages" className="hover:text-white transition-colors">Packages</Link></li>
                        <li><Link to="/blog" className="hover:text-white transition-colors">Travel Stories</Link></li>
                        <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
                        <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h3 className="text-lg font-bold mb-6 uppercase tracking-widest">Contact Us</h3>
                    <ul className="flex flex-col gap-4 text-gray-400 text-sm">
                        <li className="flex items-center gap-3">
                            <Phone size={18} className="text-white" />
                            <span>+1 (234) 567-8900</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <Mail size={18} className="text-white" />
                            <span>hello@adventure.blog</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <MapPin size={18} className="text-white" />
                            <span>123 Journey Lane, Explorer City</span>
                        </li>
                    </ul>
                </div>

                {/* Newsletter */}
                <div>
                    <h3 className="text-lg font-bold mb-6 uppercase tracking-widest">Newsletter</h3>
                    <p className="text-gray-400 text-sm mb-6">
                        Subscribe to get updates on new destinations and travel tips.
                    </p>
                    <form className="flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
                        <div className="relative">
                            <input
                                type="email"
                                placeholder="Your email"
                                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-white/30 transition-all text-sm"
                            />
                            <button className="absolute right-2 top-1.5 p-1.5 bg-white text-black rounded-md hover:bg-gray-200 transition-all">
                                <Send size={16} />
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="max-w-7xl mx-auto pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 font-medium">
                <p>© 2026 ADVENTURE BLOG. ALL RIGHTS RESERVED.</p>
                <div className="flex gap-8">
                    <a href="#" className="hover:text-white transition-colors uppercase">Privacy Policy</a>
                    <a href="#" className="hover:text-white transition-colors uppercase">Terms of Service</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
