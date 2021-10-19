import React from "react";

const Blogs = () => {
  return (
    <div style={{ backgroundColor: "rgb(244, 250, 255)" }}>
      <div className="">
        <h2 className="text-2xl pt-5 font-extrabold tracking-tight text-indigo-900 text-center">
          Blogs & News
        </h2>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-3">
        <div className="">
          <div className="flex flex-wrap place-items-center h-screen">
            {/* <!-- card --> */}
            <div className="overflow-hidden shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-5 hover:shadow-2xl rounded-lg h-90 w-60 md:w-80 cursor-pointer m-auto">
              <a href="/" className="w-full block h-full">
                <img
                  alt="blog"
                  src="http://www.asianeyehospital.com/images/refractive.jpg"
                  className="max-h-40 w-full object-cover"
                />
                <div className="bg-white w-full p-4">
                  <p className="text-indigo-500 text-2xl font-medium">
                    What To Ask a Refractive Surgeon?
                  </p>
                  <p className="text-gray-600 font-light text-md">
                    After you find a surgeon, make an appointment for a
                    consultation. This is an important meeting. To take full
                    advantage of it, write down as many relevant questions
                    about...
                    <a
                      className="inline-flex text-indigo-500"
                      href="http://www.asianeyehospital.com/Blogs/Refractive-surgery.php"
                    >
                      Read More
                    </a>
                  </p>
                  <div className="flex flex-wrap justify-starts items-center py-3 border-b-2 text-xs text-white font-medium">
                    <span className="m-1 px-2 py-1 rounded bg-indigo-500">
                      #EyeCare
                    </span>
                    <span className="m-1 px-2 py-1 rounded bg-indigo-500">
                      #Surgeon
                    </span>
                    <span className="m-1 px-2 py-1 rounded bg-indigo-500">
                      #Tips
                    </span>
                  </div>
                  <div className="flex items-center mt-2">
                    <img
                      className="w-10 h-10 object-cover rounded-full"
                      alt="User avatar"
                      src="https://avatars.githubusercontent.com/u/1848375?v=4"
                    />

                    <div className="pl-3">
                      <div className="font-medium">Jhankar Mahbub</div>
                      <div className="text-gray-600 text-sm">
                        Eye, Microsurgery & Phaco Specialist
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>

          {/* <!-- Does this resource worth a follow? --> */}
          {/* <div className="absolute bottom-0 right-0 mb-4 mr-4 z-10">
            <div>
              <a
                title="Follow me on twitter"
                href="https://www.twitter.com/asad_codes"
                className="block w-16 h-16 rounded-full transition-all shadow hover:shadow-lg transform hover:scale-110 hover:rotate-12"
              >
                <img
                  className="object-cover object-center w-full h-full rounded-full"
                  src="https://www.imore.com/sites/imore.com/files/styles/large/public/field/image/2019/12/twitter-logo.jpg"
                  alt=""
                />
              </a>
            </div>
          </div> */}
        </div>
        <div className="">
          <div className="flex flex-wrap place-items-center h-screen">
            {/* <!-- card --> */}
            <div className="overflow-hidden shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-5 hover:shadow-2xl rounded-lg h-90 w-60 md:w-80 cursor-pointer m-auto">
              <a href="/" className="w-full block h-full">
                <img
                  alt="blog"
                  src="http://www.asianeyehospital.com/images/Blogs_image.jpg"
                  className="max-h-40 w-full object-cover"
                />
                <div className="bg-white w-full p-4">
                  <p className="text-indigo-500 text-2xl font-medium">
                    How to Choose LASIK centre and LASIK Surgeon?
                  </p>
                  <p className="text-gray-600 font-light text-md">
                    Choosing a surgeon for LASIK or Relex SMILE laser vision
                    correction is not as difficult as it can be for many other
                    kinds of surgery...
                    <a className="inline-flex text-indigo-500" href="/">
                      Read More
                    </a>
                  </p>
                  <div className="flex flex-wrap justify-starts items-center py-3 border-b-2 text-xs text-white font-medium">
                    <span className="m-1 px-2 py-1 rounded bg-indigo-500">
                      #EyeCare
                    </span>
                    <span className="m-1 px-2 py-1 rounded bg-indigo-500">
                      #LASIK
                    </span>
                    <span className="m-1 px-2 py-1 rounded bg-indigo-500">
                      #laser
                    </span>
                  </div>
                  <div className="flex items-center mt-2">
                    <img
                      className="w-10 h-10 object-cover rounded-full"
                      alt="User avatar"
                      src="https://i.ibb.co/KrK2CRZ/Webp-net-resizeimage.jpg"
                    />

                    <div className="pl-3">
                      <div className="font-medium">Emdadul Hoque Tareque</div>
                      <div className="text-gray-600 text-sm">
                        Eye, Microsurgery & Phaco Specialist
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="">
          <div className="flex flex-wrap place-items-center h-screen">
            {/* <!-- card --> */}
            <div className="overflow-hidden shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-5 hover:shadow-2xl rounded-lg h-90 w-60 md:w-80 cursor-pointer m-auto">
              <a href="/" className="w-full block h-full">
                <img
                  alt="blog"
                  src="https://images.unsplash.com/photo-1542435503-956c469947f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80"
                  className="max-h-40 w-full object-cover"
                />
                <div className="bg-white w-full p-4">
                  <p className="text-indigo-500 text-2xl font-medium">
                    Eye Care Tips
                  </p>
                  <p className="text-gray-600 font-light text-md">
                    Eyes are one of the most important organs in the human body
                    and vision is one of the most wonderful gifts. But often
                    many people neglect the importance of eye care and do not
                    correction is not as difficult pay proper attention towards
                    eye care...
                    <a className="inline-flex text-indigo-500" href="/">
                      Read More
                    </a>
                  </p>
                  <div className="flex flex-wrap justify-starts items-center py-3 border-b-2 text-xs text-white font-medium">
                    <span className="m-1 px-2 py-1 rounded bg-indigo-500">
                      #Tips
                    </span>
                    <span className="m-1 px-2 py-1 rounded bg-indigo-500">
                      #Eye
                    </span>
                    <span className="m-1 px-2 py-1 rounded bg-indigo-500">
                      #Dry
                    </span>
                  </div>
                  <div className="flex items-center mt-2">
                    <img
                      className="w-10 h-10 object-cover rounded-full"
                      alt="User avatar"
                      src="https://avatars.githubusercontent.com/u/1848375?v=4"
                    />

                    <div className="pl-3">
                      <div className="font-medium">Jhankar Mahbub</div>
                      <div className="text-gray-600 text-sm">
                        Eye, Microsurgery & Phaco Specialist
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
