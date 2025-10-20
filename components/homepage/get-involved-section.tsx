import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Users, Handshake, ArrowRight } from "lucide-react"
import Link from "next/link"


export function GetInvolvedSection() {
    return (
        <section className="py-20 bg-gradient-to-br from-emerald-50 via-white to-emerald-50/30">
            <div className="container mx-auto px-4">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center space-y-4 mb-12">
                        <h2 className="text-3xl lg:text-4xl font-bold text-balance">Join Our Mission</h2>
                        <p className="text-xl text-gray-600 text-pretty max-w-2xl mx-auto leading-relaxed">
                            There are many ways you can make a difference in the lives of young men in our community
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        <Card className="border-emerald-200 hover:shadow-xl transition-all duration-300 group cursor-pointer">
                            <CardContent className="p-8 text-center space-y-4">
                                <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                                    <Heart className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-2xl font-semibold text-gray-900">Donate</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    Your financial support helps us expand our programs and reach more boys in need.
                                </p>

                                <Link href="/donate">
                                    <Button className="bg-emerald-600 hover:bg-emerald-700 text-white w-full group-hover:scale-105 transition-all duration-300">
                                        Give Today
                                        <ArrowRight className="w-4 h-4 ml-2" />
                                    </Button>
                                </Link>
                            </CardContent>
                        </Card>

                        <Card className="border-emerald-200 hover:shadow-xl transition-all duration-300 group cursor-pointer">
                            <CardContent className="p-8 text-center space-y-4">
                                <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                                    <Users className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-2xl font-semibold text-gray-900">Volunteer</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    Become a mentor and directly impact the life of a young man through guidance and support.
                                </p>
                                <Link href="/contact#form">
                                    <Button className="bg-emerald-600 hover:bg-emerald-700 text-white w-full group-hover:scale-105 transition-all duration-300">
                                        Get Started
                                        <ArrowRight className="w-4 h-4 ml-2" />
                                    </Button>
                                </Link>
                            </CardContent>
                        </Card>

                        <Card className="border-emerald-200 hover:shadow-xl transition-all duration-300 group cursor-pointer">
                            <CardContent className="p-8 text-center space-y-4">
                                <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                                    <Handshake className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-2xl font-semibold text-gray-900">Partner</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    Collaborate with us to create sustainable programs and amplify our community impact.
                                </p>
                                <Link href={"/contact#form"}>
                                    <Button className="bg-emerald-600 hover:bg-emerald-700 text-white w-full group-hover:scale-105 transition-all duration-300">
                                        Learn More
                                        <ArrowRight className="w-4 h-4 ml-2" />
                                    </Button>
                                </Link>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    )
}