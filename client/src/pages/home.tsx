import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Smartphone, FileText, CreditCard, Receipt, IdCard, Phone } from "lucide-react";
import { useState, useEffect } from "react";

export default function Home() {
  const [mobileOrId, setMobileOrId] = useState("");
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  const rotatingTexts = [
    "Access to Swiggy tools and support",
    "Reach customers far away from you", 
    "Increase your online orders"
  ];

  // Auto-rotate text every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % rotatingTexts.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission would be handled here
    console.log("Form submitted with:", mobileOrId);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-100">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="text-swiggy-orange text-2xl font-bold">
                <svg width="32" height="32" viewBox="0 0 32 32" className="fill-current">
                  <path d="M16 2C8.3 2 2 8.3 2 16s6.3 14 14 14 14-6.3 14-14S23.7 2 16 2zm0 25c-6.1 0-11-4.9-11-11S9.9 5 16 5s11 4.9 11 11-4.9 11-11 11z"/>
                  <path d="M16 8c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 14c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6z"/>
                </svg>
              </div>
              <h1 className="text-xl font-bold text-swiggy-dark">Swiggy Partner</h1>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-white min-h-screen flex items-center">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://vendor-media-assets.swiggy.com/static-assets/images/PartnerBG.png')"
          }}
        />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left content */}
            <div className="text-white">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                PARTNER WITH SWIGGY!
              </h2>
              
              {/* Rotating text with animation */}
              <div className="h-16 mb-8 flex flex-col justify-center">
                <p key={currentTextIndex} className="text-xl md:text-2xl text-white text-animation">
                  {rotatingTexts[currentTextIndex]}
                </p>
                
                {/* Progress indicator */}
                <div className="flex space-x-2 mt-4">
                  {rotatingTexts.map((_, index) => (
                    <div
                      key={index}
                      className={`h-1 flex-1 rounded-full progress-indicator ${
                        index === currentTextIndex ? 'bg-white' : 'bg-white/30'
                      }`}
                    />
                  ))}
                </div>
              </div>
              
              <Button className="bg-swiggy-orange text-white px-8 py-3 rounded-lg font-semibold hover:bg-swiggy-orange-hover transition-all duration-200 text-lg border-0 hover:scale-[1.05] active:scale-[0.95] shadow-lg hover:shadow-xl">
                Get Started
              </Button>
            </div>

            {/* Right login form */}
            <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md mx-auto w-full hover:shadow-3xl transition-shadow duration-300">
              <div className="text-center mb-8">
                <h3 className="text-lg font-semibold text-swiggy-dark mb-2">
                  Enter a mobile number or restaurant ID to continue
                </h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="relative">
                  <Input
                    type="text"
                    placeholder="Enter Restaurant ID / Mobile number"
                    value={mobileOrId}
                    onChange={(e) => setMobileOrId(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-swiggy-orange focus:border-transparent text-base hover:border-swiggy-orange/50 transition-colors"
                  />
                </div>
                
                <Button 
                  type="submit"
                  className="w-full bg-swiggy-orange text-white py-3 rounded-lg font-semibold hover:bg-swiggy-orange-hover transition-all duration-200 border-0 hover:scale-[1.02] active:scale-[0.98]"
                >
                  Continue
                </Button>
              </form>

              <div className="mt-6 text-center text-sm text-swiggy-gray">
                By logging in, I agree to Swiggy's{" "}
                <a href="#" className="text-swiggy-orange hover:underline hover:text-swiggy-orange-hover transition-colors">
                  terms & conditions
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Two-column Cards Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            
            {/* Left Card - 3 Steps */}
            <div className="bg-white rounded-xl card-shadow card-shadow-hover transition-all duration-300 p-8">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-swiggy-dark mb-4">
                  In just 3 easy steps
                </h2>
                <p className="text-lg text-swiggy-gray">
                  Get your restaurant delivery-ready in 24hrs!
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="bg-swiggy-orange text-white w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold flex-shrink-0 hover:bg-swiggy-orange-hover transition-colors">
                    1
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-swiggy-dark">STEP 1</h3>
                    <p className="text-swiggy-gray">Install the Swiggy Owner App</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="bg-swiggy-orange text-white w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold flex-shrink-0 hover:bg-swiggy-orange-hover transition-colors">
                    2
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-swiggy-dark">STEP 2</h3>
                    <p className="text-swiggy-gray">Login/Register using your phone number</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="bg-swiggy-orange text-white w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold flex-shrink-0 hover:bg-swiggy-orange-hover transition-colors">
                    3
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-swiggy-dark">STEP 3</h3>
                    <p className="text-swiggy-gray">Enter restaurant details</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Card - Documents */}
            <div className="bg-white rounded-xl card-shadow card-shadow-hover transition-all duration-300 p-8">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-swiggy-dark mb-4">
                  For an easy form filling process,
                </h2>
                <p className="text-lg text-swiggy-gray">
                  you can keep these documents handy.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-all duration-200 hover:scale-[1.02] cursor-pointer">
                  <div className="flex items-center space-x-3">
                    <div className="bg-swiggy-orange text-white w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 hover:bg-swiggy-orange-hover transition-colors">
                      <FileText className="h-5 w-5" />
                    </div>
                    <span className="text-swiggy-dark font-medium">FSSAI License copy</span>
                  </div>
                  <a href="#" className="text-swiggy-orange hover:underline font-medium text-sm hover:text-swiggy-orange-hover transition-colors">
                    Apply Here
                  </a>
                </div>

                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-all duration-200 hover:scale-[1.02] cursor-pointer">
                  <div className="flex items-center space-x-3">
                    <div className="bg-swiggy-orange text-white w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 hover:bg-swiggy-orange-hover transition-colors">
                      <FileText className="h-5 w-5" />
                    </div>
                    <span className="text-swiggy-dark font-medium">Your Restaurant menu</span>
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-all duration-200 hover:scale-[1.02] cursor-pointer">
                  <div className="flex items-center space-x-3">
                    <div className="bg-swiggy-orange text-white w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 hover:bg-swiggy-orange-hover transition-colors">
                      <CreditCard className="h-5 w-5" />
                    </div>
                    <span className="text-swiggy-dark font-medium">Bank details</span>
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-all duration-200 hover:scale-[1.02] cursor-pointer">
                  <div className="flex items-center space-x-3">
                    <div className="bg-swiggy-orange text-white w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 hover:bg-swiggy-orange-hover transition-colors">
                      <Receipt className="h-5 w-5" />
                    </div>
                    <span className="text-swiggy-dark font-medium">GSTIN</span>
                  </div>
                  <a href="#" className="text-swiggy-orange hover:underline font-medium text-sm hover:text-swiggy-orange-hover transition-colors">
                    Apply Here
                  </a>
                </div>

                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-all duration-200 hover:scale-[1.02] cursor-pointer">
                  <div className="flex items-center space-x-3">
                    <div className="bg-swiggy-orange text-white w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 hover:bg-swiggy-orange-hover transition-colors">
                      <IdCard className="h-5 w-5" />
                    </div>
                    <span className="text-swiggy-dark font-medium">PAN card copy</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-swiggy-dark text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">
                    Team
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">
                    Blog
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">
                    Help & Support
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">
                    Partner with us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">
                    Ride with us
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">
                    Cookie Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.98.115.16.345.123.533-.143.597-.465 1.896-.527 2.16-.08.33-.402.402-.925.244-2.056-.958-3.338-3.969-3.338-6.399 0-3.771 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24c6.624 0 11.99-5.367 11.99-11.987C24.007 5.367 18.641.001 12.017.001z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
            <p>&copy; 2024 Swiggy Partner. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
