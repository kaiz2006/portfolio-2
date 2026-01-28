import Antigravity from "@/components/Antigravity";

const BackgroundAntigravity = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div style={{ width: '100%', height: '100%', position: 'relative' }}>
        <Antigravity
          count={390}
          magnetRadius={6}
          ringRadius={11}
          waveSpeed={1}
          waveAmplitude={1.5}
          particleSize={2}
          lerpSpeed={0.1}
          color="#FF3333"
          autoAnimate
          particleVariance={1}
          rotationSpeed={0}
          depthFactor={1}
          pulseSpeed={3}
          particleShape="capsule"
          fieldStrength={10}
        />
      </div>
    </div>
  );
};

export default BackgroundAntigravity;
