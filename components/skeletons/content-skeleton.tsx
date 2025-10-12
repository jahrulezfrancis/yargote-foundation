import { Card, CardContent } from "../ui/card"

export default function ContentPageSkeleton() {
    return (
        <div className="min-h-screen bg-white">
            <main>
                {/* Hero Skeleton */}
                <section className="relative bg-slate-200 animate-pulse py-20 lg:py-32">
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-300/60 to-slate-300/50"></div>
                    <div className="relative container mx-auto px-6 lg:px-8">
                        <div className="max-w-5xl mx-auto">
                            <div className="mb-8 w-32 h-10 bg-slate-300 rounded"></div>

                            <div className="space-y-8">
                                <div className="flex items-center gap-3">
                                    <div className="w-24 h-6 bg-slate-300 rounded-full"></div>
                                    <div className="w-28 h-6 bg-slate-300 rounded-full"></div>
                                </div>

                                <div className="space-y-4">
                                    <div className="w-3/4 h-12 bg-slate-300 rounded"></div>
                                    <div className="w-1/2 h-12 bg-slate-300 rounded"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Content Skeleton */}
                <section className="py-16 lg:py-24">
                    <div className="container mx-auto px-6 lg:px-8">
                        <div className="max-w-5xl mx-auto">
                            <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">

                                {/* Main Content Skeleton */}
                                <div className="lg:col-span-2 space-y-12">
                                    <div className="space-y-6">
                                        <div className="w-48 h-8 bg-slate-200 rounded animate-pulse"></div>
                                        <div className="space-y-4">
                                            <div className="w-full h-4 bg-slate-200 rounded animate-pulse"></div>
                                            <div className="w-full h-4 bg-slate-200 rounded animate-pulse"></div>
                                            <div className="w-5/6 h-4 bg-slate-200 rounded animate-pulse"></div>
                                            <div className="w-full h-4 bg-slate-200 rounded animate-pulse"></div>
                                            <div className="w-4/5 h-4 bg-slate-200 rounded animate-pulse"></div>
                                        </div>
                                    </div>

                                    {/* Image Gallery Skeleton */}
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="w-full h-48 bg-slate-200 rounded-lg animate-pulse"></div>
                                        <div className="w-full h-48 bg-slate-200 rounded-lg animate-pulse"></div>
                                    </div>
                                </div>

                                {/* Sidebar Skeleton */}
                                <div className="space-y-8 w-full">
                                    <Card className="border-slate-200 shadow-sm w-full">
                                        <CardContent className="p-8">
                                            <div className="w-32 h-6 bg-slate-200 rounded animate-pulse mb-6"></div>

                                            <div className="space-y-6">
                                                {[1, 2, 3].map((i) => (
                                                    <div key={i} className="flex items-start gap-4">
                                                        <div className="flex-shrink-0 w-10 h-10 bg-slate-200 rounded-lg animate-pulse"></div>
                                                        <div className="flex-1 space-y-2">
                                                            <div className="w-20 h-4 bg-slate-200 rounded animate-pulse"></div>
                                                            <div className="w-full h-4 bg-slate-200 rounded animate-pulse"></div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>

                                            <div className="pt-8 border-t border-slate-100 mt-8">
                                                <div className="w-full h-12 bg-slate-200 rounded animate-pulse"></div>
                                            </div>
                                        </CardContent>
                                    </Card>

                                    <Card className="border-slate-200 shadow-sm w-full">
                                        <CardContent className="p-8">
                                            <div className="w-32 h-6 bg-slate-200 rounded animate-pulse mb-4"></div>
                                            <div className="space-y-2 mb-6">
                                                <div className="w-full h-4 bg-slate-200 rounded animate-pulse"></div>
                                                <div className="w-full h-4 bg-slate-200 rounded animate-pulse"></div>
                                                <div className="w-3/4 h-4 bg-slate-200 rounded animate-pulse"></div>
                                            </div>
                                            <div className="flex gap-4">
                                                <div className="w-[60%] h-10 bg-slate-200 rounded animate-pulse"></div>
                                                <div className="flex-1 h-10 bg-slate-200 rounded animate-pulse"></div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}
