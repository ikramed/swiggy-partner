import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Smartphone, FileText, CreditCard, Receipt, IdCard, Phone } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "wouter";


export default function Home() {
  const [mobileOrId, setMobileOrId] = useState("");
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  const rotatingTexts = [
    "Access to Swiggy tools and support",
    "Reach customers far away from you", 
    "Increase your online orders"
  ];

  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % rotatingTexts.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

const [showInfo, setShowInfo] = useState(false);
const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    console.log("Form submitted with:", mobileOrId);
  };

  return (
    <div className="min-h-screen bg-white">
     

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
  {/* SVG logo */}
  <div className="w-8 h-12 mb-4">
    <svg
      width="32"
      height="48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 48"
      className="w-full h-full"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M30.844 22.282c.219-1.263-.032-2.233-.678-2.74-.973-.763-2.434-1.177-5.913-1.177-2.575 0-5.338.003-6.52.002a.651.651 0 01-.52-.64l-.017-7.732c0-.488.384-.885.858-.886.474 0 .86.395.86.882 0 0 .012 4.198.013 5.69 0 .143.082.48.4.567 2.079.57 12.584.153 12.421-1.808C30.857 6.306 24.17 0 16.05 0c-2.556 0-4.977.626-7.12 1.736C3.8 4.45.156 9.927.251 16.254c.067 4.484 2.94 12.454 4.7 13.638.81.545 1.878.343 6.652.343 2.165 0 4.18.008 5.171.012.103.02.643.147.643.658l.013 5.877a.87.87 0 01-.858.886.871.871 0 01-.86-.883s.043-2.358.043-3.237c0-.204.014-.554-.563-.818-1.902-.87-8.077-.345-8.423.615-.133.37.558 1.798 1.62 3.629 3.541 5.746 7.018 10.227 7.58 10.944.034.03.068.06.098.082.463-.58 12.825-14.49 14.776-25.718z"
        fill="#fff"
      />
    </svg>
  </div>

  {/* Title */}
  <div className="text-white space-y-6 lg:pr-8">
  <h2 className="text-4xl md:text-5xl lg:text-4xl font-bold leading-tight">
    PARTNER WITH SWIGGY!
  </h2>

  <svg
    width="72"
    height="6"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="text-swiggy-orange"
  >
    <path
      d="M0 1.44h55.796c21.468 0 20.21 1.999-3.827 3.56"
      stroke="#F15700"
      strokeWidth="1.5"
    />
  </svg>
</div>


              
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
              
    <a
  href="#steps-section"
  className="inline-block bg-swiggy-orange text-white px-12 py-4 rounded-full font-bold text-xl shadow-xl border-2 border-swiggy-orange  hover:bg-swiggy-orange-hover transition-all duration-300 hover:scale-105 active:scale-95"
>
   Get Started
</a>


            </div>

            {/* Right login form */}
            <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-10 max-w-lg mx-auto w-full hover:shadow-3xl transition-shadow duration-300 border border-gray-100 fade-in">
              <div className="relative flex justify-center items-center text-center mb-2">
  <h3 className="text-lg md:text-xl font-semibold text-swiggy-dark leading-relaxed mr-2">
    Enter a mobile number or restaurant ID to continue
  </h3>

  {/* Info icon */}
  <button
    type="button"
    onClick={() => setShowInfo(!showInfo)}
    className="p-1 rounded-full hover:bg-orange-50 transition"
    aria-label="Show Info"
  >
    <svg width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M9 1.5a7.5 7.5 0 100 15 7.5 7.5 0 000-15z"
        stroke="#F15700"
        strokeWidth="2"
      />
      <path d="M9 12V8" stroke="#F15700" strokeWidth="2" />
      <circle cx="9" cy="5.5" r="1" fill="#F15700" />
    </svg>
  </button>

  {/* Popup content */}
    {showInfo && (
  <div
    className="absolute top-10 w-[320px] bg-white text-left text-sm text-gray-700 p-4 border border-orange-200 rounded-md shadow-xl z-50 animate-fade-in-scale"
  >
    <ul className="list-disc pl-4 space-y-1">
      <li>Use registered mobile number for login if you want to track business</li>
      <li>Use restaurant ID to login if you only want to take orders</li>
      <li>Use registered mobile for signing-up a new user</li>
      <li>Enter a mobile number to start onboarding an outlet</li>
    </ul>
  </div>
)}
  
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
  disabled={!mobileOrId.trim()}
  className={`w-full py-2 rounded-xl font-semibold text-sm shadow-lg transition-all duration-200
    ${!mobileOrId.trim() 
      ? "bg-gray-200 text-gray-500 cursor-not-allowed" 
      : "bg-swiggy-orange text-black hover:bg-swiggy-orange-hover hover:scale-[1.02] active:scale-[0.98] hover:shadow-xl"}`}
>
  Continue
</Button>

              </form>

             <div className="mt-8 text-center text-sm text-gray-500">
  By logging in, I agree to Swiggy's{" "}
  <Link
    href="/terms"
    className="text-orange-500 hover:underline hover:text-orange-600 transition-colors font-semibold"
  >
    terms & conditions
  </Link>
</div>

            </div>
          </div>
        </div>
      </section>

<section id="steps-section" className="py-16 bg-transparent">
  <div className="container mx-auto px-4">
    <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
      {/* Left Card: Steps */}
      <div className="bg-white rounded-xl card-shadow card-shadow-hover transition-all duration-300 p-8 slide-in-left hover:shadow-[0_0_30px_10px_rgba(241,87,0,0.3)] hover:ring-2 hover:ring-[#F15700]/30
">
        <div className="text-center mb-8">
          <div className="w-20 h-1 mx-auto mb-4 bg-[#F15700] rounded-full" />
          <div className="flex items-center justify-center gap-3 mb-4">
            <svg className="w-6 h-6 text-[#F15700]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2L2 7h20L12 2zM2 7v7c0 5 10 9 10 9s10-4 10-9V7H2z" />
            </svg>
            <h2 className="text-2xl font-bold text-swiggy-dark">In just 3 easy steps</h2>
          </div>
          <p className="text-lg text-swiggy-gray">Get your restaurant delivery-ready in 24hrs!</p>
        </div>

        <div className="relative pl-6 before:absolute before:top-0 before:left-4 before:bottom-0 before:w-[2px] before:bg-[#F15700] space-y-10">
          {[1, 2, 3].map((step, index) => (
            <div
              key={index}
              className="relative flex items-start space-x-4 p-3 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <div className="absolute left-0 top-1.5 w-4 h-4 bg-[#F15700] rounded-full z-10" />
              <div className="ml-6">
                <h3 className="text-lg font-semibold text-swiggy-dark">{`STEP ${step}`}</h3>
                <p className="text-swiggy-gray">
                  {step === 1 && "Install the Swiggy Owner App"}
                  {step === 2 && "Login/Register using your phone number"}
                  {step === 3 && "Enter restaurant details"}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Card: Documents */}
      <div className="bg-white rounded-xl card-shadow card-shadow-hover transition-all duration-300 p-8 slide-in-right hover:shadow-[0_0_30px_10px_rgba(241,87,0,0.3)] hover:ring-2 hover:ring-[#F15700]/30
">
        <div className="text-center mb-8">
          <div className="w-20 h-1 mx-auto mb-4 bg-[#F15700] rounded-full" />
          <div className="flex items-center justify-center gap-3 mb-4">
            <svg className="w-6 h-6 text-[#F15700]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M4 4h16v16H4z" />
            </svg>
            <h2 className="text-2xl font-bold text-swiggy-dark">For an easy form filling process,</h2>
          </div>
          <p className="text-lg text-swiggy-gray">you can keep these documents handy.</p>
        </div>

        <div className="space-y-4">
          {/* Card Item */}
          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg transition-all duration-200 hover:scale-[1.02] hover:shadow-[0_0_20px_#F15700]/40 cursor-pointer">
            <div className="flex items-center space-x-3">
              <div className="bg-[#F15700] text-white w-10 h-10 rounded-full flex items-center justify-center">
                <FileText className="h-5 w-5" />
              </div>
              <span className="text-swiggy-dark font-medium">FSSAI License copy</span>
            </div>
            <a
              href="#"
              className="text-[#F15700] font-medium text-sm hover:underline hover:text-[#d94d00] transition-colors"
            >
              Apply Here
            </a>
          </div>

          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg transition-all duration-200 hover:scale-[1.02] hover:shadow-[0_0_20px_#F15700]/40 cursor-pointer">
            <div className="flex items-center space-x-3">
              <div className="bg-[#F15700] text-white w-10 h-10 rounded-full flex items-center justify-center">
                <FileText className="h-5 w-5" />
              </div>
              <span className="text-swiggy-dark font-medium">Your Restaurant menu</span>
            </div>
          </div>

          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg transition-all duration-200 hover:scale-[1.02] hover:shadow-[0_0_20px_#F15700]/40 cursor-pointer">
            <div className="flex items-center space-x-3">
              <div className="bg-[#F15700] text-white w-10 h-10 rounded-full flex items-center justify-center">
                <CreditCard className="h-5 w-5" />
              </div>
              <span className="text-swiggy-dark font-medium">Bank details</span>
            </div>
          </div>

          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg transition-all duration-200 hover:scale-[1.02] hover:shadow-[0_0_20px_#F15700]/40 cursor-pointer">
            <div className="flex items-center space-x-3">
              <div className="bg-[#F15700] text-white w-10 h-10 rounded-full flex items-center justify-center">
                <Receipt className="h-5 w-5" />
              </div>
              <span className="text-swiggy-dark font-medium">GSTIN</span>
            </div>
            <a
              href="#"
              className="text-[#F15700] font-medium text-sm hover:underline hover:text-[#d94d00] transition-colors"
            >
              Apply Here
            </a>
          </div>

          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg transition-all duration-200 hover:scale-[1.02] hover:shadow-[0_0_20px_#F15700]/40 cursor-pointer">
            <div className="flex items-center space-x-3">
              <div className="bg-[#F15700] text-white w-10 h-10 rounded-full flex items-center justify-center">
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

<footer className="bg-[#F15700] text-white py-12 mt-16">
  <div className="container mx-auto px-4 grid md:grid-cols-4 gap-8 text-sm">
    {/* Who We Are */}
    <div>
      <h3 className="text-lg font-bold mb-4">Who We Are</h3>
      <ul className="space-y-2">
        <li><a href="#" className="hover:underline">About Us</a></li>
        <li><a href="#" className="hover:underline">Our Mission</a></li>
        <li><a href="#" className="hover:underline">Careers</a></li>
      </ul>
    </div>

    {/* Support */}
    <div>
      <h3 className="text-lg font-bold mb-4">Support</h3>
      <ul className="space-y-2">
        <li><a href="#" className="hover:underline">Help Center</a></li>
        <li><a href="#" className="hover:underline">FAQs</a></li>
        <li><a href="#" className="hover:underline">Report a Problem</a></li>
      </ul>
    </div>

    {/* Contact */}
    <div>
      <h3 className="text-lg font-bold mb-4">Contact Us</h3>
      <ul className="space-y-2">
        <li>Email: <a href="mailto:swiggypartner@gmail.com" className="underline">swiggypartner@email.com</a></li>
        <li>Phone: <a href="tel:+212 0604289972" className="underline">+212 0604289972</a></li>
        <li><a href="#" className="hover:underline">Live Chat</a></li>
      </ul>
    </div>

    {/* App Download */}
   <div>
  <h3 className="text-lg font-bold mb-4">Download Our App</h3>
  <div className="flex flex-col space-y-3">
    <a href="https://play.google.com/store/apps/details?id=in.swiggy.android" target="_blank" rel="noopener noreferrer" className="inline-block">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
        alt="Get it on Google Play"
        className="h-12"
      />
    </a>
    <a href="#" target="_blank" rel="noopener noreferrer" className="inline-block">
      <img
        src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
        alt="Download on the App Store"
        className="h-12"
      />
    </a>
  </div>
</div>
  </div>

  <div className="mt-10 text-center text-sm border-t border-white/20 pt-6">
    &copy; {new Date().getFullYear()} SwiggyPartner. All rights reserved.
  </div>
</footer>


    </div>
  );
}
