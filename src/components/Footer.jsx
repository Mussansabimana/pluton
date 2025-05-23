import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
      <footer className="bg-slate-800 shadow-xl">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-slate-400">Pluton</h3>
              <p className="mt-4 text-sm text-slate-500">
                Connecting students with companies for meaningful internship experiences.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold  text-slate-400">Quick Links</h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link to="/about" className="text-sm text-slate-500 hover:text-slate-400">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/login" className="text-sm text-slate-500 hover:text-slate-400">
                    Login
                  </Link>
                </li>
                <li>
                  <Link to="/register/student" className="text-sm text-slate-500 hover:text-slate-400  ">
                    Register
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-slate-400">Legal</h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link to="/privacy" className="text-sm text-slate-500 hover:text-slate-400">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/terms" className="text-sm text-slate-500 hover:text-slate-400">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-slate-400">
            <p className="text-sm text-slate-400 text-center">
              &copy; {new Date().getFullYear()} Pluton. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    );
}
  
export default Footer