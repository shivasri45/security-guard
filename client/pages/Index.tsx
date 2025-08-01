import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Shield, Users, Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram, Star, CheckCircle, Clock, Award, Eye, Target } from "lucide-react";

export default function Index() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white overflow-hidden pb-20">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-400/5 to-purple-400/5 rounded-full blur-3xl animate-spin slow"></div>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-4 h-4 bg-blue-400 rounded-full animate-bounce"></div>
          <div className="absolute top-40 right-20 w-6 h-6 bg-purple-400 rounded-full animate-bounce delay-500"></div>
          <div className="absolute bottom-40 left-20 w-3 h-3 bg-indigo-400 rounded-full animate-bounce delay-1000"></div>
          <div className="absolute bottom-20 right-40 w-5 h-5 bg-cyan-400 rounded-full animate-bounce delay-1500"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <div className="animate-fade-in-up">
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 mb-6">
                <Star className="w-5 h-5 text-yellow-400" />
                <span className="text-sm font-medium">Trusted by 50+ Government Departments</span>
              </div>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-black mb-8 bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent leading-tight">
              Elite Security &amp;<br />
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Manpower Solutions
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl mb-6 text-blue-100 font-light">
              Serving Government Departments with Contract-Based Staffing
            </p>
            
            <p className="text-lg mb-12 text-white/80 max-w-3xl mx-auto leading-relaxed">
              Professional, reliable, and disciplined personnel for your security and operational needs. 
              Experience excellence in every service delivery.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 px-8 py-4 h-auto text-lg font-semibold shadow-2xl transform hover:scale-105 transition-all duration-300">
                <Phone className="w-5 h-5 mr-2" />
                Contact Us Now
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 px-8 py-4 h-auto text-lg font-semibold">
                <Eye className="w-5 h-5 mr-2" />
                View Our Services
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50 -mt-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "500+", label: "Personnel Deployed", icon: Users },
              { number: "50+", label: "Government Clients", icon: Shield },
              { number: "10+", label: "Years Experience", icon: Award },
              { number: "24/7", label: "Support Available", icon: Clock }
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-gray-900 mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-block bg-gradient-to-r from-blue-100 to-purple-100 rounded-full px-6 py-2 mb-6">
              <span className="text-blue-700 font-semibold text-sm">ABOUT US</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Excellence in Security &amp; 
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Manpower</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-12 items-start">
            {/* Mission Section */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 h-full">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Target className="w-8 h-8 text-blue-600 mr-3" />
                  Our Mission
                </h3>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  We are dedicated to providing professional security guards and outsourced manpower
                  solutions specifically tailored for public sector offices and government departments.
                  Our commitment to excellence ensures that every client receives reliable, disciplined,
                  and well-trained personnel.
                </p>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  With years of experience in the industry, we understand the unique requirements
                  of government operations and deliver services that meet the highest standards of
                  professionalism and security.
                </p>

                {/* Why Choose Us - Now integrated in the same card */}
                <div className="border-t border-gray-200 pt-8">
                  <h4 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                    <CheckCircle className="w-6 h-6 text-blue-600 mr-3" />
                    Why Choose Us?
                  </h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      "Thoroughly vetted and trained personnel",
                      "Government compliance and documentation",
                      "24/7 supervision and support",
                      "Flexible contract terms",
                      "Competitive pricing with quality assurance"
                    ].map((item, index) => (
                      <div key={index} className="flex items-center group">
                        <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"></div>
                        <span className="text-gray-700 group-hover:text-gray-900 transition-colors duration-300">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Leadership Section */}
            <div className="lg:col-span-1">
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-8 text-white text-center h-full flex flex-col justify-center">
                <div className="mb-6">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F84733c62b236440aa75ba906cb0ebc93%2F8b2a3f6602724765bcdfd460a25555cc?format=webp&width=800"
                    alt="Professional leadership committed to serving government departments"
                    className="w-48 h-64 object-cover mx-auto rounded-2xl shadow-xl border-4 border-white/20"
                  />
                </div>
                <h4 className="text-xl font-bold mb-3">Professional Leadership</h4>
                <p className="text-blue-100 leading-relaxed">
                  Committed to serving government departments with integrity, excellence, and unwavering dedication to national service.
                </p>
                <div className="mt-6 pt-6 border-t border-white/20">
                  <div className="flex justify-center space-x-6 text-sm">
                    <div className="text-center">
                      <div className="text-2xl font-bold">10+</div>
                      <div className="text-blue-200">Years Leading</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold">50+</div>
                      <div className="text-blue-200">Govt. Projects</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full opacity-30">
            <div className="absolute top-20 left-20 w-72 h-72 bg-blue-200 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-20 w-72 h-72 bg-purple-200 rounded-full blur-3xl"></div>
          </div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-block bg-gradient-to-r from-blue-100 to-purple-100 rounded-full px-6 py-2 mb-6">
              <span className="text-blue-700 font-semibold text-sm">OUR SERVICES</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Professional Staffing
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Solutions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive staffing solutions tailored for government departments and public sector organizations
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-10">
            <Card className="group relative overflow-hidden border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-3 bg-gradient-to-br from-white to-blue-50">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardHeader className="text-center pb-4 relative z-10">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-xl">
                  <Shield className="w-10 h-10 text-white" />
                </div>
                <CardTitle className="text-3xl text-gray-900 group-hover:text-blue-600 transition-colors duration-300">Security Guards</CardTitle>
                <CardDescription className="text-gray-600 text-base">
                  Elite trained personnel in professional uniforms for comprehensive security coverage
                </CardDescription>
              </CardHeader>
              <CardContent className="relative z-10">
                <ul className="space-y-4 text-gray-700">
                  {[
                    "Professional security personnel in standardized uniforms",
                    "24/7 security coverage for government facilities",
                    "Trained in access control and emergency procedures",
                    "Regular supervision and quality monitoring",
                    "Background verified and police clearance certified"
                  ].map((item, index) => (
                    <li key={index} className="flex items-center group/item">
                      <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-4 group-hover/item:scale-125 transition-transform duration-300"></div>
                      <span className="group-hover/item:text-gray-900 transition-colors duration-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="group relative overflow-hidden border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-3 bg-gradient-to-br from-white to-purple-50">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardHeader className="text-center pb-4 relative z-10">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-xl">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <CardTitle className="text-3xl text-gray-900 group-hover:text-purple-600 transition-colors duration-300">Manpower Supply</CardTitle>
                <CardDescription className="text-gray-600 text-base">
                  Skilled and unskilled workforce solutions for public sector operations
                </CardDescription>
              </CardHeader>
              <CardContent className="relative z-10">
                <ul className="space-y-4 text-gray-700">
                  {[
                    "Administrative and clerical support staff",
                    "Maintenance and housekeeping personnel",
                    "Technical and specialized workforce",
                    "Temporary and permanent staffing solutions",
                    "Scalable workforce based on requirements"
                  ].map((item, index) => (
                    <li key={index} className="flex items-center group/item">
                      <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mr-4 group-hover/item:scale-125 transition-transform duration-300"></div>
                      <span className="group-hover/item:text-gray-900 transition-colors duration-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Uniform Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50/30 to-purple-50/30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-block bg-gradient-to-r from-blue-100 to-purple-100 rounded-full px-6 py-2 mb-6">
              <span className="text-blue-700 font-semibold text-sm">PROFESSIONAL STANDARDS</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Uniform
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Excellence</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              All our personnel are provided with standardized uniforms that reflect professionalism and discipline
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-white to-blue-50 rounded-3xl p-8 shadow-xl border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Standard Uniform Specifications</h3>
                <div className="space-y-4">
                  {[
                    { color: "bg-black", label: "Pants", detail: "Black formal trousers" },
                    { color: "bg-blue-400", label: "Shirt", detail: "White-blue check pattern" },
                    { color: "bg-gray-400", label: "Accessories", detail: "Name badge, company logo" },
                    { color: "bg-black", label: "Footwear", detail: "Black formal shoes" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                      <div className={`w-4 h-4 ${item.color} rounded-full mr-4`}></div>
                      <div>
                        <span className="font-semibold text-gray-900">{item.label}:</span>
                        <span className="text-gray-700 ml-2">{item.detail}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <p className="text-gray-700 leading-relaxed text-lg">
                Our uniform standards ensure a professional appearance that instills confidence 
                and represents the dignity of government service. All uniforms are maintained 
                to the highest standards of cleanliness and presentation.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-gradient-to-br from-white to-blue-50 p-12 rounded-3xl shadow-xl border border-gray-100 inline-block">
                <div className="w-56 h-72 bg-gradient-to-b from-blue-100 via-gray-100 to-blue-100 rounded-2xl mx-auto mb-8 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10"></div>
                  <div className="text-center relative z-10">
                    <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center shadow-xl">
                      <Shield className="w-12 h-12 text-white" />
                    </div>
                    <div className="text-sm text-gray-600 font-semibold mb-2">Professional</div>
                    <div className="text-sm text-gray-600 font-semibold mb-6">Security Personnel</div>
                    <div className="space-y-2">
                      <div className="w-20 h-3 bg-gradient-to-r from-blue-400 to-blue-500 mx-auto rounded-full"></div>
                      <div className="w-20 h-12 bg-gradient-to-r from-gray-800 to-black mx-auto rounded-lg"></div>
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 font-medium">
                  Maintaining highest standards of appearance and conduct
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-block bg-gradient-to-r from-blue-100 to-purple-100 rounded-full px-6 py-2 mb-6">
              <span className="text-blue-700 font-semibold text-sm">OUR CLIENTS</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Trusted by
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Government</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We are proud to serve various government departments and public sector organizations across the region
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { name: "Ministry of Defense", icon: Shield },
              { name: "Public Works Dept", icon: Users },
              { name: "State Secretariat", icon: Shield },
              { name: "Municipal Corp", icon: Users }
            ].map((client, index) => (
              <div key={index} className="group">
                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <client.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-sm font-bold text-gray-700 group-hover:text-blue-600 transition-colors duration-300">
                    {client.name}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-block bg-gradient-to-r from-blue-100 to-purple-100 rounded-full px-6 py-2 mb-6">
              <span className="text-blue-700 font-semibold text-sm">GET IN TOUCH</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Contact Our
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Expert Team</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get in touch with us for all your security and manpower requirements
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-gray-900">Get in Touch</h3>
              <div className="space-y-6">
                {[
                  { icon: Phone, title: "Phone", detail: "+91 98765 43210", color: "from-blue-500 to-blue-600" },
                  { icon: Mail, title: "Email", detail: "info@securitymanpower.com", color: "from-purple-500 to-purple-600" },
                  { icon: MapPin, title: "Location", detail: "123 Business District, Government Area, City - 110001", color: "from-indigo-500 to-indigo-600" }
                ].map((contact, index) => (
                  <div key={index} className="flex items-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                    <div className={`w-14 h-14 bg-gradient-to-br ${contact.color} rounded-2xl flex items-center justify-center mr-6`}>
                      <contact.icon className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-gray-900 text-lg">{contact.title}</div>
                      <div className="text-gray-600">{contact.detail}</div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-8 rounded-2xl text-white">
                <h4 className="text-xl font-bold mb-6">Business Hours</h4>
                <div className="space-y-3">
                  {[
                    { day: "Monday - Friday", time: "9:00 AM - 6:00 PM" },
                    { day: "Saturday", time: "9:00 AM - 2:00 PM" },
                    { day: "Sunday", time: "Closed" }
                  ].map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="text-white/90">{schedule.day}:</span>
                      <span className="font-semibold">{schedule.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="bg-white p-10 rounded-3xl shadow-2xl border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Send us a Message</h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      First Name *
                    </label>
                    <Input placeholder="Enter your first name" className="h-12 rounded-xl border-gray-200 focus:border-blue-500 focus:ring-blue-500" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      Last Name *
                    </label>
                    <Input placeholder="Enter your last name" className="h-12 rounded-xl border-gray-200 focus:border-blue-500 focus:ring-blue-500" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Email Address *
                  </label>
                  <Input type="email" placeholder="Enter your email address" className="h-12 rounded-xl border-gray-200 focus:border-blue-500 focus:ring-blue-500" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Phone Number *
                  </label>
                  <Input type="tel" placeholder="Enter your phone number" className="h-12 rounded-xl border-gray-200 focus:border-blue-500 focus:ring-blue-500" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Department/Organization
                  </label>
                  <Input placeholder="Enter your department or organization" className="h-12 rounded-xl border-gray-200 focus:border-blue-500 focus:ring-blue-500" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Service Required
                  </label>
                  <select className="flex h-12 w-full rounded-xl border border-gray-200 bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2">
                    <option value="">Select a service</option>
                    <option value="security">Security Guards</option>
                    <option value="manpower">Manpower Supply</option>
                    <option value="both">Both Services</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Message *
                  </label>
                  <Textarea 
                    placeholder="Please describe your requirements..."
                    className="min-h-[120px] rounded-xl border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <Button type="submit" className="w-full h-12 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-900 to-black text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-20 w-64 h-64 bg-purple-500 rounded-full blur-3xl"></div>
          </div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12">
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Security & Manpower Services
              </h3>
              <p className="text-gray-400 mb-8 max-w-md leading-relaxed">
                Professional security guards and manpower supply services for government departments. 
                Trusted, reliable, and committed to excellence in every service delivery.
              </p>
              <div className="flex space-x-4">
                {[Facebook, Twitter, Linkedin, Instagram].map((Icon, index) => (
                  <a key={index} href="#" className="group">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </a>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="text-xl font-bold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {["About Us", "Services", "Uniforms", "Clients", "Contact"].map((link, index) => (
                  <li key={index}>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-xl font-bold mb-6">Services</h4>
              <ul className="space-y-3">
                {["Security Guards", "Manpower Supply", "Government Contracts", "24/7 Support"].map((service, index) => (
                  <li key={index}>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block">
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-400">
              &copy; 2024 Security & Manpower Services. All rights reserved. | Designed with excellence for government partnerships.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
