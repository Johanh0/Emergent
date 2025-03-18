import { useState } from "react";
import { motion } from "framer-motion";
import VolunteerModal from "../components/VolunteerModal";

const Volunteer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  // Sample Volunteer Opportunities (You can replace with real data)
  const opportunities = [
    {
      id: 1,
      title: "Shelter Volunteer",
      description:
        "Provide support to individuals and families in temporary housing in need.",
      location: "Downtown Area",
      timeAgo: "2h ago",
      status: "Available",
      statusColor: "bg-green-100 text-green-600",
    },
    {
      id: 2,
      title: "Food Bank Helper",
      description: "Sort and distribute food packages to families in need.",
      location: "East Side",
      timeAgo: "5h ago",
      status: "Urgent",
      statusColor: "bg-red-100 text-red-600",
    },
    {
      id: 3,
      title: "Environmental Cleanup",
      description: "Join our weekend cleanup drive at local parks and beaches.",
      location: "Coastal Area",
      timeAgo: "1h ago",
      status: "New",
      statusColor: "bg-indigo-100 text-indigo-600",
    },
  ];

  return (
    <>
      <main className="pt-7 bg-gray-50 min-h-screen flex flex-col justify-between">
        {/* Page Title */}
        <section className="py-20 text-center bg-[linear-gradient(to_right,#161128,#E11D48,#F97316,#161128)] text-white">
          <h1 className="text-5xl font-bold">Volunteer & Make a Difference</h1>
          <p className="mt-8 text-lg max-w-3xl mx-auto">
            Join our network of volunteers and contribute to causes that matter.
            Browse opportunities and take action today.
          </p>
        </section>

        {/* Volunteer Opportunities */}
        <section className="py-16 flex-grow">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl text-gray-900 font-bold text-center mb-12">
              Current Volunteer Opportunities
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {opportunities.map((opportunity) => (
                <motion.div
                  key={opportunity.id}
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="bg-white text-gray-900 rounded-xl shadow-lg overflow-hidden flex flex-col h-full border border-gray-200"
                >
                  <div className="p-6 flex-grow">
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
                    <div className="mt-auto">
                      <p className="text-sm text-gray-500">
                        {opportunity.location}
                      </p>
                    </div>
                  </div>
                  {/* Apply Button - Aligned at Bottom */}
                  <div className="px-6 py-4 bg-gray-50 mt-auto">
                    <button
                      onClick={() => setIsModalOpen(true)}
                      className="w-full py-2 bg-red-500 text-white rounded-lg hover:bg-red-100 hover:text-red-600 transition"
                    >
                      Apply Now
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <VolunteerModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
          />
        </section>

        {/* Call to Action */}
        <section className="py-16 -mb-20 bg-[#161128] text-white text-center w-full">
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
