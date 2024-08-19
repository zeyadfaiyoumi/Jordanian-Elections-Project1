import React from "react";

import { Link } from "react-router-dom";
import Nav from "../component/Nav";

const ElectionCards = () => {
  return (
    <>
      <Nav />
      <div className="container mt-56 ml-auto  mr-auto p-4">
        <h2 className="text-2xl font-bold text-center mb-6">
          تقديم طلب للترشح في القوائم الانتخابية
        </h2>
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <Link to="/listlocal" className="w-full md:w-64">
            <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition duration-300">
              <h3 className="text-xl font-semibold text-center mb-4">
                القوائم المحلية
              </h3>
              <button className="w-full bg-red-200 text-white py-2 rounded-md hover:bg-red-200 transition duration-300">
                اختر
              </button>
            </div>
          </Link>
          <Link to="/createparty" className="w-full md:w-64">
            <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition duration-300">
              <h3 className="text-xl font-semibold text-center mb-4">
                القوائم الحزبية
              </h3>
              <button className="w-full bg-red-200 text-white py-2 rounded-md hover:bg-red-200 transition duration-300">
                اختر
              </button>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ElectionCards;
