'use client';

import { useState } from 'react';
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
  forceStep1Style?: boolean;
}

const GOLD = '#c8a415';
const GOLD_LIGHT = 'rgba(200,164,21,0.12)';
const GOLD_SHADOW = 'rgba(200,164,21,0.3)';
const GOLD_BG = '#fdf9e8';

export default function RealisticButton({ 
  label, 
  isSelected, 
  onClick, 
  icon: Icon,
  imageSrc,
  color = 'amber',
  subLabel,
  forceStep1Style = false
}: RealisticButtonProps) {
  const isStep1Style = forceStep1Style || color === 'green' || color === 'red';

  const colorMap = {
    green: { bg: '#ecfdf5', border: '#10b981', icon: '#059669', shadow: 'rgba(16,185,129,0.25)' },
    red: { bg: '#fef2f2', border: '#ef4444', icon: '#dc2626', shadow: 'rgba(239,68,68,0.25)' },
    amber: { bg: '#fffbeb', border: '#f59e0b', icon: '#d97706', shadow: 'rgba(245,158,11,0.25)' },
    blue: { bg: '#eff6ff', border: '#3b82f6', icon: '#2563eb', shadow: 'rgba(59,130,246,0.25)' },
    purple: { bg: '#faf5ff', border: '#a855f7', icon: '#9333ea', shadow: 'rgba(168,85,247,0.25)' },
    gray: { bg: '#f9fafb', border: '#6b7280', icon: '#4b5563', shadow: 'rgba(107,114,128,0.25)' },
  };

  const theme = colorMap[color];

  const [isHovered, setIsHovered] = useState(false);

  if (isStep1Style) {
    return (
      <motion.button
        whileHover={{ scale: 1.03, y: -4 }}
        whileTap={{ scale: 0.97 }}
        onClick={onClick}
        className="relative group flex flex-col items-center justify-center w-full min-h-[120px] sm:min-h-[170px] rounded-2xl transition-all duration-300 p-2 sm:p-3"
        style={{
          backgroundColor: isSelected ? 'white' : theme.bg,
          border: isSelected ? `2px solid ${theme.border}` : '2px solid transparent',
          boxShadow: isSelected 
            ? `0 20px 40px ${theme.shadow}, 0 0 0 4px ${theme.bg}` 
            : `0 4px 15px rgba(0,0,0,0.04)`,
        }}
      >
        <div className="relative mb-3 flex items-center justify-center">
          {Icon && (
            <motion.div
              animate={isSelected ? { rotateY: 360 } : {}}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center shadow-lg"
              style={{ 
                background: `linear-gradient(135deg, white 0%, ${theme.bg} 100%)`,
                border: `2px solid ${theme.border}20`
              }}
            >
              <Icon 
                className="w-8 h-8 sm:w-10 sm:h-10 transition-transform duration-300 group-hover:scale-110"
                style={{ color: theme.icon }}
                strokeWidth={2}
              />
            </motion.div>
          )}
        </div>

        <div className="text-center px-1">
          <span className="block font-extrabold text-sm sm:text-lg leading-tight transition-colors duration-300"
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

  return (
    <motion.button
      whileHover={{ scale: 1.02, y: -2 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative group flex flex-col items-center justify-center w-full min-h-[120px] sm:min-h-[170px] rounded-2xl transition-all duration-300 p-2 sm:p-3"
      style={{
        backgroundColor: isSelected ? 'white' : 'white',
        border: isSelected ? `3px solid ${GOLD}` : isHovered ? `2px solid ${GOLD}` : '2px solid #e5e7eb',
        boxShadow: isSelected 
          ? `0 20px 40px ${GOLD_SHADOW}, 0 0 0 4px ${GOLD_BG}` 
          : isHovered ? `0 8px 20px ${GOLD_LIGHT}` : 'none',
      }}
    >

      <div className="relative mb-1 flex items-center justify-center">
        {imageSrc ? (
          <motion.div
            animate={isSelected ? { scale: 1.05 } : {}}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center"
          >
            <img 
              src={imageSrc} 
              alt={label} 
              className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </motion.div>
        ) : Icon ? (
          <motion.div
            animate={isSelected ? { scale: 1.1 } : {}}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="w-12 h-12 sm:w-20 sm:h-20 flex items-center justify-center"
          >
            <Icon 
              className="w-8 h-8 sm:w-12 sm:h-12 transition-all duration-300"
              style={{ color: isSelected ? GOLD : isHovered ? GOLD : '#b0b0b0' }}
              strokeWidth={1.5}
            />
          </motion.div>
        ) : null}
      </div>

      <div className="text-center px-1">
        <span className="block font-semibold text-[13px] sm:text-[15px] leading-tight text-gray-900">
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
          style={{ backgroundColor: GOLD }}
        >
          <Check className="w-4 h-4 text-white" strokeWidth={4} />
        </motion.div>
      )}
    </motion.button>
  );
}
