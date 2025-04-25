import React from "react";
import Navigation from "../components/Navigation";

const About = () => {
  return (
    <>
    <Navigation />
      <div className="bg-gradient-to-tr from-blue-500 via-indigo-500 to-violet-500/30">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base font-semibold text-blue-700 tracking-wide uppercase mb-3">About Us</h2>
            <p className="mt-1 text-2xl font-bold text-gray-900 sm:text-3xl sm:tracking-tight lg:text-4xl">
              <span className="text-blue-700">Pluton</span> is Internship Management System
            </p>
            <p className="max-w-xl mt-5 mx-auto text-lg text-white/90">
              Connecting students with companies for meaningful internship experiences.
            </p>
          </div>
  
          <div className="mt-20 bg-white/70 backdrop-blur-lg rounded-3xl">
            <div className="rounded-3xl shadow-xl overflow-hidden">
              <div className="relative py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
                <div className="relative max-w-7xl mx-auto">
                  <div className="text-center">
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                      Our Mission
                    </h2>
                    <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
                      To bridge the gap between academic learning and professional experience.
                    </p>
                  </div>
  
                  <div className="mt-12">
                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                      {[
                        {
                          name: 'For Students',
                          description: 'We help students find internships that match their skills and career goals.',
                          icon: '🎓',
                        },
                        {
                          name: 'For Companies',
                          description: 'We help companies find talented interns who can contribute to their teams.',
                          icon: '🏢',
                        },
                        {
                          name: 'For Institutions',
                          description: 'We provide tools for educational institutions to track student progress.',
                          icon: '📚',
                        },
                      ].map((feature) => (
                        <div key={feature.name} className="pt-6">
                          <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8 h-full">
                            <div className="-mt-6">
                              <div>
                                <span className="inline-flex items-center justify-center p-3 bg-blue-500 rounded-md shadow-lg text-white text-2xl">
                                  {feature.icon}
                                </span>
                              </div>
                              <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                                {feature.name}
                              </h3>
                              <p className="mt-5 text-base text-gray-500">
                                {feature.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
  
          <div className="mt-20 bg-blue-50 rounded-3xl p-8">
            <h2 className="text-2xl font-bold text-gray-900">Our Team</h2>
            <p className="mt-4 text-gray-600">
              We're a dedicated team of educators, developers, and career advisors committed to making the internship process seamless for everyone involved.
            </p>
          </div>
  
          <div className="mt-20 bg-white/70 backdrop-blur-lg rounded-3xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-gray-900">Contact Us</h2>
            <p className="mt-4 text-gray-600">
              Have questions? Reach out to our support team at support@Pluton.com
            </p>
          </div>
        </div>
      </div>
    </>
    );
}
  
export default About