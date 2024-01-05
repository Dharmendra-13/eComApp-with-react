import React from "react";

const Footer = () => {
  return (
    <>
      <div className="bg-black w-full h-72 mt-10 flex justify-evenly">
        <ul className="text-white flex flex-col mt-10">
          <h1 className="font-semibold">ABOUT</h1>
          <l1>Contact Us</l1>
          <l1>Careers</l1>
          <l1>Flipkart</l1>
          <l1>Cleartrip</l1>
          <l1>Press</l1>
        </ul>
        <ul className="text-white flex flex-col mt-10">
          <h1 className="font-semibold">HELP</h1>
          <l1>payment</l1>
          <l1>Shipping</l1>
          <l1>cancellation</l1>
          <l1>FAQ</l1>
          <l1>Report</l1>
        </ul>
        <ul className="text-white flex flex-col mt-10">
          <h1 className="font-semibold">CONSUMER POLICY</h1>
          <l1>Scurity</l1>
          <l1>Privacy</l1>
          <l1>Sitemap</l1>
          <l1>Terms&condition</l1>
          <l1>EPR Compliance</l1>
        </ul>
        <ul className="text-white flex flex-col mt-10">
          <h1 className="font-semibold">SOCAIL</h1>
          <l1>Facebook</l1>
          <l1>Twitter</l1>
          <l1>Instagram</l1>
          <l1>Youtube</l1>
          <l1>whatsapp</l1>
        </ul>
        <ul className="text-white flex flex-col mt-10">
          <h1 className="font-semibold">MAIL US</h1>
          <l1>Flipkart internet Private limited</l1>
          <l1>Building Alyssa,begonia</l1>
          <l1>& clove ambassy Tech</l1>
          <l1>Village outer ring raod</l1>
          <l1>Bengaluru 560103</l1>
        </ul>
      </div>
      <div className="w-full h-10 bg-black text-white flex flex flex-col justify-center items-center">
        <p>Conditions of Use & Sale Privacy Notice Interest-Based Ads</p>
        <p>© 1996-2023, Amazon.com, Inc. or its affiliates</p>
      </div>
    </>
  );
};

export default Footer;
