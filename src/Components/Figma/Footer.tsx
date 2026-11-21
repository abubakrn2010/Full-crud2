
import { Link } from 'react-router'

const Footer = () => {
  return (
    <footer className="w-full bg-[#351b10] text-white py-16">

      <div className="max-w-[1170px] mx-auto px-4">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          <div>

            <Link to="/" className="text-[30px] font-bold font-serif">
              ☕ CaféAura
            </Link>

            <p className="text-[#d6bba9] mt-5 leading-7 max-w-[250px]">
              Sip. Relax. Repeat.
              Experience the best coffee made with love.
            </p>

            <div className="flex items-center gap-4 mt-7">

              <a href="#facebook" className="w-9 h-9 rounded-full bg-[#fff3e7] text-[#542b17] flex items-center justify-center font-bold">f</a>

              <a href="#instagram" className="w-9 h-9 rounded-full bg-[#fff3e7] text-[#542b17] flex items-center justify-center font-bold">◎</a>

              <a href="#youtube" className="w-9 h-9 rounded-full bg-[#fff3e7] text-[#542b17] flex items-center justify-center font-bold">▶</a>

              <a href="#twitter" className="w-9 h-9 rounded-full bg-[#fff3e7] text-[#542b17] flex items-center justify-center font-bold">𝕏</a>

            </div>

          </div>

          <div>

            <h3 className="text-xl font-bold mb-6">Quick Links</h3>

            <ul className="flex flex-col gap-4 text-[#d6bba9]">

              <li><a href="#home" className="hover:text-white">Home</a></li>
              <li><a href="#menu" className="hover:text-white">Menu</a></li>
              <li><a href="#about" className="hover:text-white">About Us</a></li>
              <li><a href="#reviews" className="hover:text-white">Reviews</a></li>
              <li><a href="#contact" className="hover:text-white">Contact</a></li>

            </ul>

          </div>

          <div>

            <h3 className="text-xl font-bold mb-6">Contact Us</h3>

            <ul className="flex flex-col gap-4 text-[#d6bba9]">

              <li>☎ +1 234 567 890</li>
              <li>✉ hello@cafeaura.com</li>
              <li>⌖ 123 Coffee Street, NY</li>

            </ul>

          </div>

          <div>

            <h3 className="text-xl font-bold mb-6">Opening Hours</h3>

            <ul className="flex flex-col gap-4 text-[#d6bba9]">

              <li>Monday - Friday</li>
              <li className="text-white">8:00 AM - 10:00 PM</li>

              <li>Saturday - Sunday</li>
              <li className="text-white">9:00 AM - 11:00 PM</li>

            </ul>

          </div>

        </div>

        <div className="border-t border-[#76513d] mt-12 pt-7 text-center text-sm text-[#d6bba9]">

          © 2025 CaféAura. All rights reserved.

        </div>

      </div>

    </footer>
  )
}

export default Footer
