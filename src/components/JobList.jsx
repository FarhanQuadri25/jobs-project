import { useState } from "react";
import { FaMapMarker } from "react-icons/fa";
import { Link } from "react-router-dom";

const JobList = ({ job }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);
  let description = job.description;
  if (!showFullDescription) {
    description = description.substring(0, 90) + "...";
  }

  return (
    <div key={job.id} className="bg-white rounded-xl shadow-md relative">
      <div className="p-4">
        <div className="mb-6">
          <div className="text-gray-600 my-2">{job.type}</div>
          <h3 className="text-xl font-bold">{job.title}</h3>
        </div>

        <div className="mb-5">
          {description}
          <button
            className="text-rose-500 mb-5 font-semibold underline  hover:text-rose-900"
            onClick={() => setShowFullDescription((prevState) => !prevState)}
          >
            {showFullDescription ? "Less" : "Show More"}
          </button>
        </div>

        <h3 className="text-rose-400 font-semibold mb-2">
          {`₹${job.salary}`} / Year
        </h3>

        <div className="border border-gray-100 mb-5"></div>

        <div className="flex flex-col lg:flex-row justify-between mb-4">
          <div className="text-orange-700 flex justify-center items-center font-semibold text-lg mb-3">
            <FaMapMarker className="inline mr-1 text-lg" />
            {job.location}
          </div>
          <Link
            to={`/jobs/${job.id}`}
            className="h-[36px] bg-rose-500 hover:bg-rose-800 text-white px-4 py-2 rounded-lg text-center text-sm"
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JobList;
