import VideoTestimonialCard from "../video-testimonial-component"

export function VideoTestimonialsSection() {
    const testimonials = [
        {
            videoUrl: "https://res.cloudinary.com/dsaaffacl/video/upload/v1759920310/69117f5d-56dd-478e-9cb3-2653a184277f_fqnwpw.mov",
            thumbnailUrl: "https://res.cloudinary.com/dsaaffacl/video/upload/v1759920310/69117f5d-56dd-478e-9cb3-2653a184277f_fqnwpw.jpg",
            name: "Lydia",
            location: "Abuja, FCT",
            testimonial: "The Empower the Boy Child Project changed my life. I learned valuable skills and gained confidence to pursue my dreams. Now I'm mentoring younger boys in my community.",
            program: "Leadership Training"
        },
        {
            videoUrl: "https://res.cloudinary.com/dsaaffacl/video/upload/v1759920321/a04aca15-a993-429a-82cf-32983f3f124b_beed2r.mov",
            thumbnailUrl: "https://res.cloudinary.com/dsaaffacl/video/upload/v1759920321/a04aca15-a993-429a-82cf-32983f3f124b_beed2r.jpg",
            name: "Umar Tahiru",
            location: "Abuja, FCT",
            testimonial: "Before joining this program, I didn't believe in myself. Now I have the tools and support to build a better future. Thank you for believing in us.",
            program: "Skills Development"
        },
        {
            videoUrl: "https://res.cloudinary.com/dsaaffacl/video/upload/bef107ff-bc07-4cb7-b8c0-32ac3ba75c73_qameuf.mov",
            thumbnailUrl: "https://res.cloudinary.com/dsaaffacl/video/upload/bef107ff-bc07-4cb7-b8c0-32ac3ba75c73_qameuf.jpg",
            name: "Kefas Ayuba",
            // age: 17,
            location: "Abuja, FCT",
            testimonial: "This program opened doors I never knew existed. The mentorship and education I received gave me hope and direction for my future.",
            program: "Education Support"
        },
        {
            videoUrl: "https://res.cloudinary.com/dsaaffacl/video/upload/66e8e2a1-01d8-4151-af3b-e96fe7d1d600_udvri0.mov",
            thumbnailUrl: "https://res.cloudinary.com/dsaaffacl/video/upload/66e8e2a1-01d8-4151-af3b-e96fe7d1d600_udvri0.jpg",
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