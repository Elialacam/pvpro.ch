'use client';

import { motion } from 'framer-motion';
import { Check, LucideIcon } from 'lucide-react';
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
  const colorMap = {
    green: { bg: '#ecfdf5', border: '#10b981', icon: '#059669', shadow: 'rgba(16,185,129,0.25)' },
    red: { bg: '#fef2f2', border: '#ef4444', icon: '#dc2626', shadow: 'rgba(239,68,68,0.25)' },
    amber: { bg: '#fffbeb', border: '#f59e0b', icon: '#d97706', shadow: 'rgba(245,158,11,0.25)' },
    blue: { bg: '#eff6ff', border: '#3b82f6', icon: '#2563eb', shadow: 'rgba(59,130,246,0.25)' },
    purple: { bg: '#faf5ff', border: '#a855f7', icon: '#9333ea', shadow: 'rgba(168,85,247,0.25)' },
    gray: { bg: '#f9fafb', border: '#6b7280', icon: '#4b5563', shadow: 'rgba(107,114,128,0.25)' },
  };

  const theme = colorMap[color];

  return (
    <motion.button
      whileHover={{ scale: 1.03, y: -4 }}
      whileTap={{ scale: 0.97 }}
      onClick={onClick}
      className="relative group flex flex-col items-center justify-center w-[160px] min-h-[180px] rounded-2xl transition-all duration-300 p-4"
      style={{
        backgroundColor: isSelected ? 'white' : theme.bg,
        border: isSelected ? `2px solid ${theme.border}` : '2px solid transparent',
        boxShadow: isSelected 
          ? `0 20px 40px ${theme.shadow}, 0 0 0 4px ${theme.bg}` 
          : `0 4px 15px rgba(0,0,0,0.04)`,
      }}
    >
      <div className="relative mb-3 flex items-center justify-center">
        {imageSrc ? (
          <motion.div
            animate={isSelected ? { scale: 1.05 } : {}}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="w-24 h-24 flex items-center justify-center"
          >
            <img 
              src={imageSrc} 
              alt={label} 
              className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
            />
          </motion.div>
        ) : Icon ? (
          <motion.div
            animate={isSelected ? { rotateY: 360 } : {}}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="w-20 h-20 rounded-2xl flex items-center justify-center shadow-lg"
            style={{ 
              background: `linear-gradient(135deg, white 0%, ${theme.bg} 100%)`,
              border: `2px solid ${theme.border}20`
            }}
          >
            <Icon 
              className="w-10 h-10 transition-transform duration-300 group-hover:scale-110"
              style={{ color: theme.icon }}
              strokeWidth={2}
            />
          </motion.div>
        ) : null}
      </div>

      <div className="text-center px-1">
        <span className="block font-extrabold text-lg leading-tight transition-colors duration-300"
          style={{ color: theme.icon }}
        >
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
          className="absolute -top-2 -right-2 w-8 h-8 rounded-full border-4 border-white shadow-lg flex items-center justify-center"
          style={{ backgroundColor: theme.border }}
        >
          <Check className="w-4 h-4 text-white" strokeWidth={4} />
        </motion.div>
      )}
    </motion.button>
  );
}
