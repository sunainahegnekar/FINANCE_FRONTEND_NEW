import React from "react";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      {/* Navigation */}
      <nav className="bg-white/90 backdrop-blur-lg border-b border-gray-200 shadow-sm fixed w-full z-20">
  <div className="max-w-7xl mx-auto px-6 lg:px-10 py-4 flex justify-between items-center">
    
    {/* Logo */}
    <a href="#" className="text-2xl font-bold text-blue-900 tracking-wide hover:text-blue-700 transition-all duration-300">
      Cashlytic
    </a>

    {/* Navigation Links */}
    <div className="hidden md:flex items-center space-x-8">
      {["Features", "Pricing", "About Us", "Contact"].map((item) => (
        <a 
          href="#" 
          key={item} 
          className="relative text-gray-700 font-medium transition-all duration-300 hover:text-blue-800 
          after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-blue-800 after:left-0 after:bottom-[-2px] 
          hover:after:w-full after:transition-all after:duration-300"
        >
          {item}
        </a>
      ))}
    </div>

    {/* Buttons */}
    <div className="hidden md:flex items-center space-x-4">
      <button className="text-gray-700 font-medium transition-all duration-300 hover:text-blue-800 hover:scale-105">
        Login
      </button>
      <button className="bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold shadow-md 
        transition-all duration-300 hover:bg-blue-800 hover:shadow-lg hover:scale-105">
        Get Started
      </button>
    </div>

    {/* Mobile Menu Button */}
    <button className="md:hidden text-gray-700 hover:text-blue-900 focus:outline-none transition-all duration-300">
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
      </svg>
    </button>

  </div>
</nav>



      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 bg-gradient-to-br from-white via-slate-50 to-blue-50">
        {/* Background Image */}
        <div className="absolute inset-0 bg-[url('/public/images/image.png')] bg-cover bg-center">
          <div className="absolute inset-0 bg-black opacity-70"></div>
        </div>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl font-bold text-blue-900 leading-tight">
            <span className="text-blue-700">Transform Your Financial Future</span>
          </h1>
          <p className="mt-6 text-xl text-white max-w-2xl mx-auto leading-relaxed">
          Unlock powerful insights to gain complete control over your financial future. </p>
          <div className="mt-10 flex justify-center gap-4">
            <button className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-4 rounded-lg font-semibold shadow-sm transition">
              Explore
            </button>
          </div>
        </div>
      </section>

      {/* Features Grid Section */}
      <section className="py-24 px-4 bg-gray-200">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-3xl font-bold text-blue-900 text-center mb-16">
      Track, Optimize and Thrive with Every Expense.
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Feature 1 */}
      <div className="group bg-gradient-to-br from-slate-50 to-white p-8 rounded-xl border border-slate-100 hover:shadow-2xl transition-transform transform hover:scale-105">
        <img src="/public/images/Growth.png" alt="Financial Growth" className="w-full h-60 object-cover rounded-lg mb-6" />
        <h3 className="text-xl font-semibold text-blue-900 mb-3">
          Accelerate Your Financial Growth
        </h3>
        <p className="text-gray-600 leading-relaxed">
          Gain insights into your spending patterns and optimize your strategies.
        </p>
      </div>

      {/* Feature 2 */}
      <div className="group bg-gradient-to-br from-slate-50 to-white p-8 rounded-xl border border-slate-100 hover:shadow-2xl transition-transform transform hover:scale-105">
        <img src="/public/images/Visual.png" alt="Advanced Tracking" className="w-full h-60 object-cover rounded-lg mb-6" />
        <h3 className="text-xl font-semibold text-blue-900 mb-3">
          Advanced Tracking & Visualization
        </h3>
        <p className="text-gray-600 leading-relaxed">
          Monitor your financial progress with interactive, easy-to-use dashboards.
        </p>
      </div>

      {/* Feature 3 */}
      <div className="group bg-gradient-to-br from-slate-50 to-white p-8 rounded-xl border border-slate-100 hover:shadow-2xl transition-transform transform hover:scale-105">
        <img src="/public/images/Smart.png" alt="Expense Management" className="w-full h-60 object-cover rounded-lg mb-6" />
        <h3 className="text-xl font-semibold text-blue-900 mb-3">
          Smart Expense Management
        </h3>
        <p className="text-gray-600 leading-relaxed">
          Track and optimize your spending effortlessly.
        </p>
      </div>
    </div>
  </div>
</section>


{/* App Features Brief Section */}
<section className="py-16 bg-gray-200">
  <div className="max-w-7xl mx-auto text-center px-6">
    <h2 className="text-3xl font-bold text-blue-900 mb-8">
      Discover Powerful Features of Cashlytic
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      {/* Feature 1 */}
      <div className="bg-white p-6 rounded-xl shadow-lg hover:scale-105 transition-all duration-300">
        <h3 className="text-xl font-semibold text-blue-900 mb-3">Track Expenses Effortlessly</h3>
        <img src="/public/images/expense.png" alt="Financial Growth" className="w-full h-80 object-cover rounded-lg mb-6" />
        <p className="text-gray-600 leading-relaxed">
          Monitor every expense with intuitive tracking and detailed insights.
        </p>
      </div>

      {/* Feature 2 */}
      <div className="bg-white p-6 rounded-xl shadow-lg hover:scale-105 transition-all duration-300">
        <h3 className="text-xl font-semibold text-blue-900 mb-3">Real-Time Insights</h3>
        <img src="/public/images/spend.png" alt="Financial Growth" className="w-full h-80 object-cover rounded-lg mb-6" />
        <p className="text-gray-600 leading-relaxed">
          Get actionable insights into your spending patterns with real-time data.
        </p>
      </div>

      {/* Feature 3 */}
      <div className="bg-white p-6 rounded-xl shadow-lg hover:scale-105 transition-all duration-300">
        <h3 className="text-xl font-semibold text-blue-900 mb-3">Smart Budgeting</h3>
        <img src="/public/images/budget.png" alt="Financial Growth" className="w-full h-80 object-cover rounded-lg mb-6" />
        <p className="text-gray-600 leading-relaxed">
          Set budgets and get reminders to stay on track with your financial goals.
        </p>
      </div>
    </div>
  </div>
</section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-b from-blue-900 to-blue-800 text-white relative overflow-hidden">
  {/* Subtle Background Glow Effect */}
  <div className="absolute inset-0 bg-blue-900 opacity-30 blur-[120px]"></div>

  <div className="relative max-w-4xl mx-auto text-center px-6">
    <h2 className="text-5xl font-extrabold mb-4 leading-tight">
      Take Control of Your Finances Today!
    </h2>
    <p className="text-lg text-blue-200 mb-8 max-w-2xl mx-auto">
      Join thousands of users who are optimizing their financial goals with Cashlytic. Make smarter decisions and grow your wealth effortlessly.
    </p>

    {/* CTA Button */}
    <button className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold shadow-md transition relative overflow-hidden group">
      <span className="relative z-10">Register Now</span>
      
    </button>
  </div>
</section>


      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="text-gray-600">
            <p className="mb-4">&copy; 2025 FinanceManager. All rights reserved.</p>
            <div className="flex justify-center gap-6 text-sm">
              <a href="#" className="hover:text-blue-700">Privacy Policy</a>
              <a href="#" className="hover:text-blue-700">Terms of Service</a>
              <a href="#" className="hover:text-blue-700">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
