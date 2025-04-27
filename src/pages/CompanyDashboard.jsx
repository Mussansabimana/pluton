import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  BriefcaseIcon,
  UsersIcon,
  DocumentTextIcon,
  ChartBarIcon,
  BellIcon,
  Cog6ToothIcon,
  BuildingOfficeIcon,
} from "@heroicons/react/24/outline";
import { useAuth } from "../context/AuthContext";
import PlutonLogo from "../assets/PlutonLogo.png";

export default function CompanyDashboard() {
  const [activeTab, setActiveTab] = useState("internships");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const navItems = [
    { id: "internships", name: "Internships", icon: BriefcaseIcon },
    { id: "applicants", name: "Applicants", icon: UsersIcon },
    { id: "reports", name: "Reports", icon: DocumentTextIcon },
    { id: "analytics", name: "Analytics", icon: ChartBarIcon },
  ];

  const { logout } = useAuth();

  const handleLogout = async () => {
    await logout("company");
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md shadow-sm fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="md:hidden text-gray-700 hover:text-blue-600 mr-2"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
              <Link
                to="/"
                className="flex-shrink-0 text-2xl md:text-3xl lg:text-4xl font-bold text-blue-600"
              >
                <img className="h-9" src={PlutonLogo} alt="logo" />
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-2 rounded-full hover:bg-blue-50 text-gray-700">
                <BellIcon className="h-5 w-5" />
              </button>
              <button className="p-2 rounded-full hover:bg-blue-50 text-gray-700">
                <Cog6ToothIcon className="h-5 w-5" />
              </button>
              <div className="h-8 w-8 rounded-full bg-gradient-to-r hover:shadow-xl from-blue-500 to-indigo-600 flex items-center justify-center text-white font-semibold">
                <BuildingOfficeIcon className="h-5 w-5" />
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Sidebar  and mainContent*/}
      <div className=" relative flex min-h-max h-full">
        {/* Sidebar */}
        <div
          className={`fixed inset-y-0 left-0 transform ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          } md:relative md:translate-x-0 transition-transform duration-200 ease-in-out z-40 w-64 bg-white/70 backdrop-blur-md shadow-lg md:shadow-none`}
        >
          <div className="h-full pt-20 pb-6 flex flex-col">
            <div className="flex-1 px-4 space-y-4">
              <div className="p-4 bg-blue-50 rounded-lg">
                <h3 className="text-sm font-medium text-blue-800">
                  Welcome back,
                </h3>
                <p className="text-lg font-semibold text-gray-900">Acme Inc.</p>
                <p className="text-sm text-gray-500">Technology Company</p>
              </div>

              <nav className="space-y-1">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`w-full flex items-center px-4 py-3 rounded-lg transition-all ${
                      activeTab === item.id
                        ? "bg-blue-100 text-blue-600"
                        : "text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                    }`}
                  >
                    <item.icon className="h-5 w-5 mr-3" />
                    <span>{item.name}</span>
                  </button>
                ))}
              </nav>
            </div>
            <div className="px-4 py-4 border-t border-gray-200">
              <button
                onClick={handleLogout}
                className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
              >
                Log Out
              </button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <main className=" pt-16 pb-10 flex-grow h-screen overflow-auto">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white/70 backdrop-blur-lg rounded-3xl shadow-xl p-6 mt-6">
              <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold text-gray-900">
                  {navItems.find((item) => item.id === activeTab)?.name}
                </h1>
                {activeTab === "internships" && (
                  <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700">
                    Create New Internship
                  </button>
                )}
              </div>

              {activeTab === "internships" && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[1, 2, 3].map((item) => (
                    <div
                      key={item}
                      className="bg-white/80 backdrop-blur-sm rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow"
                    >
                      <div className="p-6">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 bg-blue-500 rounded-md p-3">
                            <BriefcaseIcon className="h-6 w-6 text-white" />
                          </div>
                          <div className="ml-4">
                            <h3 className="text-lg font-medium text-gray-900">
                              Software Developer Intern
                            </h3>
                            <p className="text-sm text-gray-500">Spring 2023</p>
                          </div>
                        </div>
                        <div className="mt-4">
                          <div className="flex justify-between text-sm text-gray-600">
                            <span>Applications: 24</span>
                            <span>Positions: {item}</span>
                          </div>
                        </div>
                        <div className="mt-6 flex justify-between items-center">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                            Active
                          </span>
                          <div className="space-x-2">
                            <button className="inline-flex items-center px-3 py-1 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700">
                              View
                            </button>
                            <button className="inline-flex items-center px-3 py-1 border border-gray-300 text-sm font-medium rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50">
                              Edit
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === "applicants" && (
                <div className="overflow-hidden">
                  <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-md overflow-hidden border border-gray-100">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Applicant
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Position
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Status
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Applied
                          </th>
                          <th scope="col" className="relative px-6 py-3">
                            <span className="sr-only">Actions</span>
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {[1, 2, 3, 4, 5].map((item) => (
                          <tr key={item} className="hover:bg-gray-50">
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="flex items-center">
                                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                                  <span className="text-blue-600 font-medium">
                                    JD
                                  </span>
                                </div>
                                <div className="ml-4">
                                  <div className="text-sm font-medium text-gray-900">
                                    John Doe {item}
                                  </div>
                                  <div className="text-sm text-gray-500">
                                    Computer Science
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-gray-900">
                                Software Developer
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span
                                className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                                  item === 1
                                    ? "bg-blue-100 text-blue-800"
                                    : item === 2
                                    ? "bg-yellow-100 text-yellow-800"
                                    : "bg-green-100 text-green-800"
                                }`}
                              >
                                {item === 1
                                  ? "New"
                                  : item === 2
                                  ? "Review"
                                  : "Interview"}
                              </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              {new Date(
                                Date.now() - item * 86400000
                              ).toLocaleDateString()}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                              <button className="text-blue-600 hover:text-blue-900">
                                View
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {activeTab === "reports" && (
                <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-md overflow-hidden border border-gray-100 p-6">
                  <h2 className="text-lg font-medium text-gray-900 mb-6">
                    Internship Reports
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                      "Performance",
                      "Attendance",
                      "Feedback",
                      "Completion",
                    ].map((report, index) => (
                      <div
                        key={report}
                        className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
                      >
                        <div className="flex items-center">
                          <div
                            className={`flex-shrink-0 p-3 rounded-md ${
                              index === 0
                                ? "bg-blue-100 text-blue-600"
                                : index === 1
                                ? "bg-green-100 text-green-600"
                                : index === 2
                                ? "bg-yellow-100 text-yellow-600"
                                : "bg-purple-100 text-purple-600"
                            }`}
                          >
                            <DocumentTextIcon className="h-6 w-6" />
                          </div>
                          <div className="ml-4">
                            <h3 className="text-lg font-medium text-gray-900">
                              {report} Report
                            </h3>
                            <p className="text-sm text-gray-500">
                              Download {report.toLowerCase()} data
                            </p>
                          </div>
                        </div>
                        <div className="mt-4">
                          <button className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
                            Generate Report
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === "analytics" && (
                <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-md overflow-hidden border border-gray-100 p-6">
                  <h2 className="text-lg font-medium text-gray-900 mb-6">
                    Internship Analytics
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                    <div className="bg-blue-50 rounded-lg p-4">
                      <h3 className="text-sm font-medium text-blue-800">
                        Total Applicants
                      </h3>
                      <p className="text-2xl font-bold text-gray-900">142</p>
                      <p className="text-xs text-blue-600 mt-1">
                        ↑ 12% from last month
                      </p>
                    </div>
                    <div className="bg-green-50 rounded-lg p-4">
                      <h3 className="text-sm font-medium text-green-800">
                        Active Interns
                      </h3>
                      <p className="text-2xl font-bold text-gray-900">24</p>
                      <p className="text-xs text-green-600 mt-1">
                        ↑ 8% from last quarter
                      </p>
                    </div>
                    <div className="bg-purple-50 rounded-lg p-4">
                      <h3 className="text-sm font-medium text-purple-800">
                        Completion Rate
                      </h3>
                      <p className="text-2xl font-bold text-gray-900">92%</p>
                      <p className="text-xs text-purple-600 mt-1">
                        ↑ 5% from last year
                      </p>
                    </div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4 h-64 flex items-center justify-center">
                    <p className="text-gray-500">
                      Analytics chart would be displayed here
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
