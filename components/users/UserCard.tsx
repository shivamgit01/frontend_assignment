import { User } from "@/lib/types";
import { Mail, Phone } from "lucide-react";

const UserCard = ({ user }: { user: User }) => {
  // Choosing random color based on user
  const getBackgroundColor = () => {
    const colors = ["#f6ad55", "#f687b3", "#63b3ed", "#a0aec0", "#4fd1c5"];
    const charCodeSum = user.name.charCodeAt(0);
    const colorIndex = charCodeSum % colors.length;
    return colors[colorIndex];
  };

  const avatarStyle = {
    backgroundColor: getBackgroundColor(),
  };

  return (
    <div
      className="bg-gray-100 shadow-lg rounded-lg overflow-hidden"
      key={user.id}
    >
      <div className="px-6 py-4 flex gap-8 items-center">
        <div className="flex items-center justify-center">
          <div
            className="rounded-full h-10 w-10 sm:h-14 sm:w-14 lg:h-20 lg:w-20 flex items-center justify-center text-gray-700 sm:text-md lg:text-xl font-semibold"
            style={avatarStyle}
          >
            {user.name.split(" ").map((word) => word.charAt(0))}
          </div>
        </div>
        <div>
          <p className="text-sm sm:text-md lg:text-lg font-semibold text-gray-800">
            {user.name}
          </p>
          <p className="text-gray-600 flex gap-1 items-center text-sm sm:text-md lg:text-lg">
            <Mail size={14} strokeWidth={2} /> {user.email}
          </p>
          <p className="text-gray-600 flex gap-1 items-center text-sm sm:text-md lg:text-lg">
            <Phone size={14} strokeWidth={2} /> {user.phone}
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
