import Header from "../components/Header";
import Footer from "../components/Footer";

const Volunteer = () => {
  // Sample Volunteer Opportunities (You can replace with real data)
  const opportunities = [
    {
      id: 1,
      title: "Elderly Care Assistant",
      description:
        "Help seniors with daily activities and provide companionship.",
      postedBy: "Sarah",
      location: "Downtown Area",
      timeAgo: "2h ago",
      status: "Available",
      statusColor: "bg-green-100 text-green-600",
      avatar:
        "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-1.jpg",
    },
    {
      id: 2,
      title: "Food Bank Helper",
      description: "Sort and distribute food packages to families in need.",
      postedBy: "Michael",
      location: "East Side",
      timeAgo: "5h ago",
      status: "Urgent",
      statusColor: "bg-yellow-100 text-yellow-600",
      avatar:
        "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-3.jpg",
    },
    {
      id: 3,
      title: "Environmental Cleanup",
      description: "Join our weekend cleanup drive at local parks and beaches.",
      postedBy: "Emma",
      location: "Coastal Area",
      timeAgo: "1h ago",
      status: "New",
      statusColor: "bg-blue-100 text-blue-600",
      avatar:
        "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-6.jpg",
    },
  ];

  return (
    <>
      <Header />
      <main className="pt-16 -mb-20 bg-gray-50 min-h-screen">
        {/* Page Title */}
        <section className="py-25 text-center bg-gray-900 text-white">
          <h1 className="text-5xl font-bold">Volunteer & Make a Difference</h1>
          <p className="mt-4 text-lg max-w-3xl mx-auto">
            Join our network of volunteers and contribute to causes that matter.
            Browse opportunities and take action today.
          </p>
        </section>

        {/* Volunteer Opportunities */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl text-gray-900 font-bold text-center mb-12">
              Current Volunteer Opportunities
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {opportunities.map((opportunity) => (
                <div
                  key={opportunity.id}
                  className="bg-white  text-gray-900 rounded-xl shadow-lg overflow-hidden"
                >
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span
                        className={`px-3 py-1 ${opportunity.statusColor} rounded-full text-sm`}
                      >
                        {opportunity.status}
                      </span>
                      <span className="text-gray-500">
                        <i className="fa-regular fa-clock mr-2"></i>
                        {opportunity.timeAgo}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">
                      {opportunity.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {opportunity.description}
                    </p>
                    <div className="flex items-center space-x-4">
                      <img
                        src={opportunity.avatar}
                        className="w-10 h-10 rounded-full"
                        alt={opportunity.postedBy}
                      />
                      <div>
                        <p className="font-medium text-gray-900">
                          Posted by {opportunity.postedBy}
                        </p>
                        <p className="text-sm text-gray-500">
                          {opportunity.location}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="px-6 py-4 bg-gray-50 border-t">
                    <button className="w-full py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition">
                      Apply Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 mt-30 bg-[linear-gradient(to_right,#111827,#E11D48,#F97316,#111827)]   text-white text-center">
          <h2 className="text-4xl font-bold">Start Volunteering Today</h2>
          <p className="mt-4 text-lg max-w-2xl mx-auto">
            Become part of a movement that makes a real impact. Sign up and take
            your first step toward meaningful change.
          </p>
          <button className="mt-8 px-8 py-3 bg-white text-red-600 font-bold rounded-lg hover:bg-red-100 transition">
            Sign Up Now
          </button>
        </section>
      </main>
    </>
  );
};

export default Volunteer;
