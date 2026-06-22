import { useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';
import './TiltedCard.css';

const spring = { damping: 26, stiffness: 160, mass: 0.8 };

export default function TiltedCard({
  imageSrc,
  altText = 'Tilted card image',
  containerHeight = '300px',
  containerWidth = '100%',
  imageHeight = '100%',
  imageWidth = '100%',
  scaleOnHover = 1.04,
  rotateAmplitude = 7,
  className = '',
}) {
  const ref = useRef(null);
  const rotateX = useSpring(useMotionValue(0), spring);
  const rotateY = useSpring(useMotionValue(0), spring);
  const scale = useSpring(1, spring);

  function handleMouseMove(event) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;

    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;
    rotateX.set((y / (rect.height / 2)) * -rotateAmplitude);
    rotateY.set((x / (rect.width / 2)) * rotateAmplitude);
  }

  function resetCard() {
    rotateX.set(0);
    rotateY.set(0);
    scale.set(1);
  }

  return (
    <figure
      ref={ref}
      className={`tilted-card-figure ${className}`}
      style={{ height: containerHeight, width: containerWidth }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => scale.set(scaleOnHover)}
      onMouseLeave={resetCard}
    >
      <motion.div
        className="tilted-card-inner"
        style={{ width: imageWidth, height: imageHeight, rotateX, rotateY, scale }}
      >
        <img src={imageSrc} alt={altText} className="tilted-card-img" loading="lazy" decoding="async" />
      </motion.div>
    </figure>
  );
}
