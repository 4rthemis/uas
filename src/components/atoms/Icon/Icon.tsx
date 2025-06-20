import React from 'react';
import { cn } from '../../../lib/utils';

interface IconProps {
  src: string;
  alt: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  onClick?: () => void;
  hover?: boolean;
}

const sizeStyles = {
  sm: 'w-4 h-4',
  md: 'w-6 h-6',
  lg: 'w-8 h-8',
  xl: 'w-12 h-12'
};

export const Icon: React.FC<IconProps> = ({
  src,
  alt,
  size = 'md',
  className,
  onClick,
  hover = false
}) => {
  return (
    <img
      src={src}
      alt={alt}
      onClick={onClick}
      className={cn(
        'relative',
        sizeStyles[size],
        onClick && 'cursor-pointer',
        hover && 'hover:scale-110 transition-transform duration-200',
        className
      )}
    />
  );
};