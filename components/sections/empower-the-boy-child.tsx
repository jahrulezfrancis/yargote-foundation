import { ArrowRight, CheckCircle, Heart, Lightbulb, Shield, Star, Users } from "lucide-react"
import { Card, CardContent } from "../ui/card";
import CountUp from "@/utils/countUp";
import { Button } from "../ui/button";
import Link from "next/link";




const corePilars = [
    {
        icon: Shield,
        title: "Protection & Safety",
        description: "Creating secure environments where boys can grow, learn, and thrive without fear or judgment"
    },
    {
        icon: Lightbulb,
        title: "Education & Skills",
        description: "Equipping boys with knowledge, life skills, and emotional intelligence for future success"
    },
    {
        icon: Heart,
        title: "Emotional Support",
        description: "Providing counseling, mentorship, and guidance to build resilient, confident young men"
    }
]

interface Props {
    coreRef?: React.RefObject<HTMLElement>;
    isSectionVisible: (sectionId: string) => boolean;

}

const waMessageLink = "https://wa.me/2348065361349?text=Hello!%20I%E2%80%99m%20interested%20in%20volunteering%20with%20your%20organization%20as%20a%20mentor%20(Or%20mention%20role%20here).%20Please%20share%20more%20details%20on%20how%20I%20can%20get%20involved.%20Thank%20you!"


