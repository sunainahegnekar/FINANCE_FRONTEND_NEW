import { useNavigate } from "react-router-dom";

export default function PricingPage() {
  const navigate = useNavigate();

  const plans = [
    {
      name: "Free",
      price: "$0",
      features: ["Basic Expense Tracking", "Limited Reports", "Community Support"],
      buttonText: "Get Started",
      buttonAction: () => navigate("/signup"),
    },
    {
      name: "Pro",
      price: "$9.99/mo",
      features: ["Advanced Reports", "Bank Sync", "Priority Support"],
      buttonText: "Try Pro",
      buttonAction: () => navigate("/signup"),
    },
    {
      name: "Enterprise",
      price: "Custom",
      features: ["Unlimited Users", "Custom Reports", "Dedicated Support"],
      buttonText: "Contact Sales",
      buttonAction: () => navigate("/contact"),
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-12 px-6">
      <h1 className="text-4xl font-bold text-blue-900 mb-6">Choose Your Plan</h1>
      <p className="text-gray-600 text-lg mb-10">Find the best plan that suits your financial needs.</p>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl w-full">
        {plans.map((plan, index) => (
          <div key={index} className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center transition-all duration-300 hover:shadow-xl">
            <h2 className="text-2xl font-semibold text-gray-800">{plan.name}</h2>
            <p className="text-4xl font-bold text-blue-600 my-4">{plan.price}</p>
            <ul className="text-gray-600 space-y-2 text-center mb-6">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center space-x-2">
                  ✅ <span>{feature}</span>
                </li>
              ))}
            </ul>
            <button
              onClick={plan.buttonAction}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:bg-blue-700 focus:ring-2 focus:ring-blue-400"
            >
              {plan.buttonText}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
