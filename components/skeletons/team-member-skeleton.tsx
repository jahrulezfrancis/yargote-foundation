export default function TeamMemberCardSkeleton() {
    return (
        <div className="bg-card rounded-lg shadow-md overflow-hidden border animate-pulse">
            <div className="p-0">
                {/* Image skeleton */}
                <div className="w-full h-64 bg-muted"></div>
                
                <div className="p-6 space-y-4">
                    {/* Name skeleton */}
                    <div className="space-y-2">
                        <div className="h-6 bg-muted rounded w-3/4 mx-auto"></div>
                        {/* Role skeleton */}
                        <div className="h-5 bg-muted rounded w-1/2 mx-auto"></div>
                    </div>

                    {/* Bio skeleton - 3 lines */}
                    <div className="space-y-2">
                        <div className="h-4 bg-muted rounded w-full"></div>
                        <div className="h-4 bg-muted rounded w-full"></div>
                        <div className="h-4 bg-muted rounded w-2/3 mx-auto"></div>
                    </div>

                    {/* Button skeleton */}
                    <div className="h-5 bg-muted rounded w-32 mx-auto"></div>
                </div>
            </div>
        </div>
    );
}

export function TeamMemberGridSkeleton({ count = 3 }: { count?: number }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: count }).map((_, index) => (
                <TeamMemberCardSkeleton key={index} />
            ))}
        </div>
    );
}