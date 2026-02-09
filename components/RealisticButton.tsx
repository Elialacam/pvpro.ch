'use client';

import { motion } from 'framer-motion';
import { Check, LucideIcon } from 'lucide-react';
import Image from 'next/image';

interface RealisticButtonProps {
  label: string;
  isSelected: boolean;
  onClick: () => void;
  icon?: LucideIcon;
  imageSrc?: string;
  color?: 'green' | 'red' | 'amber' | 'blue' | 'purple' | 'gray';
  subLabel?: string;
}

export default function RealisticButton({ 
  label, 
  isSelected, 
  onClick, 
  icon: Icon,
  imageSrc,
  color = 'amber',
  subLabel 
}: RealisticButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.03, y: -4 }}
      whileTap={{ scale: 0.97 }}
      onClick={onClick}
      className={`relative group flex flex-col items-center justify-center w-[160px] min-h-[180px] rounded-2xl transition-all duration-300 border-2 p-4 ${
        isSelected 
          ? 'bg-white shadow-[0_8px_30px_rgba(0,0,0,0.12)] border-primary' 
          : 'bg-white hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] border-gray-100 hover:border-gray-200'
      }`}
    >
      <div className="relative mb-4 flex items-center justify-center h-20">
        {imageSrc ? (
          <Image 
            src={imageSrc} 
            alt={label} 
            width={80} 
            height={80} 
            className="object-contain transition-transform duration-300 group-hover:scale-110"
          />
        ) : Icon ? (
          <Icon 
            className={`w-14 h-14 transition-transform duration-300 group-hover:scale-110 ${isSelected ? 'text-primary' : 'text-primary/70'}`}
            strokeWidth={1.5}
          />
        ) : null}
      </div>

      <div className="text-center px-1">
        <span className={`block font-semibold text-sm leading-tight transition-colors duration-300 ${
          isSelected ? 'text-gray-900' : 'text-gray-600'
        }`}>
          {label}
        </span>
        {subLabel && (
          <span className="text-[10px] text-gray-400 mt-1 block uppercase tracking-widest">{subLabel}</span>
        )}
      </div>

      {isSelected && (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="absolute -top-2 -right-2 w-7 h-7 rounded-full border-2 border-white shadow-md flex items-center justify-center bg-primary"
        >
          <Check className="w-4 h-4 text-white" strokeWidth={3} />
        </motion.div>
      )}
    </motion.button>
  );
}
