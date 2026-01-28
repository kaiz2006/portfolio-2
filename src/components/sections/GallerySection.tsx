import CircularGallery from "@/components/CircularGallery";

// Gallery items - add your images to public/gallery folder
// Format: { image: "/gallery/filename.jpg", text: "" }
const galleryItems = [
    { image: "/gallery/image1.jpg", text: "" },
    { image: "/gallery/image2.jpg", text: "" },
    { image: "/gallery/image3.jpg", text: "" },
    { image: "/gallery/image4.jpg", text: "" },
    { image: "/gallery/image5.jpg", text: "" },
    { image: "/gallery/image6.jpg", text: "" },
];

export const GallerySection = () => {
    return (
        <section id="gallery" className="relative py-10 min-h-[600px]">
            <div className="h-[600px] w-full">
                <CircularGallery
                    items={galleryItems}
                    bend={3}
                    textColor="#ffffff"
                    borderRadius={0.15}
                    font="bold 24px Inter"
                    scrollSpeed={2}
                    scrollEase={0.05}
                    showText={false}
                />
            </div>
        </section>
    );
};
