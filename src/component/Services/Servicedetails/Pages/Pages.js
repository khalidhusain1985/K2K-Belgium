import React from "react";
import arrow4 from "../../../../assets/arrow4.png";
import phone from "../../../../assets/phone.png";
import bg from "../../../../assets/Taj.png";
import bg1 from "../../../../assets/phone1.png";
import img from "../../../../assets/img1.png";
import img2 from "../../../../assets/img2.png";
import img3 from "../../../../assets/img3.png";
import img4 from "../../../../assets/img4.png";
import circle from "../../../../assets/circle1.png";

const Pages = () => {
  return (
    <div className="mx-5 md:mx-10 py-10 gap-5 md:py-20 flex flex-col-reverse md:flex-row">
      <div className="flex-1 md:w-[60%]">
        <div className="bg-[#002366] lg:w-[60%] mx-5 md:mx-0 text-[#002366] rounded-2xl">
          {[
            "Cyber Security",
            "Cloud Computing",
            "UI/UX",
            "Web Development",
            "Graphic Designing",
            "App Development",
          ].map((item, index) => (
            <div key={index} className="py-3 flex justify-center cursor-pointer">
              <div className="bg-white py-1 flex px-3 gap-5 rounded-lg h-10 w-[90%]">
                {item} <img className="h-auto" alt="" src={arrow4} />
              </div>
            </div>
          ))}
        </div>

        <div className="py-10">
          <div
            className="lg:w-[40%] mx-5 md:mx-0 rounded-2xl py-10 px-5"
            style={{
              backgroundImage: `url(${bg1})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="bg-white rounded-3xl text-black flex gap-5">
              <div className="py-4">
                <img src={phone} alt="" />
              </div>
              <div className="text-[12px] py-5">
                <h2>Have Any Questions?</h2> +32467762470
              </div>
            </div>
          </div>
        </div>

        <div className="py-10">
          <div className="bg-[#002366] lg:w-[60%] mx-5 md:mx-0 text-white text-center rounded-2xl">
            <h2 className="py-5 font-bold">Send Us Mail</h2>
            <p className="px-5 text-[16px]">
              K2K offers a range of Technology services for all firms all over the industry
            </p>
            <form className="px-7">
              <div className="py-4">
                <h2 className="text-start">Name</h2>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full px-2 text-black flex justify-start bg-white py-1 rounded-lg"
                />
              </div>

              <div className="py-4">
                <h2 className="text-start">Email</h2>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-2 text-black flex justify-start bg-white py-1 rounded-lg"
                />
              </div>

              <div className="py-4">
                <h2 className="text-start">Description</h2>
                <textarea
                  placeholder="Enter a description"
                  className="w-full px-2 text-black flex justify-start bg-white py-1 rounded-lg"
                  rows="4"
                />
              </div>

              <div className="py-4">
                <button
                  type="submit"
                  className="bg-white hover:bg-[#093b99] text-black hover:text-white rounded-lg font-bold py-2 px-4"
                >
                  Send Mail
                </button>
              </div>
            </form>
          </div>
          
          <div className="py-10">
            <div
              className="px-5 text-[16px] py-10 bg-[#002366] lg:w-[60%] mx-5 md:mx-0 text-white rounded-2xl"
              style={{
                backgroundImage: `url(${bg})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <p className="w-[80%] mx-auto">
              Post Code 2930, Street Bredabaan 859, Belgium
              </p>
              <br />
              <p className="mx-auto w-[80%]">
                Phone: <span className="text-[#EC9422]">+32467762470</span> Email: <span className="text-[#EC9422]">info@k2kitsupport.com</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="flex-1 text-black">
        <div>
          <h2 className="py-5 text-[35px] font-bold">Web Developing</h2>
          <p className="py-5">
          Leading the way in website development services, K2K's team of experts creates the interactive customized website you need, from static and dynamic websites to WordPress development, CMS solutions, website redesigns, and website maintenance services.
          </p>
          <span className="text-[#EC9422]">K2K IT Support & Solutions stands at the forefront of web development services that go beyond mere functionality</span>
          <p className="py-5">
          The company is offering comprehensive services tailored to meet the diverse needs of modern enterprises. With a team of skilled professionals and a commitment to innovation, K2K IT Support & Solutions creates digital experiences to help businesses of all sizes to captivate users, drive conversions, and propel businesses forward in the competitive online landscape.

          </p>
          <img src={img} alt="" className="w-full rounded-lg" />
          <h3 className="py-5 text-[35px] font-bold">K2K Agency Values</h3>
          <p>At K2K, our culture comes to life through three core values:</p>
          <ul className="list-disc list-inside">
            <li className="py-2">Building bridges between businesses and browsers…</li>
            <li className="py-2">Websites that wow and win- We architect digital experiences</li>
            <li className="py-2">Your digital storefront, expertly crafted by experts</li>
            <li className="py-2">Click, Engage, Convert: Websites that mean business…</li>
          </ul>
          
          <div className="flex gap-10 py-10">
            <img src={img2} alt="" className="w-1/2 rounded-lg" />
            <img src={img3} alt="" className="w-1/2 rounded-lg" />
          </div>

          <p className="py-2">
          Leading the way in website development services, K2K's team of experts creates the interactive customized website you need, from static and dynamic websites to WordPress development, CMS solutions, website redesigns, and website maintenance services.

          </p>
          <p className="py-2">
          Our commitment to staying ahead of industry trends, coupled with a deep understanding of business needs, makes us an ideal partner for organizations aiming to make a lasting impact in the digital realm.
          </p>

          <div className="py-10 mx-5 md:mx-10 flex gap-20 flex-col md:flex-row">
            <div className="flex-1 py-20">
              <div className="flex">
                <img className="h-[40%] w-auto" src={circle} alt="" />
                <div className="mx-5">
                  <h2 className="font-bold">Certified Experts</h2>
                  <p>With a team of skilled professionals and a commitment</p>
                </div>
              </div>
              <div className="py-10 flex">
                <img className="h-[40%] w-auto" src={circle} alt="" />
                <div className="mx-5">
                  <h2 className="font-bold">Quick Response</h2>
                  <p>That go beyond mere functionality. </p>
                </div>
              </div>
            </div>
            <div className="rounded-3xl flex-1">
              <img src={img4} className="w-full rounded-lg" alt="" />
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Pages;