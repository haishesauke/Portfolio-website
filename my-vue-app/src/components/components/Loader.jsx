import { Html, useProgress } from '@react-three/drei';

const Loader = () => {
  const { progress } = useProgress();  // Correct spelling of progress
  return (
    <Html>
      <span className='canvas-load'></span>
      <p style={{ fontSize: 14, color: '#915eff', fontWeight: 800, marginTop: 40 }}>
        {progress.toFixed(2)}%  {/* Correct spelling of progress */}
      </p>
    </Html>
  );
}

export default Loader;
