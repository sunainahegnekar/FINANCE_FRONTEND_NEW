import { useNavigate } from "react-router-dom";

export default function FeaturesPage() {
  const navigate = useNavigate();

  const features = [
    {
      title: "Expense Tracking",
      description: "Track your daily expenses with ease. Categorize and visualize your spending patterns.",
      icon: "📊", // Example icon, can use an actual icon library like FontAwesome or HeroIcons
    },
    {
      title: "Real-Time Reports",
      description: "Generate real-time reports to get insights into your financial health anytime.",
      icon: "📈",
    },
    {
      title: "Bank Sync",
      description: "Sync your bank transactions directly to keep your finances organized without manual entry.",
      icon: "🏦",
    },
    {
      title: "Budgeting Tools",
      description: "Create and manage budgets to stay on track with your financial goals.",
      icon: "💰",
    },
    {
      title: "Mobile App",
      description: "Access Cashlytic anytime and anywhere with our fully-featured mobile app.",
      icon: "📱",
    },
    {
      title: "Cloud Sync",
      description: "Your data is always safe and accessible across all your devices with cloud synchronization.",
      icon: "☁️",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <h1 className="text-4xl font-bold text-blue-900 text-center mb-8">Powerful Features to Manage Your Finances</h1>
      <p className="text-lg text-gray-600 text-center mb-12">Cashlytic is designed to make personal finance management easier and smarter for everyone. Explore our features below!</p>

      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <div key={index} className="bg-white p-6 rounded-2xl shadow-lg text-center transition-all duration-300 hover:shadow-xl">
            <div className="text-5xl mb-4">{feature.icon}</div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <button
          onClick={() => navigate("/signup")}
          className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold shadow-md transition-all duration-300 hover:bg-blue-700 hover:shadow-lg"
        >
          Get Started Today
        </button>
      </div>
    </div>
  );
}
