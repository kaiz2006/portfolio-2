import FloatingLines from "@/components/FloatingLines";

const BackgroundFloatingLines = () => {
    return (
        <div className="fixed inset-0 -z-10 overflow-hidden">
            <FloatingLines
                linesGradient={["#E94FF5", "#9B4DCA", "#5B3DC8", "#3B82F6", "#E94FF5"]}
                enabledWaves={['top', 'middle', 'bottom']}
                lineCount={[6, 8, 6]}
                lineDistance={[5, 4, 6]}
                animationSpeed={0.8}
                interactive={true}
                bendRadius={5.0}
                bendStrength={-0.5}
                mouseDamping={0.05}
                parallax={true}
                parallaxStrength={0.15}
                mixBlendMode="normal"
            />
        </div>
    );
};

export default BackgroundFloatingLines;
