import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Heart, Users, Handshake, ArrowRight, Quote, Mail, Target, Eye, CheckCircle2 } from "lucide-react"

// About Section (Mission & Vision)
export function AboutSection() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center space-y-4 mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold text-balance">Who We Are</h2>
                        <p className="text-xl text-gray-600 text-pretty max-w-2xl mx-auto leading-relaxed">
                            Dedicated to transforming the lives of boys through comprehensive support and mentorship
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <Card className="border-emerald-200 hover:shadow-lg hover:scale-105 transition-all duration-300 group">
                            <CardContent className="p-8 space-y-4">
                                <div className="w-14 h-14 bg-emerald-100 rounded-full flex items-center justify-center group-hover:bg-emerald-200 transition-colors duration-300">
                                    <Target className="w-7 h-7 text-emerald-600" />
                                </div>
                                <h3 className="text-2xl font-semibold text-gray-900">Our Mission</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    To nurture and empower children, youth and women through advocacy, education, life skills, mentorship and community engagement thereby fostering resilience, responsible citizenship and sustainable growth
                                </p>
                                <div className="pt-4 space-y-2">
                                    <div className="flex items-start gap-2">
                                        <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                                        <span className="text-gray-700">Character development and leadership training</span>
                                    </div>
                                    <div className="flex items-start gap-2">
                                        <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                                        <span className="text-gray-700">Academic excellence and educational support</span>
                                    </div>
                                    <div className="flex items-start gap-2">
                                        <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                                        <span className="text-gray-700">Community engagement and service</span>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="border-emerald-200 hover:shadow-lg hover:scale-105 transition-all duration-300 group">
                            <CardContent className="p-8 space-y-4">
                                <div className="w-14 h-14 bg-emerald-100 rounded-full flex items-center justify-center group-hover:bg-emerald-200 transition-colors duration-300">
                                    <Eye className="w-7 h-7 text-emerald-600" />
                                </div>
                                <h3 className="text-2xl font-semibold text-gray-900">Our Vision</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    To create a world where every child, youth and woman has the opportunity to live with dignity, fulfil their potential and contribute meaningfully to national development.
                                </p>
                                <div className="pt-4 space-y-2">
                                    <div className="flex items-start gap-2">
                                        <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                                        <span className="text-gray-700">Sustainable community transformation</span>
                                    </div>
                                    <div className="flex items-start gap-2">
                                        <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                                        <span className="text-gray-700">Generational impact and legacy building</span>
                                    </div>
                                    <div className="flex items-start gap-2">
                                        <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                                        <span className="text-gray-700">Empowered youth leading change</span>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    )
}
