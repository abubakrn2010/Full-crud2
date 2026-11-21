
const Section4 = () => {
  return (
    <section id="about" className="w-full py-16 bg-[#fff8f0]">

      <div className="max-w-[1170px] mx-auto px-4">

        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-14">

          <div className="w-full lg:w-1/2">

            <img
              src="https://images.unsplash.com/photo-1445116572660-236099ec97a0?auto=format&fit=crop&w=900&q=85"
              alt="Cafe interior"
              className="w-full h-[320px] sm:h-[420px] object-cover rounded-[30px]"
            />

          </div>

          <div className="w-full lg:w-1/2">

            <span className="bg-[#f4dfc9] text-[#a45b35] px-5 py-2 rounded-full text-sm font-semibold">
              About Us
            </span>

            <h2 className="text-[36px] sm:text-[48px] font-bold font-serif leading-tight mt-6">
              A Cozy Place
              <br />
              for Coffee Lovers
            </h2>

            <p className="text-[#765e50] leading-7 mt-5">
              At CaféAura, we believe coffee is more than a drink.
              It's a lifestyle. Come, relax and enjoy every sip.
              We make every cup with passion, love and fresh ingredients.
            </p>

            <a href="#contact" className="inline-block bg-[#542b17] text-white px-7 py-3 rounded-full mt-7">
              Learn More →
            </a>

            <div className="flex flex-col gap-5 mt-10">

              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-[#f4dfc9] flex items-center justify-center text-2xl">
                  ☕
                </div>
                <div>
                  <h3 className="font-bold">Premium Quality</h3>
                  <p className="text-sm text-[#765e50]">Fresh coffee beans</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-[#f4dfc9] flex items-center justify-center text-2xl">
                  ♡
                </div>
                <div>
                  <h3 className="font-bold">Friendly Atmosphere</h3>
                  <p className="text-sm text-[#765e50]">Feel like home</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-[#f4dfc9] flex items-center justify-center text-2xl">
                  ♨
                </div>
                <div>
                  <h3 className="font-bold">Fast Service</h3>
                  <p className="text-sm text-[#765e50]">Always fresh and quick</p>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  )
}

export default Section4
