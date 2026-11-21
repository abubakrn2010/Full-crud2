
const Section5 = () => {
  return (
    <section id="reviews" className="w-full py-16 bg-[#fff3e7]">

      <div className="max-w-[1170px] mx-auto px-4">

        <div className="text-center mb-10">

          <p className="text-[#a45b35] font-semibold">Testimonials</p>

          <h2 className="text-[32px] sm:text-[42px] font-bold font-serif mt-2">
            What Our Customers Say
          </h2>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          <div className="bg-[#fffaf5] p-6 rounded-2xl shadow-sm">

            <div className="flex items-center gap-4">

              <img
                src="https://i.pravatar.cc/100?img=47"
                className="w-16 h-16 rounded-full object-cover"
              />

              <div>
                <h3 className="font-bold">Sarah Khan</h3>
                <p className="text-[#a45b35] text-sm">★★★★★</p>
              </div>

            </div>

            <p className="text-[#765e50] mt-5 leading-6">
              "Best coffee in town! The atmosphere is amazing.
              I love coming here every weekend."
            </p>

          </div>

          <div className="bg-[#fffaf5] p-6 rounded-2xl shadow-sm">

            <div className="flex items-center gap-4">

              <img
                src="https://i.pravatar.cc/100?img=12"
                className="w-16 h-16 rounded-full object-cover"
              />

              <div>
                <h3 className="font-bold">Ali Raza</h3>
                <p className="text-[#a45b35] text-sm">★★★★★</p>
              </div>

            </div>

            <p className="text-[#765e50] mt-5 leading-6">
              "Great place, delicious coffee and friendly staff.
              Highly recommended!"
            </p>

          </div>

          <div className="bg-[#fffaf5] p-6 rounded-2xl shadow-sm">

            <div className="flex items-center gap-4">

              <img
                src="https://i.pravatar.cc/100?img=44"
                className="w-16 h-16 rounded-full object-cover"
              />

              <div>
                <h3 className="font-bold">Maria Smith</h3>
                <p className="text-[#a45b35] text-sm">★★★★★</p>
              </div>

            </div>

            <p className="text-[#765e50] mt-5 leading-6">
              "A perfect spot to relax and work.
              The coffee tastes wonderful!"
            </p>

          </div>

        </div>

      </div>

    </section>
  )
}

export default Section5
