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
      <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="text-swiggy-orange text-2xl font-bold">
                <svg width="36" height="36" viewBox="0 0 36 36" className="fill-current">
                  <path d="M18 3C10.8 3 5 8.8 5 16s5.8 13 13 13 13-5.8 13-13S25.2 3 18 3zm0 23c-5.5 0-10-4.5-10-10S12.5 6 18 6s10 4.5 10 10-4.5 10-10 10z"/>
                  <path d="M18 9c-3.9 0-7 3.1-7 7s3.1 7 7 7 7-3.1 7-7-3.1-7-7-7zm0 12c-2.8 0-5-2.2-5-5s2.2-5 5-5 5 2.2 5 5-2.2 5-5 5z"/>
                </svg>
              </div>
              <h1 className="text-2xl font-bold text-swiggy-dark">Swiggy Partner</h1>
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
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
            {/* Left content */}
            <div className="text-white space-y-8 lg:pr-8">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
                PARTNER WITH SWIGGY!
              </h2>
              
              {/* Rotating text with animation */}
              <div className="h-20 mb-8 flex flex-col justify-center">
                <p key={currentTextIndex} className="text-xl md:text-2xl lg:text-3xl text-white text-animation font-medium">
                  {rotatingTexts[currentTextIndex]}
                </p>
                
                {/* Progress indicator */}
                <div className="flex space-x-3 mt-6 max-w-xs">
                  {rotatingTexts.map((_, index) => (
                    <div
                      key={index}
                      className={`h-1.5 flex-1 rounded-full progress-indicator ${
                        index === currentTextIndex ? 'bg-white' : 'bg-white/30'
                      }`}
                    />
                  ))}
                </div>
              </div>
              
              <Button className="bg-swiggy-orange text-white px-10 py-4 rounded-xl font-semibold hover:bg-swiggy-orange-hover transition-all duration-200 text-xl border-0 hover:scale-[1.05] active:scale-[0.95] shadow-lg hover:shadow-xl">
                Get Started
              </Button>
            </div>

            {/* Right login form */}
            <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-10 max-w-lg mx-auto w-full hover:shadow-3xl transition-shadow duration-300 border border-gray-100 fade-in">
              <div className="text-center mb-8">
                <h3 className="text-lg md:text-xl font-semibold text-swiggy-dark mb-2 leading-relaxed">
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
                    className="w-full px-5 py-4 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-swiggy-orange focus:border-swiggy-orange text-base hover:border-swiggy-orange/50 transition-all duration-200 placeholder-gray-400"
                  />
                </div>
                
                <Button 
                  type="submit"
                  className="w-full bg-swiggy-orange text-white py-4 rounded-xl font-semibold hover:bg-swiggy-orange-hover transition-all duration-200 border-0 hover:scale-[1.02] active:scale-[0.98] text-lg shadow-lg hover:shadow-xl"
                >
                  Continue
                </Button>
              </form>

              <div className="mt-8 text-center text-sm text-swiggy-gray">
                By logging in, I agree to Swiggy's{" "}
                <a href="#" className="text-swiggy-orange hover:underline hover:text-swiggy-orange-hover transition-colors font-medium">
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
            <div className="bg-white rounded-xl card-shadow card-shadow-hover transition-all duration-300 p-8 slide-in-left">
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
            <div className="bg-white rounded-xl card-shadow card-shadow-hover transition-all duration-300 p-8 slide-in-right">
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


    </div>
  );
}
