import Image from "next/image";
export default function Home() {
  return (
    <div>


      <div className="bg-[url('/images/bg-img-07.jpg')]
        h-[100vh] bg-cover bg-center">
        <div className="  h-[10%] flex justify-around ">
          <div className=" border-blue-900 bg-blue h-10 w-[30%] mt-4">
            <ul className="flex gap-8 text-white">
              <li><a>Home</a></li>
              <li><a>About</a></li>
              <li><a>Services</a></li>
              <li><a>Blog</a></li>
              <li><a>Contact</a></li>
            </ul>
          </div>
          <div className=" border-blue-900 bg-blue h-10 w-[10%] mt-4 text-white">
            <h2 className="text-sm text-center">DAVID  <b>WILLIAMS</b></h2>
            <p className="text-xs text-center">Freelancer Trader</p>
          </div>
          <div className="borde border-blue-900 bg-blue h-[90%] w-[20%] mt-4">
            <button type="text " className="bg-white h-[100%] font-bold text-lg
       w-[100%]">Request A Consulation</button>
          </div>

        </div>



        <div className="borde border-red-900  h-[50%] mt-40 w-[90%] m-auto text-white">
          <p className="mt-3">Unlock your Potential in Trading with David Williams</p>
          <h1 className="text-6xl mt-3
           leading-snug  ">Expert Guidance And Proven  <br></br>
            Strategies To Navigate Financial
            <br></br> Markets Successfully</h1>
          <button className="bg-orange-500 text-black font-bold h-12 w-[25%]">Learn More About Our Strategies</button>
        </div>
      </div>



      {/* about section */}
      <div className=" bg-cyan-50 h-[80vh] flex ">
        <div className="w-[50%] borde border-blue-800 ">
          <Image src='/images/about-02.jpg' width={650} height={50} className="h-[80vh]" />
        </div>
        <div className="w-[50%]  borde border-blue-800">
          <div className="borde border-red-900 h-[80%] w-[70%] m-auto mt-20">
            <p className="font-bold">About</p>
            <h2 className="text-3xl font-bold mt-4">At David Williams, we're dedicated to
              revolutionizing <br></br> the way traders approach the financial markets.</h2>
            <p className="mt-4">With years of experience and a passion for helping others succeed, David Williams
              leads our team of expert traders and analysts.</p>
            <button className="text-blue-900 font-bold mt-4">Read More </button>
          </div>
        </div>
      </div>


      <div className="bg-cyan-50 h-[110vh] w-[100%] borde border-blue-900">
        <div className="borde border-red-900 w-[96%] p-12  ">
          <p className="mt-20">Our Services</p>
          <h1 className="text-5xl font-bold mt-4">What we do</h1>
          <div><hr className="border-1 border-gray-500 mt-4"></hr></div>
        </div>


        <div className="grid grid-cols-3 gap-8 h-[60vh] p-4 mt-12 w-[95%] m-auto">
          <div className=" ">
            <p>01</p>
            <h2 className="mt-4 text-3xl font-bold">Customized Portfolio Management</h2>
            <p className="mt-4">Our expert team will work closely with you to create a tailored investment strategy designed to achieve
              your financial goals while minimizing risk and managing your portfolio.</p>
            <button className="text-blue-900 font-bold mt-4">Read More </button>
          </div>
          <div className=" ">
            <p>02</p>
            <h2 className="mt-4 text-3xl font-bold">Algorithmic Trading Solutions</h2>
            <p className="mt-4">Our algorithms leverage advanced technology to analyze market data in real-time, enabling us to identify
              lucrative trading opportunities and execute trades with precision.</p>
            <button className="text-blue-900 font-bold mt-4">Read More </button>
          </div>
          <div className=" ">
            <p>03</p>
            <h2 className="mt-4 text-3xl font-bold">24/7 Market Analysis and Support</h2>
            <p className="mt-4">Our team of dedicated analysts monitors global markets around the clock, providing you with
              timely insights, recommendations, and support whenever you need it</p>
            <button className="text-blue-900 font-bold mt-4">Read More </button>
          </div>

        </div>



        <div className=" h-[110vh] w-[100%] borde border-blue-900">
          <div className="borde border-red-900 w-[96%] p-12  ">
            <p className="mt-20">Blog</p>
            <h1 className="text-5xl font-bold mt-4">Insights & Analysis</h1>
            <div><hr className="border-1 border-gray-500 mt-4"></hr></div>
          </div>


          <div className="grid grid-cols-3 gap-8 h-[60vh] p-4 w-[95%] m-auto">
            <div className=" ">
                 <Image src='/images/two.jpg'
                 width={500}
                 height={100}
                 />
                 <p className="mt-4 text-blue-900">Market Trends and Analysis</p>
                 <h3 className="text-2xl font-bold"> Mastering Market Volatility: Strategies for Thriving in Turbulent Times</h3>
            </div>
            <div className=" ">
                 <Image src='/images/thre.jpg'
                 width={500}
                 height={100}
                 />
                 <p className="mt-4 text-blue-900">Risk Management Strategies</p>
                 <h3 className="text-2xl font-bold">The Art of Risk Management: Safeguarding Your Investments in a Volatile Market</h3>
            </div>
            <div className=" ">
                 <Image src='/images/one.jpg'
                 width={500}
                 height={100}
                 />
                 <p className="mt-4 text-blue-900">Technical Analysis Insights</p>
                 <h3 className="text-2xl font-bold">Demystifying Technical Analysis: A Beginner's Guide to Chart Patterns and Indicators</h3>
            </div>
          </div>

        </div>



      </div>

































      {/* navbar */}
      {/* <div className="h-[12vh]">
        <div className="flex h-[12vh]">
          <div className=" w-[18%] 
          flex items-center justify-center bg-cyan-50">
            <h2 className="font-bold text-3xl">analytix</h2>
          </div>
          <div className=" w-[82%] bg-blue-900 flex justify-end">

            <ul className="flex  text-white space-x-4s w-[60%] justify-around items-center">
              <li className="text-blue-600  cursor-pointer"><a>Home</a></li>
              <li className="hover:text-blue-600 cursor-pointer"><a>About</a></li>
              <li className="hover:text-blue-600 cursor-pointer" ><a>How it works</a></li>
              <li className="hover:text-blue-600 cursor-pointer"><a>Press</a></li>
              <li className="hover:text-blue-600 cursor-pointer"><a>Request demo</a></li>
            </ul>

          </div>
        </div>
      </div>
      <div className="relative w-full h-screen overflow-hidden  flex items-center justify-center">
        <video 
          className="absolute top-0 left-0 w-full h-[80vh] object-cover   "
          src="https://www.w3schools.com/html/mov_bbb.mp4"
          autoPlay 
          loop 
          muted 
          playsInline
        ></video>
        <div className="relative z-10 text-white p-10 border border-red-900 h-[30vh]
        w-[40%]
        ">
          <h1 className="text-5xl font-bold">The smallest way to
             manage your data </h1>
          <p className="text-sm border
           border-blue-900">I'm a title.Click here to add your own text and edit me</p>
        <br/>
        <button>Request demo</button>
        </div>
      </div> */}

    </div>
  );
}
