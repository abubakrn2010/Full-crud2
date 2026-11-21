
import { Link, Outlet } from 'react-router'

const Layout = () => {
  return (
    <div className="bg-[#fff8f0] text-[#351b10] font-sans">

      <header className="w-full ">

        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-[75px] py-5">

          <div className="flex flex-wrap items-center justify-between gap-4">

            <Link to="/" className="text-[26px] sm:text-[30px] font-bold font-serif">
              ☕ CaféAura
            </Link>

            <nav className="hidden lg:flex items-center gap-10">

              <Link to="/" className="text-[15px] font-medium hover:text-[#a45b35]">
                Home
              </Link>

              <Link to="/menu" className="text-[15px] font-medium hover:text-[#a45b35]">
                Menu
              </Link>

              <Link to="/abou" className="text-[15px] font-medium hover:text-[#a45b35]">
                About
              </Link>

              <Link to="/revi" className="text-[15px] font-medium hover:text-[#a45b35]">
                Reviews
              </Link>

              <Link to="/about" className="text-[15px] font-medium hover:text-[#a45b35]">
                Full-Crud
              </Link>

            </nav>

            <div className="flex items-center gap-3">

              <button className="text-xl p-2">⌕</button>

              <Link to="/" className="bg-[#542b17] text-white px-5 sm:px-7 py-3 rounded-full text-sm font-semibold hover:bg-[#75452b]">
                Order Now →
              </Link>

            </div>

          </div>

        </div>

      </header>

      <Outlet />

    </div>
  )
}

export default Layout
