
import React, { useState, useEffect } from 'react';
import { Star } from 'lucide-react';

const FlyingDoveAnimation = () => {
  const [animationState, setAnimationState] = useState('dove');
  const [position, setPosition] = useState({ x: 50, y: 0 });
  const [visible, setVisible] = useState(true);
  
  useEffect(() => {
    const handleAnimation = async () => {
      // Start with dove
      setAnimationState('dove');
      setPosition({ x: 10, y: 0 });
      setVisible(true);
      
      // Fly across screen
      await new Promise(resolve => {
        const flyInterval = setInterval(() => {
          setPosition(prev => {
            const newX = prev.x + 1;
            const newY = Math.sin(newX / 10) * 5 + 10;
            
            if (newX >= 70) {
              clearInterval(flyInterval);
              resolve(null);
            }
            
            return { x: newX, y: newY };
          });
        }, 50);
      });
      
      // Transform to star
      setAnimationState('transforming');
      await new Promise(resolve => setTimeout(resolve, 500));
      setAnimationState('star');
      
      // Make star twinkle
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Fade out
      setVisible(false);
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Reset and repeat
      setTimeout(() => {
        handleAnimation();
      }, 5000);
    };
    
    handleAnimation();
    
    return () => {
      // Clean up animation if needed
    };
  }, []);

  return (
    <div className="relative h-32 w-full overflow-hidden pointer-events-none">
      <div 
        className={`absolute transition-all duration-500 ${visible ? 'opacity-100' : 'opacity-0'}`}
        style={{ 
          left: `${position.x}%`, 
          top: `${position.y}%`,
          transform: animationState === 'transforming' ? 'rotate(180deg) scale(1.5)' : 'rotate(0) scale(1)'
        }}
      >
        {animationState === 'star' ? (
          <Star className="text-divine-gold w-8 h-8 animate-pulse" />
        ) : (
          <span className="text-4xl">🕊️</span>
        )}
      </div>
    </div>
  );
};

export default FlyingDoveAnimation;
