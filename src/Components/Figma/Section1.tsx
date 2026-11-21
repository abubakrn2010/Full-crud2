
const Section1 = () => {
  return (
    <section className="w-full bg-[#fff3e7]">

      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-[75px]">

        <div className="flex flex-col md:flex-row items-center justify-between gap-10 py-12 lg:py-16">

          <div className="w-full md:w-[48%]">

            <div className="inline-block bg-[#f4dfc9] px-5 py-2 rounded-full text-sm mb-6">
              ☕ Welcome to CaféAura
            </div>

            <h1 className="text-[45px] sm:text-[58px] lg:text-[76px] font-bold font-serif leading-[1.05]">
              Good Coffee
              <br />
              Good <span className="text-[#a45b35] italic">Mood</span>
            </h1>

            <p className="text-[#765e50] text-[16px] sm:text-[18px] mt-6 max-w-[420px] leading-7">
              Enjoy the best coffee, made with love and fresh ingredients.
            </p>

            <div className="flex flex-wrap items-center gap-5 mt-8">

              <a href="#menu" className="bg-[#542b17] text-white px-7 py-4 rounded-full font-semibold hover:bg-[#75452b]">
                Explore Menu →
              </a>

              <a href="#about" className="flex items-center gap-3 font-medium">
                <span className="w-11 h-11 rounded-full border border-[#542b17] flex items-center justify-center text-lg">
                  ▶
                </span>
                Watch Video
              </a>

            </div>

          </div>

          <div className="w-full md:w-[52%]">

            <img
              src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1000&q=85"
              alt="Coffee cup"
              className="w-full h-[300px] sm:h-[400px] lg:h-[470px] object-cover rounded-[40px]"
            />

          </div>

        </div>

      </div>

    </section>
  )
}

export default Section1
