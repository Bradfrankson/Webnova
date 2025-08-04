import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const TermsOfService = () => {
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

        {/* Terms of Service Content */}
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Terms of Service</h1>
          
          <p className="text-gray-600 mb-8">Effective Date: August 4, 2025</p>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 mb-6">
              Welcome to Webnova (<a href="https://web-nova.vercel.app" className="text-blue-600 hover:text-blue-800">https://web-nova.vercel.app</a>). By using our website and services, you agree to these Terms of Service. Please read them carefully.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Services Provided</h2>
            <p className="text-gray-700 mb-6">
              Webnova provides custom website design and development services, AI chatbot integration, and digital business solutions. We build websites completely free upfront - you only pay if you're 100% satisfied with the final result.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Service Agreement and Guarantee</h2>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><strong>Risk-Free Promise:</strong> You pay nothing upfront and only pay if completely satisfied</li>
              <li><strong>Fast Delivery:</strong> Completed websites delivered within 24 hours after discovery call</li>
              <li><strong>100% Satisfaction Guarantee:</strong> If you're not happy, you owe nothing</li>
              <li><strong>Included Revisions:</strong> One round of revisions included after initial delivery</li>
              <li><strong>Discovery Process:</strong> All projects begin with a consultation to understand your needs</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Payment Terms</h2>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><strong>No Upfront Costs:</strong> Zero payment required to begin your project</li>
              <li><strong>Pay Only Upon Approval:</strong> Payment due only when you approve the final website</li>
              <li><strong>Transparent Pricing:</strong> All costs discussed and agreed upon during discovery call</li>
              <li><strong>Secure Processing:</strong> All payments processed through secure, encrypted systems</li>
              <li><strong>No Hidden Fees:</strong> The quoted price is the final price</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Included Services</h2>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>100% custom website design and development (no templates)</li>
              <li>AI chatbot integration trained specifically for your business</li>
              <li>3 months of premium hosting included</li>
              <li>1 year free domain registration</li>
              <li>Mobile-responsive design for all devices</li>
              <li>Basic SEO optimization and setup</li>
              <li>SSL certificate and security features</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Text Messaging (SMS) Terms</h2>
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">SMS Program Terms and Conditions</h3>

              <h4 className="font-semibold text-gray-800 mb-2">Program Description:</h4>
              <p className="text-gray-700 mb-3">
                Webnova offers an SMS messaging program to provide appointment confirmations, project updates, service notifications, and promotional offers to consenting customers.
              </p>

              <h4 className="font-semibold text-gray-800 mb-2">Consent and Opt-In:</h4>
              <ul className="list-disc pl-6 mb-3 space-y-1 text-gray-700">
                <li>You must explicitly opt-in to receive text messages</li>
                <li>Consent is not required for purchase of services</li>
                <li>You can opt-in by providing your phone number and checking the SMS consent box</li>
                <li>Double opt-in confirmation may be required</li>
              </ul>

              <h4 className="font-semibold text-gray-800 mb-2">Message Types and Frequency:</h4>
              <ul className="list-disc pl-6 mb-3 space-y-1 text-gray-700">
                <li><strong>Transactional:</strong> Appointment confirmations, project updates, service notifications</li>
                <li><strong>Promotional:</strong> Special offers, new service announcements (with consent)</li>
                <li><strong>Frequency:</strong> Varies based on your service needs, typically 1-5 messages per month</li>
                <li><strong>Timing:</strong> Messages sent during business hours (9 AM - 6 PM EST)</li>
              </ul>

              <h4 className="font-semibold text-gray-800 mb-2">Costs and Carrier Information:</h4>
              <ul className="list-disc pl-6 mb-3 space-y-1 text-gray-700">
                <li>Standard message and data rates apply from your mobile carrier</li>
                <li>Webnova does not charge for text messages</li>
                <li>Compatible with all major US carriers</li>
                <li>Message delivery not guaranteed due to carrier limitations</li>
              </ul>

              <h4 className="font-semibold text-gray-800 mb-2">Opt-Out Instructions:</h4>
              <ul className="list-disc pl-6 mb-3 space-y-1 text-gray-700">
                <li>Reply "STOP" to any message to unsubscribe immediately</li>
                <li>Reply "HELP" for assistance</li>
                <li>Contact info.webbnova.org or call (470) 525-5650 for additional support</li>
                <li>Opt-out requests processed within 24 hours</li>
              </ul>

              <h4 className="font-semibold text-gray-800 mb-2">Privacy and Data:</h4>
              <p className="text-gray-700">
                Your phone number and message data are protected according to our Privacy Policy. We do not sell, rent, or share your information with third parties.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. Client Responsibilities</h2>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Provide necessary content, images, and business information promptly</li>
              <li>Participate actively in the discovery call and provide clear requirements</li>
              <li>Review deliverables and provide feedback within agreed timeframes</li>
              <li>Ensure all provided content is legally owned or properly licensed</li>
              <li>Maintain accurate contact information for project communications</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">7. Intellectual Property Rights</h2>
            <p className="text-gray-700 mb-6">
              Upon full payment, you receive full ownership of your custom website design and content. Webnova retains rights to proprietary development tools, frameworks, and methodologies. You grant permission for us to showcase your website in our portfolio and marketing materials.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">8. Service Limitations and Liability</h2>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Webnova's total liability is limited to the amount paid for services</li>
              <li>We are not responsible for indirect, incidental, or consequential damages</li>
              <li>Services provided "as is" with our satisfaction guarantee as the primary warranty</li>
              <li>Client responsible for maintaining backups after project completion</li>
              <li>Third-party service integrations subject to their respective terms</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">9. Project Termination</h2>
            <p className="text-gray-700 mb-6">
              Either party may terminate the service agreement at any time. If terminated before project completion and approval, no payment is required. If terminated after approval and payment, standard hosting and domain terms continue to apply.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">10. Privacy and Data Protection</h2>
            <p className="text-gray-700 mb-6">
              Your privacy and data security are paramount. Please review our comprehensive <Link to="/privacy-policy" className="text-blue-600 hover:text-blue-800">Privacy Policy</Link> to understand how we collect, use, and protect your information. We do not sell or share your personal data with any third parties.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">11. Compliance and Legal</h2>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>All services comply with applicable US laws and regulations</li>
              <li>SMS program complies with TCPA and CAN-SPAM requirements</li>
              <li>Website development follows accessibility and web standards</li>
              <li>Disputes resolved through binding arbitration in our jurisdiction</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">12. Terms Updates</h2>
            <p className="text-gray-700 mb-6">
              These terms may be updated periodically to reflect service changes or legal requirements. The current version is always available at <a href="https://web-nova.vercel.app/terms-of-service" className="text-blue-600 hover:text-blue-800">https://web-nova.vercel.app/terms-of-service</a>. Continued use constitutes acceptance of updated terms.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">13. Contact Information</h2>
            <p className="text-gray-700 mb-6">
              For questions about these Terms of Service or our SMS program:
              <br />Email: <a href="mailto:info.webbnova.org" className="text-blue-600 hover:text-blue-800">info.webbnova.org</a>
              <br />Phone: <a href="tel:4705255650" className="text-blue-600 hover:text-blue-800">(470) 525-5650</a>
              <br />Location: Atlanta, Georgia
              <br />Website: <a href="https://web-nova.vercel.app" className="text-blue-600 hover:text-blue-800">https://web-nova.vercel.app</a>
              <br />SMS Help: Reply "HELP" to any text message
            </p>

            <p className="text-gray-600 italic mt-8"><em>Thank you for choosing Webnova for your business website needs.</em></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
