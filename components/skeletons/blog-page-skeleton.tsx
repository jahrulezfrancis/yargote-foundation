// Skeleton Components


export const BlogPageSkeleton = () => {
  return (
    <div className="min-h-screen bg-background">
      <main>
        {/* Featured Post Skeleton */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <div className="text-center space-y-4 mb-12 md:mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 rounded-full border border-emerald-200">
                <div className="w-4 h-4 bg-slate-300 rounded animate-pulse"></div>
                <div className="w-28 h-4 bg-slate-300 rounded animate-pulse"></div>
              </div>
            </div>

            <div className="max-w-5xl mx-auto">
              <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
                <div className="w-full h-96 bg-slate-200 animate-pulse"></div>
                <div className="p-8 space-y-4">
                  <div className="flex gap-2">
                    <div className="w-20 h-6 bg-slate-200 rounded-full animate-pulse"></div>
                    <div className="w-24 h-6 bg-slate-200 rounded-full animate-pulse"></div>
                  </div>
                  <div className="space-y-2">
                    <div className="w-3/4 h-8 bg-slate-200 rounded animate-pulse"></div>
                    <div className="w-1/2 h-8 bg-slate-200 rounded animate-pulse"></div>
                  </div>
                  <div className="space-y-2">
                    <div className="w-full h-4 bg-slate-200 rounded animate-pulse"></div>
                    <div className="w-full h-4 bg-slate-200 rounded animate-pulse"></div>
                    <div className="w-4/5 h-4 bg-slate-200 rounded animate-pulse"></div>
                  </div>
                  <div className="flex items-center gap-3 pt-4">
                    <div className="w-10 h-10 bg-slate-200 rounded-full animate-pulse"></div>
                    <div className="space-y-2">
                      <div className="w-32 h-4 bg-slate-200 rounded animate-pulse"></div>
                      <div className="w-24 h-3 bg-slate-200 rounded animate-pulse"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Video Section Skeleton */}
        <section className="py-16 md:py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <div className="text-center space-y-4 mb-12">
              <div className="w-48 h-8 bg-slate-200 rounded mx-auto animate-pulse"></div>
              <div className="w-64 h-4 bg-slate-200 rounded mx-auto animate-pulse"></div>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {[1, 2].map((i) => (
                <div key={i} className="w-full h-64 bg-slate-200 rounded-lg animate-pulse"></div>
              ))}
            </div>
          </div>
        </section>

        {/* Other Posts Skeleton */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <div className="text-center space-y-4 mb-12 md:mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full border border-blue-200">
                <div className="w-4 h-4 bg-slate-300 rounded animate-pulse"></div>
                <div className="w-28 h-4 bg-slate-300 rounded animate-pulse"></div>
              </div>
              <div className="w-64 h-10 bg-slate-200 rounded mx-auto animate-pulse"></div>
              <div className="space-y-2 max-w-2xl mx-auto">
                <div className="w-full h-4 bg-slate-200 rounded animate-pulse"></div>
                <div className="w-3/4 h-4 bg-slate-200 rounded mx-auto animate-pulse"></div>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
                  <div className="w-full h-48 bg-slate-200 animate-pulse"></div>
                  <div className="p-6 space-y-4">
                    <div className="flex gap-2">
                      <div className="w-16 h-5 bg-slate-200 rounded-full animate-pulse"></div>
                      <div className="w-20 h-5 bg-slate-200 rounded-full animate-pulse"></div>
                    </div>
                    <div className="space-y-2">
                      <div className="w-full h-6 bg-slate-200 rounded animate-pulse"></div>
                      <div className="w-3/4 h-6 bg-slate-200 rounded animate-pulse"></div>
                    </div>
                    <div className="space-y-2">
                      <div className="w-full h-3 bg-slate-200 rounded animate-pulse"></div>
                      <div className="w-full h-3 bg-slate-200 rounded animate-pulse"></div>
                      <div className="w-2/3 h-3 bg-slate-200 rounded animate-pulse"></div>
                    </div>
                    <div className="flex items-center gap-3 pt-2">
                      <div className="w-8 h-8 bg-slate-200 rounded-full animate-pulse"></div>
                      <div className="space-y-2 flex-1">
                        <div className="w-24 h-3 bg-slate-200 rounded animate-pulse"></div>
                        <div className="w-20 h-2 bg-slate-200 rounded animate-pulse"></div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12 md:mt-16">
              <div className="w-48 h-12 bg-slate-200 rounded-lg mx-auto animate-pulse"></div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
