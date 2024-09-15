import React from "react";

function FaqsComp({ e }) {
  return (
    <div className="flex items-center bg-slate-100 shadow-md rounded-lg p-4 mb-4 space-x-4 w-full">
      {/* Image Section */}
      <div className="flex-shrink-0 object-cover rounded-[50%] shadow-lg shadow-slate-700">
        <img src={e.img} alt={e.Heading} className="w-[90px]" />
      </div>

      {/* Text Section */}
      <div className="flex flex-col">
        <h1 className="text-md font-bold font-Protest text-gray-800">{e.Heading}</h1>
        <p className="text-sm text-gray-600 font-Roboto mt-1">{e.content}</p>
      </div>
    </div>
  );
}

export default FaqsComp;
