
const Section3 = () => {
  return (
    <section className="w-full py-16 bg-[#fff3e7]">

      <div className="max-w-[1170px] mx-auto px-4">

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-5 mb-10">

          <div>
            <p className="text-[#a45b35] font-semibold mb-3">★ Best Sellers</p>

            <h2 className="text-[32px] sm:text-[42px] font-bold font-serif">
              Our Popular Drinks
            </h2>

            <p className="text-[#765e50] mt-3">
              Discover our most loved drinks by our customers.
            </p>
          </div>

          <a href="#contact" className="bg-[#542b17] text-white px-6 py-3 rounded-full text-sm">
            View All Menu →
          </a>

        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          <div className="bg-[#fffaf5] rounded-2xl p-4 shadow-sm hover:shadow-lg transition">

            <img
              src="https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=500&q=85"
              className="w-full h-[220px] object-cover rounded-xl"
            />

            <h3 className="font-bold text-lg mt-4">Caramel Macchiato</h3>

            <p className="text-[#a45b35] font-bold mt-2">$5.99</p>

            <button className="w-full bg-[#542b17] text-white py-3 rounded-full mt-4 hover:bg-[#75452b]">
              Add to Cart
            </button>

          </div>

          <div className="bg-[#fffaf5] rounded-2xl p-4 shadow-sm hover:shadow-lg transition">

            <img
              src="https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?auto=format&fit=crop&w=500&q=85"
              className="w-full h-[220px] object-cover rounded-xl"
            />

            <h3 className="font-bold text-lg mt-4">Vanilla Latte</h3>

            <p className="text-[#a45b35] font-bold mt-2">$5.49</p>

            <button className="w-full bg-[#542b17] text-white py-3 rounded-full mt-4 hover:bg-[#75452b]">
              Add to Cart
            </button>

          </div>

          <div className="bg-[#fffaf5] rounded-2xl p-4 shadow-sm hover:shadow-lg transition">

            <img
              src="https://images.unsplash.com/photo-1572286258217-215cf8e9f3a1?auto=format&fit=crop&w=500&q=85"
              className="w-full h-[220px] object-cover rounded-xl"
            />

            <h3 className="font-bold text-lg mt-4">Mocha Delight</h3>

            <p className="text-[#a45b35] font-bold mt-2">$5.99</p>

            <button className="w-full bg-[#542b17] text-white py-3 rounded-full mt-4 hover:bg-[#75452b]">
              Add to Cart
            </button>

          </div>

          <div className="bg-[#fffaf5] rounded-2xl p-4 shadow-sm hover:shadow-lg transition">

            <img
              src="https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=500&q=85"
              className="w-full h-[220px] object-cover rounded-xl"
            />

            <h3 className="font-bold text-lg mt-4">Cold Brew</h3>

            <p className="text-[#a45b35] font-bold mt-2">$4.99</p>

            <button className="w-full bg-[#542b17] text-white py-3 rounded-full mt-4 hover:bg-[#75452b]">
              Add to Cart
            </button>

          </div>

        </div>

      </div>

    </section>
  )
}

export default Section3
