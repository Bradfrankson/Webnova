import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back to Home Button */}
        <div className="mb-8">
          <Link 
            to="/" 
            className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors font-medium"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
        </div>

        {/* Privacy Policy Content */}
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Privacy Policy</h1>
          
          <p className="text-gray-600 mb-8">Effective Date: August 4, 2025</p>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 mb-6">
              At Webnova (<a href="https://web-nova.vercel.app" className="text-blue-600 hover:text-blue-800">https://web-nova.vercel.app</a>), your privacy is our top priority.
              This policy explains how we collect, use, and protect your information when you use our website and services.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Information We Collect</h2>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><strong>Personal Information:</strong> Name, email address, phone number, and business information when you submit forms or book consultations.</li>
              <li><strong>Website Usage:</strong> Pages visited, time spent, and interaction data collected through cookies and analytics tools.</li>
              <li><strong>Communication Records:</strong> Messages, calls, and correspondence you have with us for service delivery and support.</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. How We Use Your Information</h2>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>To provide website design and development services</li>
              <li>To schedule and confirm consultations and appointments</li>
              <li>To communicate project updates and service information</li>
              <li>To improve our website and service offerings</li>
              <li>To send you relevant business communications (with your consent)</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Text Messaging (SMS) Program</h2>
            <div className="bg-blue-50 p-6 rounded-lg mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">SMS Consent and Terms</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><strong>Opt-In Required:</strong> You must explicitly consent to receive text messages from Webnova</li>
                <li><strong>Message Types:</strong> Appointment confirmations, project updates, service notifications, and promotional offers</li>
                <li><strong>Frequency:</strong> Message frequency varies based on your service needs and preferences</li>
                <li><strong>Carrier Charges:</strong> Standard message and data rates may apply from your mobile carrier</li>
                <li><strong>Opt-Out:</strong> Reply "STOP" to any message to unsubscribe immediately</li>
                <li><strong>Help:</strong> Reply "HELP" for assistance or contact info.webbnova.org</li>
                <li><strong>Supported Carriers:</strong> All major US carriers supported</li>
              </ul>
              <p className="text-sm text-gray-600 mt-4">
                <strong>Important:</strong> By providing your phone number and opting in, you consent to receive text messages from Webnova at the number provided. Consent is not required for purchase.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Information Protection</h2>
            <p className="text-gray-700 mb-6">
              <strong>We do not sell, rent, trade, or share your personal information with any third parties.</strong> Your information is used exclusively by Webnova to provide our services to you. We implement industry-standard security measures to protect your data from unauthorized access, disclosure, or misuse.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Cookies and Website Analytics</h2>
            <p className="text-gray-700 mb-6">
              We use cookies and similar technologies (including Meta Pixel) to analyze website performance and improve user experience. These tools help us understand how visitors interact with our site. You can control cookie settings through your browser preferences.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. Data Retention</h2>
            <p className="text-gray-700 mb-6">
              We retain your information only as long as necessary to provide our services and fulfill legal obligations. You may request deletion of your personal data at any time by contacting us.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">7. Your Privacy Rights</h2>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Access and review your personal information</li>
              <li>Request corrections to inaccurate data</li>
              <li>Request deletion of your personal information</li>
              <li>Opt out of marketing communications at any time</li>
              <li>Withdraw consent for text messaging by replying "STOP"</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">8. Security Measures</h2>
            <p className="text-gray-700 mb-6">
              We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">9. Children's Privacy</h2>
            <p className="text-gray-700 mb-6">
              Our services are intended for businesses and individuals 18 years or older. We do not knowingly collect personal information from children under 13.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">10. Policy Updates</h2>
            <p className="text-gray-700 mb-6">
              We may update this privacy policy periodically. The current version will always be available at <a href="https://web-nova.vercel.app/privacy-policy" className="text-blue-600 hover:text-blue-800">https://web-nova.vercel.app/privacy-policy</a>. Continued use of our services after updates constitutes acceptance of the revised policy.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">11. Contact Information</h2>
            <p className="text-gray-700 mb-6">
              For questions about this privacy policy or to exercise your privacy rights, contact us at:
              <br />Email: <a href="mailto:info.webbnova.org" className="text-blue-600 hover:text-blue-800">info.webbnova.org</a>
              <br />Phone: <a href="tel:4705255650" className="text-blue-600 hover:text-blue-800">(470) 525-5650</a>
              <br />Location: Atlanta, Georgia
              <br />Website: <a href="https://web-nova.vercel.app" className="text-blue-600 hover:text-blue-800">https://web-nova.vercel.app</a>
            </p>

            <p className="text-gray-600 italic mt-8"><em>Thank you for trusting Webnova with your business needs.</em></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
