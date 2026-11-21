import React from 'react'

const Reviy = () => {
  return (
    <div>
      
<section className="bg-[#fff3e7] py-20 px-4">

  <div className="max-w-[1170px] mx-auto">

    <div className="text-center mb-14">
      <p className="text-[#a45b35] font-bold tracking-widest">
        CUSTOMER REVIEWS
      </p>

      <h2 className="text-4xl md:text-5xl font-bold font-serif mt-4">
        What People Say About Us
      </h2>

      <p className="text-[#765e50] mt-5">
        We love making our customers happy. Here's what they think about CaféAura.
      </p>
    </div>

    <div className="bg-white rounded-3xl p-8 mb-10 flex flex-col md:flex-row items-center justify-between gap-8 shadow-sm">

      <div className="text-center">
        <h2 className="text-6xl font-bold text-[#542b17]">4.9</h2>
        <p className="text-yellow-500 text-2xl mt-2">★★★★★</p>
        <p className="text-[#765e50] mt-2">Based on customer feedback</p>
      </div>

      <div className="w-full md:w-1/2">
        <div className="flex items-center gap-3 mb-3">
          <span>5 ★</span>
          <div className="bg-[#eee0d3] h-3 rounded-full flex-1">
            <div className="bg-[#a45b35] h-3 rounded-full w-[90%]"></div>
          </div>
          <span>90%</span>
        </div>

        <div className="flex items-center gap-3 mb-3">
          <span>4 ★</span>
          <div className="bg-[#eee0d3] h-3 rounded-full flex-1">
            <div className="bg-[#a45b35] h-3 rounded-full w-[75%]"></div>
          </div>
          <span>75%</span>
        </div>

        <div className="flex items-center gap-3 mb-3">
          <span>3 ★</span>
          <div className="bg-[#eee0d3] h-3 rounded-full flex-1">
            <div className="bg-[#a45b35] h-3 rounded-full w-[30%]"></div>
          </div>
          <span>30%</span>
        </div>
      </div>

    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

      <div className="bg-white rounded-2xl p-7 shadow-sm">
        <p className="text-yellow-500 text-xl">★★★★★</p>

        <p className="text-[#765e50] leading-7 mt-5">
          "The coffee here is amazing! The atmosphere is cozy,
          the staff are friendly, and I really love their vanilla latte."
        </p>

        <div className="flex items-center gap-4 mt-7">
          <img
            src="https://i.pravatar.cc/100?img=47"
            className="w-14 h-14 rounded-full object-cover"
            alt="Customer Sarah"
          />

          <div>
            <h3 className="font-bold">Sarah Johnson</h3>
            <p className="text-sm text-[#a45b35]">Regular Customer</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl p-7 shadow-sm">
        <p className="text-yellow-500 text-xl">★★★★★</p>

        <p className="text-[#765e50] leading-7 mt-5">
          "One of my favorite places to relax. Their desserts
          are delicious and the coffee is always fresh."
        </p>

        <div className="flex items-center gap-4 mt-7">
          <img
            src="https://i.pravatar.cc/100?img=12"
            className="w-14 h-14 rounded-full object-cover"
            alt="Customer Daniel"
          />

          <div>
            <h3 className="font-bold">Daniel Smith</h3>
            <p className="text-sm text-[#a45b35]">Coffee Lover</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl p-7 shadow-sm">
        <p className="text-yellow-500 text-xl">★★★★★</p>

        <p className="text-[#765e50] leading-7 mt-5">
          "Beautiful interior, delicious cappuccino, and
          excellent service. I recommend CaféAura to everyone!"
        </p>

        <div className="flex items-center gap-4 mt-7">
          <img
            src="https://i.pravatar.cc/100?img=44"
            className="w-14 h-14 rounded-full object-cover"
            alt="Customer Emma"
          />

          <div>
            <h3 className="font-bold">Emma Wilson</h3>
            <p className="text-sm text-[#a45b35]">Happy Customer</p>
          </div>
        </div>
      </div>

    </div>

    <div className="text-center mt-14">
      <h3 className="text-2xl font-bold font-serif">
        Your Opinion Matters!
      </h3>

      <p className="text-[#765e50] mt-3">
        Thank you for being part of our CaféAura family.
      </p>
    </div>

  </div>

</section>

    </div>
  )
}

export default Reviy
