import { useEffect, useState } from 'react';
import * as S from './styled';

export const FloatingBubbles = () => {
  const [bubbles, setBubbles] = useState([]);

  useEffect(() => {
    const createBubbles = () => {
      const newBubbles = Array.from({ length: 2 }).map(() => ({
        id: Math.random(),
        size: Math.random() * 40 + 10,
        left: Math.random() * 100,
        duration: Math.random() * 10 + 3,
        delay: Math.random() * 1,
        opacity: Math.random() * 0.6 + 0.2,
      }));

      setBubbles((prevBubbles) => [...prevBubbles, ...newBubbles]);

      setBubbles((prevBubbles) =>
        prevBubbles.slice(Math.max(prevBubbles.length - 20, 0))
      );
    };

    createBubbles();
    const interval = setInterval(createBubbles, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <S.BubbleContainer>
      {bubbles.map((bubble) => (
        <S.Bubble
          key={bubble.id}
          size={bubble.size}
          left={bubble.left}
          duration={bubble.duration}
          delay={bubble.delay}
          opacity={bubble.opacity}
        />
      ))}
    </S.BubbleContainer>
  );
};