export default function EmpowerTheBoyChildProjecComponent({ coreRef, isSectionVisible }: Props) {
    return (
        <section ref={coreRef} id="core-section" className="py-16 md:py-24 bg-gradient-to-br from-emerald-600 via-emerald-700 to-emerald-800 text-white relative overflow-hidden transition-all duration-700 ease-out">
            {/* Animated background elements */}
            <div className="absolute inset-0">
                <div className="absolute top-0 right-0 w-64 md:w-96 h-64 md:h-96 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-0 left-0 w-56 md:w-80 h-56 md:h-80 bg-white/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-1/3 w-48 md:w-60 h-48 md:h-60 bg-primary-yellow/10 rounded-full blur-2xl animate-pulse delay-500"></div>
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="max-w-6xl mx-auto">
                    {/* Header */}
                    <div className={`text-center mb-12 md:mb-16 transition-all duration-1000 ease-out ${isSectionVisible('core-section') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                        }`}>
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6">
                            <Star className="w-4 h-4 text-primary-yellow" />
                            <span className="text-sm font-medium">Our Core Mission</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight px-4">
                            Empower the Boy Child
                        </h2>
                        <div className={`w-24 md:w-32 h-1 bg-primary-yellow mx-auto mb-6 md:mb-8 transition-all duration-1000 ease-out ${isSectionVisible('core-section') ? 'w-24 md:w-32' : 'w-0'
                            }`}></div>
                        <p className="text-lg md:text-xl lg:text-2xl text-emerald-50 leading-relaxed max-w-4xl mx-auto px-4">
                            The heartbeat of our foundation - a comprehensive initiative addressing the unique challenges facing boys today through targeted interventions and unwavering support
                        </p>
                    </div>

                    {/* Core Pillars Grid */}
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16 px-4">
                        {corePilars.map((pillar, index) => (
                            <Card key={index} className={`bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-500 hover:-translate-y-2 group ${isSectionVisible('core-section') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                                }`} style={{ transitionDelay: `${index * 150 + 200}ms` }}>
                                <CardContent className="p-6 md:p-8 text-center space-y-4">
                                    <div className="w-14 h-14 md:w-16 md:h-16 bg-primary-yellow/20 rounded-2xl flex items-center justify-center mx-auto group-hover:bg-primary-yellow/30 group-hover:scale-110 transition-all duration-500">
                                        <pillar.icon className="w-7 h-7 md:w-8 md:h-8 text-primary-yellow" />
                                    </div>
                                    <h3 className="text-lg md:text-xl font-bold text-white">{pillar.title}</h3>
                                    <p className="text-sm md:text-base text-emerald-50 leading-relaxed">{pillar.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    {/* Impact Statement */}
                    <div className={`bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-6 md:p-12 transition-all duration-1000 ease-out ${isSectionVisible('core-section') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                        }`} style={{ transitionDelay: '600ms' }}>
                        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
                            <div className="space-y-6 order-2 lg:order-1">
                                <h3 className="text-2xl md:text-3xl font-bold text-white">Why This Matters</h3>
                                <p className="text-base md:text-lg text-emerald-50 leading-relaxed">
                                    Boys face unique societal pressures, emotional challenges, and developmental needs that often go unaddressed. Our "Empower the Boy Child" initiative tackles these head-on through:
                                </p>
                                <ul className="space-y-3 md:space-y-4">
                                    {[
                                        "Positive male role models and mentorship",
                                        "Safe spaces for emotional expression",
                                        "Academic and career guidance",
                                        "Life skills and financial literacy",
                                        "Family bonding and community support"
                                    ].map((item, index) => (
                                        <li key={index} className={`flex items-start gap-3 group transition-all duration-500 ${isSectionVisible('core-section') ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                                            }`} style={{ transitionDelay: `${index * 100 + 800}ms` }}>
                                            <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-primary-yellow flex-shrink-0 mt-0.5 md:mt-1 group-hover:scale-110 transition-transform duration-300" />
                                            <span className="text-sm md:text-base text-emerald-50 leading-relaxed">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className={`relative order-1 lg:order-2 transition-all duration-1000 ease-out ${isSectionVisible('core-section') ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                                }`} style={{ transitionDelay: '400ms' }}>
                                <div className="absolute -inset-4 bg-primary-yellow/20 rounded-3xl blur-2xl"></div>
                                <Card className="bg-white relative z-10 border-0 shadow-2xl">
                                    <CardContent className="p-6 md:p-8 space-y-6">
                                        <div className="text-center">
                                            <div className="text-4xl md:text-5xl font-bold text-emerald-600 mb-2">
                                                <CountUp end={300} />
                                            </div>
                                            <p className="text-sm md:text-base text-gray-600 font-medium">Boys Empowered Annually</p>
                                        </div>
                                        <div className="h-px bg-gray-200"></div>
                                        <div className="grid grid-cols-2 gap-4 md:gap-6 text-center">
                                            <div>
                                                <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">
                                                    <CountUp end={20} />
                                                </div>
                                                <p className="text-xs md:text-sm text-gray-600">Active Mentors</p>
                                            </div>
                                            <div>
                                                <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">
                                                    <CountUp end={50} />
                                                </div>
                                                <p className="text-xs md:text-sm text-gray-600">Communities</p>
                                            </div>
                                        </div>
                                        <Link target="_blank" href={waMessageLink}>
                                            <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white group transition-all duration-300 hover:scale-105">
                                                Join the Movement
                                                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                            </Button>
                                        </Link>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    </div>

                    {/* Call to Action */}
                    <div className={`text-center mt-12 md:mt-16 space-y-6 px-4 transition-all duration-1000 ease-out ${isSectionVisible('core-section') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                        }`} style={{ transitionDelay: '1000ms' }}>
                        <p className="text-lg md:text-xl text-emerald-50 italic">
                            "Every boy deserves the opportunity to reach his full potential"
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href={"/donate"}>
                                <Button size="lg" className="bg-primary-yellow text-gray-900 hover:bg-yellow-400 group transition-all duration-300 hover:scale-105 hover:shadow-xl w-full sm:w-auto">
                                    <Heart className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                                    Support This Mission
                                </Button>
                            </Link>
                            <Link target="_blank" href={waMessageLink}>
                                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-emerald-600 bg-transparent group transition-all duration-300 hover:scale-105 w-full sm:w-auto">
                                    <Users className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                                    Become a Mentor
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}