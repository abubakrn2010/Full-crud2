
const Section2 = () => {

  return (
    <section id="menu" className="w-full py-16 bg-[#fff8f0]">

      <div className="max-w-[1170px] mx-auto px-4">

        <div className="text-center mb-10">

          <p className="text-[#a45b35] font-semibold">Our Menu</p>

          <h2 className="text-[32px] sm:text-[42px] font-bold font-serif mt-2">
            Popular Categories
          </h2>

          <div className="w-20 h-1 bg-[#a45b35] mx-auto mt-4 rounded"></div>

        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">

          <div className="bg-[#f8e9da] rounded-2xl p-5 text-center hover:-translate-y-2 transition">
            <img src="https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?auto=format&fit=crop&w=300&q=80" className="w-full h-[110px] object-cover rounded-xl" />
            <h3 className="font-semibold mt-4">Espresso</h3>
          </div>

          <div className="bg-[#f8e9da] rounded-2xl p-5 text-center hover:-translate-y-2 transition">
            <img src="https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=300&q=80" className="w-full h-[110px] object-cover rounded-xl" />
            <h3 className="font-semibold mt-4">Latte</h3>
          </div>

          <div className="bg-[#f8e9da] rounded-2xl p-5 text-center hover:-translate-y-2 transition">
            <img src="https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=300&q=80" className="w-full h-[110px] object-cover rounded-xl" />
            <h3 className="font-semibold mt-4">Iced Coffee</h3>
          </div>

          <div className="bg-[#f8e9da] rounded-2xl p-5 text-center hover:-translate-y-2 transition">
            <img src="https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?auto=format&fit=crop&w=300&q=80" className="w-full h-[110px] object-cover rounded-xl" />
            <h3 className="font-semibold mt-4">Cappuccino</h3>
          </div>

          <div className="bg-[#f8e9da] rounded-2xl p-5 text-center hover:-translate-y-2 transition">
            <img src="https://images.unsplash.com/photo-1572286258217-215cf8e9f3a1?auto=format&fit=crop&w=300&q=80" className="w-full h-[110px] object-cover rounded-xl" />
            <h3 className="font-semibold mt-4">Mocha</h3>
          </div>

          <div className="bg-[#f8e9da] rounded-2xl p-5 text-center hover:-translate-y-2 transition">
            <img src="https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=300&q=80" className="w-full h-[110px] object-cover rounded-xl" />
            <h3 className="font-semibold mt-4">Tea</h3>
          </div>

        </div>

      </div>

    </section>
  )
}

export default Section2
