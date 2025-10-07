import { ArrowRight, Sparkles } from "lucide-react";

export function EmpowerBoyChildBanner() {
  return (
    <div className="relative bg-gradient-to-r from-emerald-600 via-emerald-700 to-emerald-800 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItaDJWMzRoLTJ6bTAgNGgtMnYyaDJ2LTJ6bTQtNGgtMnYyaDJ2LTJ6bTAtNGgtMnYyaDJ2LTJ6bTItMmgtMnYyaDJ2LTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30"></div>
      
      <div className="container mx-auto px-4 py-4 md:py-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-white">
            <div className="bg-primary-yellow/90 backdrop-blur-sm p-2 rounded-lg">
              <Sparkles className="w-6 h-6 text-emerald-700" />
            </div>
            <div className="text-center md:text-left">
              <h2 className="text-xl md:text-2xl font-bold mb-1">
                Empower the Boy Child Project
              </h2>
              <p className="text-emerald-50 text-sm md:text-base">
                Join us in making a difference in young lives across our community
              </p>
            </div>
          </div>
          
          <button className="bg-primary-yellow text-emerald-700 hover:bg-yellow-400 px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl hover:scale-105 whitespace-nowrap">
            Learn More
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
      
      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-yellow via-yellow-300 to-primary-yellow"></div>
    </div>
  );
}