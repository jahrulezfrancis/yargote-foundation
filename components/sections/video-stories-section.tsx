import VideoTestimonialCard from "../video-testimonial-component"

export function VideoTestimonialsSection() {
    const testimonials = [
        {
            videoUrl: "https://cdn.pixabay.com/video/2024/10/13/236256_large.mp4",
            thumbnailUrl: "/images/testimonial-thumb-1.jpg",
            name: "Chukwuemeka Okonkwo",
            // age: 16,
            location: "Abuja, FCT",
            testimonial: "The Empower the Boy Child Project changed my life. I learned valuable skills and gained confidence to pursue my dreams. Now I'm mentoring younger boys in my community.",
            program: "Leadership Training"
        },
        {
            videoUrl: "/videos/testimonial-2.mp4",
            thumbnailUrl: "/images/testimonial-thumb-2.jpg",
            name: "Umar Tahiru",
            // age: 15,
            location: "Abuja, FCT",
            testimonial: "Before joining this program, I didn't believe in myself. Now I have the tools and support to build a better future. Thank you for believing in us.",
            program: "Skills Development"
        },
        {
            videoUrl: "/videos/testimonial-3.mp4",
            thumbnailUrl: "/images/testimonial-thumb-3.jpg",
            name: "Kefas Ayuba",
            // age: 17,
            location: "Abuja, FCT",
            testimonial: "This program opened doors I never knew existed. The mentorship and education I received gave me hope and direction for my future.",
            program: "Education Support"
        },
        {
            videoUrl: "/videos/testimonial-3.mp4",
            thumbnailUrl: "/images/testimonial-thumb-3.jpg",
            name: "Khadija Abdullahi",
            // age: 17,
            location: "Abuja, FCT",
            testimonial: "This program opened doors I never knew existed. The mentorship and education I received gave me hope and direction for my future.",
            program: "Education Support"
        }
    ]

    return (
        <section className="py-12 md:py-16 lg:py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="text-center space-y-4 mb-12 md:mb-16">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                        Stories of Transformation
                    </h2>
                    <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                        Hear directly from the young boys whose lives have been changed through our programs
                    </p>
                </div>

                {/* Testimonials Grid */}
                <div className="space-y-8 md:space-y-12 max-w-6xl mx-auto">
                    {testimonials.map((testimonial, index) => (
                        <VideoTestimonialCard
                            key={index}
                            {...testimonial}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}