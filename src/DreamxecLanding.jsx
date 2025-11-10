import React, { useState } from 'react';
import { Rocket, Mail, Phone, User, CheckCircle } from 'lucide-react';
import { motion } from "framer-motion";


export default function DreamXecLanding() {
    const [submitted, setSubmitted] = useState(false);
    const [formData, setFormData] = useState({ name: '', email: '', phone: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async () => {
        if (formData.name && formData.email && formData.phone) {
            setIsSubmitting(true);
            try {
                await fetch('https://script.google.com/macros/s/AKfycby_p1TeYo2dBxqYADkXerQQRwofbksILhlWIR6kME5npase3TluuWYvouENbRSDMaFt0w/exec', {
                    method: 'POST',
                    mode: 'no-cors',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        name: formData.name,
                        email: formData.email,
                        phone: formData.phone
                    })
                });

                setSubmitted(true);
            } catch (error) {
                console.error('Error submitting form:', error);
                setSubmitted(true);
            } finally {
                setIsSubmitting(false);
            }
        } else {
            alert('Please fill in all fields');
        }
    };

    const handleChange = (field, value) =>
        setFormData({ ...formData, [field]: value });

    if (submitted) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-green-50 flex items-center justify-center p-4">
                <div className="max-w-2xl w-full text-center space-y-8">
                    <div className="inline-block p-4 bg-green-100 rounded-full">
                        <CheckCircle className="w-16 h-16 text-green-600" />
                    </div>

                    <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
                        Thank You!
                    </h1>

                    <p className="text-xl text-gray-600">
                        We've received your information
                    </p>

                    <div className="bg-white flex flex-col items-center rounded-2xl shadow-xl p-8 border-2 border-orange-200">
                        <p className="text-lg text-gray-700 mb-6">
                            To help us serve you better, please fill out our detailed form below :
                        </p>

                        <a
                            href="https://forms.gle/kSK2eeMcsaHLE4tX7"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold px-8 py-4 rounded-xl hover:from-orange-600 hover:to-orange-700 transition-all transform hover:scale-105 shadow-lg"
                        >
                            Fill This Form to Help Us Help You (For Students)
                        </a>

                        <a
                            href="https://forms.gle/KWwgYVtXJVhxwGNJ7"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block mt-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold px-8 py-4 rounded-xl hover:from-orange-600 hover:to-orange-700 transition-all transform hover:scale-105 shadow-lg"
                        >
                            Fill This Form to Help Us Help You (For Donors)
                        </a>

                        <div className="mt-8 pt-6 border-t-2 border-green-200">
                            <p className="text-sm font-medium text-gray-600 italic">
                                "Research karega India,<br />Toh Badhega India"
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-green-50">
            <header className="relative flex flex-col items-center justify-center pt-10 pb-6 md:pt-14 md:pb-8 text-center overflow-hidden">

                {/* Animated logo */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="z-10 mb-2 md:mb-4"
                >
                    <img
                        src="/dx-logo-2.png"
                        alt="DreamXec Logo"
                        className="w-56 h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 object-contain mx-auto"
                    />
                </motion.div>

                {/* Animated “Coming Soon” text */}
                <motion.h1
                    initial={{ opacity: 0, scale: 1.2 }}
                    animate={{ opacity: [1, 1, 1], scale: [1.1, 1, 1.1] }}
                    transition={{
                        duration: 6,
                        ease: "easeInOut",
                        repeat: Infinity,
                    }}
                    className="text-[12vw] md:text-[8vw] font-extrabold text-blue-100 md:text-blue-200 leading-none tracking-tight"
                >
                    Coming Soon
                </motion.h1>
            </header>


            <main className="max-w-6xl mx-auto px-4 py-4 md:py-8">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <span className="bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-semibold inline-block">
                            Let's Get Started
                        </span>

                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
                            Launch Your Dreams with{' '}
                            <span className="bg-gradient-to-r from-orange-500 to-green-500 bg-clip-text text-transparent">
                                DreamXec
                            </span>
                        </h2>

                        <p className="text-xl text-gray-600 leading-relaxed">
                            Join us in building something extraordinary. Share your details
                            and let's start this journey together.
                        </p>

                        <div className="pt-4">
                            <p className="text-lg font-medium text-gray-700 italic border-l-4 border-orange-500 pl-4 bg-orange-50 py-3 rounded">
                                "Research karega India,<br />Toh Badhega India"
                            </p>
                        </div>
                    </div>

                    <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-10 border-2 border-orange-100">
                        <h3 className="text-2xl font-bold text-gray-800 mb-6">
                            Get in Touch
                        </h3>

                        <div className="space-y-5">
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Your Name
                                </label>
                                <div className="relative">
                                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                    <input
                                        type="text"
                                        value={formData.name}
                                        onChange={(e) => handleChange('name', e.target.value)}
                                        placeholder="Vaibhav Kumar"
                                        className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:outline-none transition-colors"
                                        disabled={isSubmitting}
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Are you Student or Donor?
                                </label>
                                <div className="relative">
                                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                    <input
                                        type="text"
                                        value={formData.role}
                                        onChange={(e) => handleChange('role', e.target.value)}
                                        placeholder="Student / Donor / Mentor / Corporate"
                                        className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:outline-none transition-colors"
                                        disabled={isSubmitting}
                                    />
                                </div>
                            </div>


                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Email Address
                                </label>
                                <div className="relative">
                                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                    <input
                                        type="email"
                                        value={formData.email}
                                        onChange={(e) => handleChange('email', e.target.value)}
                                        placeholder="vaibhav@example.com"
                                        className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:outline-none transition-colors"
                                        disabled={isSubmitting}
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Phone Number
                                </label>
                                <div className="relative">
                                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                    <input
                                        type="tel"
                                        value={formData.phone}
                                        onChange={(e) => handleChange('phone', e.target.value)}
                                        placeholder="+91 98765 43210"
                                        className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:outline-none transition-colors"
                                        disabled={isSubmitting}
                                    />
                                </div>
                            </div>

                            <button
                                onClick={handleSubmit}
                                disabled={isSubmitting}
                                className="w-full bg-gradient-to-r from-orange-500 via-orange-600 to-green-500 text-white font-bold py-4 rounded-xl hover:shadow-xl transition-all transform hover:scale-105 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? 'Submitting...' : 'Submit'}
                                <Rocket className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </div>
            </main>

            <footer className="text-center py-8 text-gray-500 text-sm">
                <p>© 2025 DreamXec. All rights reserved.</p>
            </footer>
        </div>
    );
}
