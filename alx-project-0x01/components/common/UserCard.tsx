// components/common/UserCard.tsx
import React from "react";
import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({ name, email, phone, website, company, address }) => {
  return (
    <div className="border rounded-lg shadow-md p-4 bg-white hover:shadow-lg transition cursor-pointer">
      <h2 className="text-xl font-semibold">{name}</h2>
      <p className="text-gray-600">@{company.name}</p>
      <div className="mt-2 text-sm text-gray-700">
        <p><span className="font-medium">Email:</span> {email}</p>
        <p><span className="font-medium">Phone:</span> {phone}</p>
        <p><span className="font-medium">Website:</span> {website}</p>
        <p>
          <span className="font-medium">Address:</span> {address.city}, {address.street}
        </p>
      </div>
    </div>
  );
};

export default UserCard;
