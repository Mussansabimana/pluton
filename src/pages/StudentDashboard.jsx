import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { 
  ClipboardDocumentCheckIcon,
  BriefcaseIcon,
  CalendarIcon,
  // ChartBarIcon,
  BellIcon,
  Cog6ToothIcon,
  UserIcon
} from '@heroicons/react/24/outline';
import PlutonLogo from "../assets/PlutonLogo.png"

export default function StudentDashboard() {
  const [activeTab, setActiveTab] = useState('internships');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeNav, setActiveNav] = useState("")
  
    const { user, logout } = useAuth();

  const navItems = [
    { id: 'internships', name: 'Internships', icon: BriefcaseIcon },
    { id: 'applications', name: 'Applications', icon: ClipboardDocumentCheckIcon },
    { id: 'calendar', name: 'Calendar', icon: CalendarIcon },
    // { id: 'progress', name: 'Progress', icon: ChartBarIcon },
  ];
  const notifications = [
    { name: "Internship", Description: "new internship added by", trade: "sotware development", status: "unreaded" },
    { name: "Internship", Description: "new internship added by", trade: "sotware development", status: "unreaded" },
    { name: "Internship", Description: "new internship added byhhhhhhhhhhhhhhhhhhhhhhhhhhh", trade: "sotware development", status: "unreaded" },
    { name: "Internship", Description: "new internship added by", trade: "sotware development", status: "unreaded" },
  ]

  const handleLogout = () => {
    logout(user.role);
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
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
              <Link to="/" className="flex-shrink-0 text-2xl md:text-3xl lg:text-4xl font-bold text-blue-600">
                <img className='h-9' src={PlutonLogo} alt="logo"crossOrigin='a' />
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <button className={`${activeNav === "notifications" ? "bg-blue-100" : ""} p-2 cursor-pointer rounded-full hover:bg-blue-100 text-gray-700`}>
                <BellIcon
                  onClick={() => {
                    setActiveNav("notifications")
                  }}
                  className="h-5 w-5" />
              </button>
              <button className={`${activeNav === "settings" ? "bg-blue-100" : ""} p-2 cursor-pointer rounded-full hover:bg-blue-100 text-gray-700`}>
                <Cog6ToothIcon
                  onClick={() => {
                    setActiveNav("settings")
                  }}
                  className="h-5 w-5" />
              </button>
              <button
                onClick={() => {
                  setActiveNav("profile")
                }}
                className={`${activeNav === "profile" ? "bg-blue-100" : ""} ring-1 ring-gray-400 hover:bg-blue-100 transition-all ease-in-out duration-200 rounded-full p-1`}>
                <UserIcon className="h-5 w-5" />
              </button>
              {
                <div className='absolute hidden  backdrop-blur-sm bg-white rounded-2xl w-80  shadow-xl top-16 right-3'>
                <div className='p-3 space-y-2 flex flex-col'>
                  {
                    notifications.map((item, i) => {
                      return (
                        <>
                          <div key={i} className='bg-white hover:shadow-lg border border-gray-100 flex flex-col w-full cursor-pointer shadow-md rounded-md p-2'>
                            <div className='font-semibold text-slate-900'>New {item.name}</div>
                            <div className='text-sm text-blue-600 inline-flex'>{item.trade }</div>
                            <div className='text-gray-500 text-sm'>{item.Description} company name</div>
                          </div>
                        </>
                      )
                    })
                  }
                </div>
                </div>
              }
            </div>
          </div>
        </div>
      </nav>

      {/* Sidebar */}
      <div className=' relative flex min-h-max h-full'>
      <div className={`fixed inset-y-0 left-0 h-screen transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:relative md:translate-x-0 transition-transform duration-200 ease-in-out z-40 w-64 bg-white/70 backdrop-blur-md shadow-lg md:shadow-none`}>
        <div className="h-full pt-20 pb-6 flex flex-col">
          <div className="flex-1 px-4 space-y-4">
            <div className="p-4 bg-blue-50 rounded-lg">
              <h3 className="text-sm font-medium text-blue-800">Welcome back,</h3>
              <p className="text-lg font-semibold text-gray-900">John Doe</p>
              <p className="text-sm text-gray-500">Computer Science Studen</p>
            </div>
            
            <nav className="space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {setActiveTab(item.id)
                    setSidebarOpen(!sidebarOpen)}
                  }
                  className={`w-full flex items-center px-4 py-3 rounded-lg transition-all ${
                    activeTab === item.id
                      ? 'bg-blue-100 text-blue-600'
                      : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
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
                className="w-full flex items-center cursor-pointer justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700">
              Log Out
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className=" flex-grow pt-16 pb-10 h-screen overflow-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/70 backdrop-blur-lg rounded-3xl shadow-xl p-6 mt-6">
            <h1 className="text-2xl font-bold text-gray-900 mb-6">
              {navItems.find(item => item.id === activeTab)?.name}
            </h1>

            {activeTab === 'internships' && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3, 4, 5, 6].map((item) => (
                  <div key={item} className="bg-white/80 backdrop-blur-sm rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow">
                    <div className="p-6">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 bg-blue-500 rounded-md p-3">
                          <BriefcaseIcon className="h-6 w-6 text-white" />
                        </div>
                        <div className="ml-4">
                          <h3 className="text-lg font-medium text-gray-900">Software development {item}</h3>
                          <p className="text-sm text-gray-500">Company Name {item}</p>
                        </div>
                      </div>
                      <div className="mt-4">
                        <p className="text-sm text-gray-600 line-clamp-2">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                      </div>
                      <div className="mt-6 flex justify-between items-center">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                          {item === 1 ? 'Applied' : item === 2 ? 'Interview' : 'Available'}
                        </span>
                        <button className="inline-flex items-center px-3 py-1 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700">
                          {item === 1 ? 'View Status' : item === 2 ? 'Prepare' : 'Apply Now'}
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'applications' && (
              <div className="overflow-hidden">
                <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-md overflow-auto border border-gray-100">
                  <table className="min-w-full divide-y overflow-scroll divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Trade
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Company
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Status
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Starting Date
                        </th>
                        <th scope="col" className="relative px-6 py-3">
                          <span className="sr-only">Actions</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {[1, 2, 3].map((item) => (
                        <tr key={item} className="hover:bg-gray-50">
                          <td className="px-6 py-4">
                            <div className="text-sm font-medium text-gray-900">Software Developer Intern</div>
                          </td>
                          <td className="px-6 py-4">
                            <div className="text-sm text-gray-500">Tech Company {item}</div>
                          </td>
                          <td className="px-6 py-4">
                            <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                              item === 1 ? 'bg-green-100 text-green-800' : 
                              item === 2 ? 'bg-yellow-100 text-yellow-800' : 'bg-blue-100 text-blue-800'
                            }`}>
                              {item === 1 ? 'Accepted' : item === 2 ? 'Pending' : 'Interview'}
                            </span>
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-500">
                            {new Date().toLocaleDateString()}
                          </td>
                          <td className="px-6 py-4 text-right text-sm font-medium">
                            <button className="text-blue-600 hover:text-blue-900 mr-3">View</button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTab === 'calendar' && (
              <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-md overflow-hidden border border-gray-100 p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-lg font-medium text-gray-900">Upcoming Events</h2>
                  <button className="inline-flex items-center px-3 py-1 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700">
                    Add Event
                  </button>
                </div>
                <div className="space-y-4">
                  {[1, 2, 3].map((item) => (
                    <div key={item} className="border-l-4 border-blue-500 pl-4 py-2">
                      <div className="text-sm font-medium text-gray-900">Interview with Company {item}</div>
                      <div className="text-sm text-gray-500">
                        {new Date(Date.now() + item * 86400000).toLocaleString()}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* {activeTab === 'progress' && (
              <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-md overflow-hidden border border-gray-100 p-6">
                <h2 className="text-lg font-medium text-gray-900 mb-6">Internship Progress</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-blue-50 rounded-lg p-4">
                    <h3 className="text-sm font-medium text-blue-800">Completed Hours</h3>
                    <p className="text-2xl font-bold text-gray-900">120/480</p>
                    <div className="mt-2 w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '25%' }}></div>
                    </div>
                  </div>
                  <div className="bg-green-50 rounded-lg p-4">
                    <h3 className="text-sm font-medium text-green-800">Tasks Completed</h3>
                    <p className="text-2xl font-bold text-gray-900">8/20</p>
                    <div className="mt-2 w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-green-600 h-2.5 rounded-full" style={{ width: '40%' }}></div>
                    </div>
                  </div>
                  <div className="bg-purple-50 rounded-lg p-4">
                    <h3 className="text-sm font-medium text-purple-800">Skills Gained</h3>
                    <p className="text-2xl font-bold text-gray-900">5/10</p>
                    <div className="mt-2 w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-purple-600 h-2.5 rounded-full" style={{ width: '50%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            )} */}
          </div>
        </div>
      </main>
      </div>
    </div>
  );
}