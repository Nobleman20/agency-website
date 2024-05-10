import React from "react";
import CompanyImg from "@/public/images/customer.png";
import Image from "next/image";

const Company = () => {
  return (
    <div className="pt-[6rem] pd-[3rem]">
      <h1 className="mb-[1.5rem] font-bold text-[22px] text-center md:text-[30px] text-[#02073e]">
        Company who also worh with us
      </h1>
      <p className="w-[90%] sm:w-85% md:w-[75%] ld:w-[65%] xl:w-[55%] mx-auto text-[17px] text-center text-gray-950 opacity-80">
        Another loewm Ipsium shit
      </p>
      <p className="text-center mt-[1.7rem] font-[500] cursor-pointer text-blue-600">
        Explore details
      </p>
      <div className="mt-[2rem] text-center w-[80%] mx-auto">
        <Image src={CompanyImg} alt="Company Image" />"
      </div>
    </div>
  );
};

export default Company;
