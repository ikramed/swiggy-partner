import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Utensils, FileText, Users, CreditCard, Receipt, IdCard } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [mobileOrId, setMobileOrId] = useState("");

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
                <Utensils className="h-8 w-8" />
              </div>
              <h1 className="text-xl font-bold text-swiggy-dark">Swiggy Partner</h1>
            </div>
            <nav className="hidden md:flex space-x-6">
              <a href="#" className="text-swiggy-gray hover:text-swiggy-orange transition-colors">
                Help
              </a>
              <a href="#" className="text-swiggy-gray hover:text-swiggy-orange transition-colors">
                Contact
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-swiggy-orange to-orange-600 min-h-screen flex items-center">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left content */}
            <div className="text-white">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                PARTNER WITH SWIGGY!
              </h2>
              <p className="text-xl md:text-2xl mb-8 text-orange-100">
                Increase your online orders
              </p>
              <Button className="bg-white text-swiggy-orange px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors text-lg">
                Get Started
              </Button>
            </div>

            {/* Right login form */}
            <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md mx-auto w-full">
              <div className="text-center mb-8">
                <h3 className="text-lg font-semibold text-swiggy-dark mb-2">
                  Enter a mobile number or restaurant ID to continue
                </h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    type="text"
                    placeholder="Enter Restaurant ID / Mobile number"
                    value={mobileOrId}
                    onChange={(e) => setMobileOrId(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-swiggy-orange focus:border-transparent"
                  />
                </div>
                
                <Button 
                  type="submit"
                  className="w-full bg-swiggy-orange text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors"
                >
                  Continue
                </Button>
              </form>

              <div className="mt-6 text-center text-sm text-swiggy-gray">
                By logging in, I agree to Swiggy's{" "}
                <a href="#" className="text-swiggy-orange hover:underline">
                  terms & conditions
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-16 bg-swiggy-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-swiggy-dark mb-4">
              In just 3 easy steps
            </h2>
            <p className="text-lg text-swiggy-gray">
              Get your restaurant delivery-ready in 24hrs!
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="bg-swiggy-orange text-white w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-lg font-semibold text-swiggy-dark mb-2">STEP 1</h3>
              <p className="text-swiggy-gray">Install the Swiggy Owner App</p>
            </div>

            <div className="text-center">
              <div className="bg-swiggy-orange text-white w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-lg font-semibold text-swiggy-dark mb-2">STEP 2</h3>
              <p className="text-swiggy-gray">Login/Register using your phone number</p>
            </div>

            <div className="text-center">
              <div className="bg-swiggy-orange text-white w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-lg font-semibold text-swiggy-dark mb-2">STEP 3</h3>
              <p className="text-swiggy-gray">Enter restaurant details</p>
            </div>
          </div>
        </div>
      </section>

      {/* Documents Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-swiggy-dark mb-4">
              For an easy form filling process,
            </h2>
            <p className="text-lg text-swiggy-gray">
              you can keep these documents handy.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
              <div className="bg-swiggy-orange text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-swiggy-dark mb-2">FSSAI License copy</h3>
              <a href="#" className="text-swiggy-orange hover:underline font-medium">
                Apply Here
              </a>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
              <div className="bg-swiggy-orange text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <Utensils className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-swiggy-dark mb-2">Your Restaurant menu</h3>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
              <div className="bg-swiggy-orange text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <CreditCard className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-swiggy-dark mb-2">Bank details</h3>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
              <div className="bg-swiggy-orange text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <Receipt className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-swiggy-dark mb-2">GSTIN</h3>
              <a href="#" className="text-swiggy-orange hover:underline font-medium">
                Apply Here
              </a>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
              <div className="bg-swiggy-orange text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <IdCard className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-swiggy-dark mb-2">PAN card copy</h3>
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
                  <Users className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  <Users className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  <Users className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  <Users className="h-5 w-5" />
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
