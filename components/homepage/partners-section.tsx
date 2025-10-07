export function PartnersSection() {
  const partners = [
    { name: "Partner 1", logo: "https://via.placeholder.com/200x80/10b981/ffffff?text=Partner+1" },
    { name: "Partner 2", logo: "https://via.placeholder.com/200x80/10b981/ffffff?text=Partner+2" },
    { name: "Partner 3", logo: "https://via.placeholder.com/200x80/10b981/ffffff?text=Partner+3" },
    { name: "Partner 4", logo: "https://via.placeholder.com/200x80/10b981/ffffff?text=Partner+4" },
    { name: "Partner 5", logo: "https://via.placeholder.com/200x80/10b981/ffffff?text=Partner+5" },
    { name: "Partner 6", logo: "https://via.placeholder.com/200x80/10b981/ffffff?text=Partner+6" }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-emerald-50 via-white to-emerald-50/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance">Our Partners</h2>
            <p className="text-xl text-gray-600 text-pretty max-w-2xl mx-auto leading-relaxed">
              Proud to collaborate with organizations that share our vision
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {partners.map((partner, index) => (
              <div 
                key={index}
                className="flex items-center justify-center p-4 bg-white rounded-lg border border-emerald-200 hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer grayscale hover:grayscale-0"
              >
                <img 
                  src={partner.logo} 
                  alt={partner.name}
                  className="w-full h-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
