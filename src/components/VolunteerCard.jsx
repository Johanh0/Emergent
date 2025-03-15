import React from "react";

const VolunteerOpportunities = () => {
  return (
    <>
      {/* Current Volunteer Opportunities Section */}
      <section id="volunteer-opportunities" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Current Volunteer Opportunities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Volunteer Opportunity 1 */}
            <div
              id="opportunity-1"
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-green-100 text-green-600 rounded-full text-sm">
                    Available
                  </span>
                  <span className="text-gray-500">2h ago</span>
                </div>
                <h3 className="text-xl text-gray-900 font-bold mb-2">
                  Elderly Care Assistant
                </h3>
                <p className="text-gray-600 mb-4">
                  Help seniors with daily activities and provide companionship.
                </p>
                <div className="flex items-center space-x-4">
                  <img
                    src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-1.jpg"
                    className="w-10 h-10 rounded-full"
                    alt="Volunteer"
                  />
                  <div>
                    <p className="font-medium text-gray-900">Posted by Sarah</p>
                    <p className="text-sm text-gray-500">Downtown Area</p>
                  </div>
                </div>
              </div>
              <div className="px-6 py-4 bg-gray-50 border-t">
                <button className="w-full py-2 bg-red-500 text-white rounded-lg hover:bg-red-600">
                  Apply Now
                </button>
              </div>
            </div>

            {/* Volunteer Opportunity 2 */}
            <div
              id="opportunity-2"
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-yellow-100 text-yellow-600 rounded-full text-sm">
                    Urgent
                  </span>
                  <span className="text-gray-500">5h ago</span>
                </div>
                <h3 className="text-xl text-gray-900 font-bold mb-2">
                  Food Bank Helper
                </h3>
                <p className="text-gray-600 mb-4">
                  Sort and distribute food packages to families in need.
                </p>
                <div className="flex items-center space-x-4">
                  <img
                    src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-3.jpg"
                    className="w-10 h-10 rounded-full"
                    alt="Volunteer"
                  />
                  <div>
                    <p className="font-medium text-gray-900">
                      Posted by Michael
                    </p>
                    <p className="text-sm text-gray-500">East Side</p>
                  </div>
                </div>
              </div>
              <div className="px-6 py-4 bg-gray-50 border-t">
                <button className="w-full py-2 bg-red-500 text-white rounded-lg hover:bg-red-600">
                  Apply Now
                </button>
              </div>
            </div>

            {/* Volunteer Opportunity 3 */}
            <div
              id="opportunity-3"
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
                    New
                  </span>
                  <span className="text-gray-500">1h ago</span>
                </div>
                <h3 className="text-xl text-gray-900 font-bold mb-2">
                  Environmental Cleanup
                </h3>
                <p className="text-gray-600 mb-4">
                  Join our weekend cleanup drive at local parks and beaches.
                </p>
                <div className="flex items-center space-x-4">
                  <img
                    src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-6.jpg"
                    className="w-10 h-10 rounded-full"
                    alt="Volunteer"
                  />
                  <div>
                    <p className="font-medium text-gray-900">Posted by Emma</p>
                    <p className="text-sm text-gray-500">Coastal Area</p>
                  </div>
                </div>
              </div>
              <div className="px-6 py-4 bg-gray-50 border-t">
                <button className="w-full py-2 bg-red-500 text-white rounded-lg hover:bg-red-600">
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default VolunteerOpportunities;
