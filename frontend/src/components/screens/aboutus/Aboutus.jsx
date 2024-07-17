import React from "react";

const AboutUs = () => {
  return (
    <div className="container mx-auto py-12 px-6">
      <h1 className="text-5xl font-bold text-center mb-12 text-gray-800">
        About Us
      </h1>
      <div className="mb-16">
        <h2 className="text-3xl font-semibold mb-4 text-gray-700">
          Our Company
        </h2>
        <p className="text-gray-600 leading-relaxed">
          Welcome to our company! We are dedicated to providing the best quality
          organic and fresh produce directly from farms to your table. Our
          mission is to promote healthy eating habits and support local farmers.
        </p>
      </div>
      <div className="mb-16">
        <h2 className="text-3xl font-semibold mb-4 text-gray-700">
          Our Mission
        </h2>
        <p className="text-gray-600 leading-relaxed">
          Our mission is to deliver the highest quality organic products to our
          customers while supporting sustainable farming practices. We believe
          in the importance of healthy eating and are committed to making fresh,
          organic produce accessible to everyone.
        </p>
      </div>
      <div className="mb-16">
        <h2 className="text-3xl font-semibold mb-4 text-gray-700">
          Our Values
        </h2>
        <ul className="list-disc list-inside text-gray-600 leading-relaxed">
          <li>Quality: We prioritize quality above all else.</li>
          <li>
            Sustainability: We support eco-friendly and sustainable practices.
          </li>
          <li>
            Community: We are committed to supporting local farmers and
            communities.
          </li>
          <li>
            Integrity: We conduct our business with honesty and transparency.
          </li>
        </ul>
      </div>
      <div className="mb-16">
        <h2 className="text-3xl font-semibold mb-4 text-gray-700">Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <img
              src="path_to_team_member_image_1"
              alt="Team Member 1"
              className="w-32 h-32 rounded-full mx-auto mb-4 shadow-lg"
            />
            <h3 className="text-xl font-bold text-gray-700">Team Member 1</h3>
            <p className="text-gray-600">CEO</p>
          </div>
          <div className="text-center">
            <img
              src="path_to_team_member_image_2"
              alt="Team Member 2"
              className="w-32 h-32 rounded-full mx-auto mb-4 shadow-lg"
            />
            <h3 className="text-xl font-bold text-gray-700">Team Member 2</h3>
            <p className="text-gray-600">COO</p>
          </div>
          <div className="text-center">
            <img
              src="path_to_team_member_image_3"
              alt="Team Member 3"
              className="w-32 h-32 rounded-full mx-auto mb-4 shadow-lg"
            />
            <h3 className="text-xl font-bold text-gray-700">Team Member 3</h3>
            <p className="text-gray-600">CTO</p>
          </div>
          <div className="text-center">
            <img
              src="path_to_team_member_image_4"
              alt="Team Member 4"
              className="w-32 h-32 rounded-full mx-auto mb-4 shadow-lg"
            />
            <h3 className="text-xl font-bold text-gray-700">Team Member 4</h3>
            <p className="text-gray-600">CFO</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
