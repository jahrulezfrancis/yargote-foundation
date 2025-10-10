import Image from "next/image"


export default function ImagesRenderer({ images, title }: { images: string[], title: string }) {
    return (
        <div>
            {images.length &&
                <div>
                    <h2 className="font-semibold text-gray-500 text-start p-3">Images from the {title} </h2>
                    <div className="flex p-3 flex-wrap gap-3">
                        {images.map((image, index) => {
                            return <Image objectFit="cover" src={image} key={index} width={280} height={400} className="h-75 object-cover" alt={title} />
                        })}
                    </div>
                </div>
            }
        </div>
    )
}