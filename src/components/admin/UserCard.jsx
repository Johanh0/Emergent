const UserCard = ({ user, onDeleteClick }) => {
  const { firstName, lastName, email, profile_image_url, total_donated } = user;

  return (
    <div className="w-full flex-1 min-w-[400px] lg:max-w-[400px] bg-white shadow-md rounded-lg overflow-hidden border border-gray-200">
      <div className="p-4">
        <div className="flex justify-between items-center">
          <div className="flex gap-10 items-center">
            <div>
              <img
                src={`/${profile_image_url}`}
                alt="profile picture"
                className="w-[80px] h-[80px] rounded-full object-cover"
              />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                {firstName} {lastName}
              </h3>
              <div className="mt-1 flex items-center text-sm text-gray-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-2"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                <span>{email}</span>
              </div>
              <div className="mt-2">
                <p className="text-xs font-bold">
                  Donated:{" "}
                  <span className="font-normal">$ {total_donated}</span>
                </p>
              </div>
            </div>
          </div>
          <button
            onClick={() => onDeleteClick(user)}
            className="p-2 text-red-600 hover:text-red-800 hover:bg-red-50 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 cursor-pointer"
            aria-label="Delete user"
          >
            {/* Trash icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="3 6 5 6 21 6"></polyline>
              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
              <line x1="10" y1="11" x2="10" y2="17"></line>
              <line x1="14" y1="11" x2="14" y2="17"></line>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
