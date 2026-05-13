import React from "react";

const FooterSeUpperCard = () => {
  const data = [
    {
      title: "FREE SHIPPING",
      desc: "Free shipping on order over $1000",
    },
    {
      title: "GIFT CARDS",
      desc: "Give the special perfect gift",
    },
    {
      title: "REWARD POINTS",
      desc: "Earn and spend with ease",
    },
  ];

  return (
    <div className="w-full bg-white py-0 px-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {data.map((item, index) => (
          <div
            key={index}
            className="bg-gray-100 border border-gray-200 py-3 text-center hover:shadow-md transition duration-300"
          >
            <h2 className="text-[22px] font-semibold text-green-500 uppercase tracking-wide">
              {item.title}
            </h2>

            <p className="text-gray-600 text-[18px] mt-1">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FooterSeUpperCard;