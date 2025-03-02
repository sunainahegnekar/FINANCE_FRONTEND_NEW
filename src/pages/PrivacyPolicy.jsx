import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-300 to-gray-300 p-6">
      <div className="bg-white shadow-xl rounded-lg p-10 max-w-3xl mx-auto">
        <h1 className="text-3xl font-semibold text-gray-900 text-center mb-6">Privacy Policy</h1>
        
        <p className="text-gray-700 mb-4">
          Welcome to Finance Management. Your privacy is important to us. This policy explains how we collect, use, and protect your personal data when you use our app.
        </p>
        
        <h2 className="text-xl font-semibold text-gray-900 mb-2">1. Information We Collect</h2>
        <p className="text-gray-700 mb-4">
          We collect personal data such as your name, email address, and transaction details to provide and improve our services.
        </p>
        
        <h2 className="text-xl font-semibold text-gray-900 mb-2">2. How We Use Your Information</h2>
        <p className="text-gray-700 mb-4">
          We use the collected data to personalize user experience, track expenses, improve security, and provide customer support.
        </p>
        
        <h2 className="text-xl font-semibold text-gray-900 mb-2">3. Data Protection</h2>
        <p className="text-gray-700 mb-4">
          We implement strict security measures to protect your data from unauthorized access or breaches.
        </p>
        
        <h2 className="text-xl font-semibold text-gray-900 mb-2">4. Sharing Your Data</h2>
        <p className="text-gray-700 mb-4">
          We do not sell or rent your personal data. Information may be shared with trusted third-party services for operational purposes only.
        </p>
        
        <h2 className="text-xl font-semibold text-gray-900 mb-2">5. Your Rights</h2>
        <p className="text-gray-700 mb-4">
          You have the right to access, modify, or delete your personal data. Contact us for any requests regarding your information.
        </p>
        
        <h2 className="text-xl font-semibold text-gray-900 mb-2">6. Updates to This Policy</h2>
        <p className="text-gray-700 mb-4">
          We may update this Privacy Policy periodically. Changes will be communicated through our website or app notifications.
        </p>
        
        <p className="text-gray-700 mt-6 text-center">
          If you have any questions, feel free to <a href="/contact" className="text-gray-800 font-medium hover:underline">contact us</a>.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
