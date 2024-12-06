import { FaFacebook, FaGithub, FaLinkedin, FaPaperPlane } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useForm } from '@formspree/react';
import Swal from "sweetalert2";
import { motion } from "framer-motion";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const Info = () => {
    const [state, handleSubmit] = useForm("xdknperk");

    const onSubmit = async (event) => {
        event.preventDefault();
        try {
            await handleSubmit(event);
            if (state.succeeded) {              
                Swal.fire({
                    icon: 'success',
                    title: 'Success!',
                    text: 'Your message has been sent.',
                    confirmButtonText: 'OK',
                }).then(() => {
                    event.target.reset();
                });
            } 
        } catch {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong! Please try again.',
                confirmButtonText: 'OK',
            });
        }
    };

    return (
        <div >
            <Navbar/>
            <div className="container mx-auto py-20 px-4">
            <motion.h1 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-8 text-4xl lg:text-3xl font-bold text-lemon-20 dark:text-white text-center"
            >
                Lets Work Together
            </motion.h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <motion.section 
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-8"
                >
                    <h2 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-white">Get in Touch</h2>
                    <p className="mb-8 text-gray-600 dark:text-gray-300">
                        To get in touch with us, please fill out this form. We will get back to you shortly.
                    </p>
                    <form onSubmit={onSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                    Your Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="w-full px-3 py-2 text-gray-900 bg-gray-100 rounded-lg focus:ring-2 focus:ring-lemon-20 focus:outline-none transition duration-300"
                                    placeholder="John Doe"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                    Your Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="w-full px-3 py-2 text-gray-900 bg-gray-100 rounded-lg focus:ring-2 focus:ring-lemon-20 focus:outline-none transition duration-300"
                                    placeholder="john@example.com"
                                    required
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                Subject
                            </label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                className="w-full px-3 py-2 text-gray-900 bg-gray-100 rounded-lg focus:ring-2 focus:ring-lemon-20 focus:outline-none transition duration-300"
                                placeholder="Let us know how we can help you"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
                                Your Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                rows="4"
                                className="w-full px-3 py-2 text-gray-900 bg-gray-100 rounded-lg focus:ring-2 focus:ring-lemon-20 focus:outline-none transition duration-300"
                                placeholder="Leave a comment..."
                                required
                            ></textarea>
                        </div>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            disabled={state.submitting}
                            type="submit"
                            className="w-full bg-slate-900 flex items-center justify-center gap-2 bg-hello-10 text-white py-3 px-6 rounded-lg font-medium text-lg transition duration-300 hover:bg-lemon-20 focus:outline-none focus:ring-2 focus:ring-lemon-20 focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            <FaPaperPlane className="text-xl" />
                            <span>Send Message</span>
                        </motion.button>
                    </form>
                </motion.section>
                <motion.section 
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-8"
                >
                    <h2 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-white">Contact Information</h2>
                    <div className="space-y-4 mb-8">
                        <p className="flex items-center text-gray-600 dark:text-gray-300">
                            <FaPaperPlane className="mr-3 text-hello-10" />
                            info@example.com
                        </p>
                        <p className="flex items-center text-gray-600 dark:text-gray-300">
                            <FaGithub className="mr-3 text-hello-10" />
                            github.com/yourcompany
                        </p>
                        <p className="flex items-center text-gray-600 dark:text-gray-300">
                            <FaLinkedin className="mr-3 text-hello-10" />
                            linkedin.com/company/yourcompany
                        </p>
                    </div>
                    <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Follow Us</h3>
                    <div className="flex space-x-4">
                        <Link to="#" className="text-hello-10 hover:text-lemon-20 transition duration-300">
                            <FaFacebook className="text-2xl" />
                        </Link>
                        <Link to="#" className="text-hello-10 hover:text-lemon-20 transition duration-300">
                            <FaGithub className="text-2xl" />
                        </Link>
                        <Link to="#" className="text-hello-10 hover:text-lemon-20 transition duration-300">
                            <FaLinkedin className="text-2xl" />
                        </Link>
                    </div>
                    <div>
              <h2 className="text-2xl font-semibold mb-6 text-gray-800">Our Location</h2>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2412648750455!2d-73.98784368459253!3d40.74844097932847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1629794729405!5m2!1sen!2sus"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>
            </div>
                </motion.section>
            </div>
            </div>
            <Footer/>
        </div>
    );
};

export default Info;

