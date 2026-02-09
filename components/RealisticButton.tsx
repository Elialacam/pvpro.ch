'use client';

import { motion } from 'framer-motion';
import { Home, Building2, Warehouse, Check, X, HelpCircle, LucideIcon } from 'lucide-react';

interface RealisticButtonProps {
  label: string;
  isSelected: boolean;
  onClick: () => void;
  icon: LucideIcon;
  color?: 'green' | 'red' | 'amber' | 'blue' | 'purple' | 'gray';
  subLabel?: string;
}

export default function RealisticButton({ 
  label, 
  isSelected, 
  onClick, 
  icon: Icon,
  color = 'blue',
  subLabel 
}: RealisticButtonProps) {
  const colorMap = {
    green: { primary: '#10b981', light: '#ecfdf5', dark: '#059669' },
    red: { primary: '#ef4444', light: '#fef2f2', dark: '#dc2626' },
    amber: { primary: '#f59e0b', light: '#fffbeb', dark: '#d97706' },
    blue: { primary: '#3b82f6', light: '#eff6ff', dark: '#2563eb' },
    purple: { primary: '#a855f7', light: '#faf5ff', dark: '#9333ea' },
    gray: { primary: '#6b7280', light: '#f9fafb', dark: '#4b5563' },
  };

  const theme = colorMap[color];

  return (
    <motion.button
      whileHover={{ scale: 1.02, y: -4 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`relative group flex flex-col items-center justify-center w-40 h-48 rounded-3xl transition-all duration-300 ${
        isSelected 
          ? 'bg-white shadow-[0_20px_40px_rgba(0,0,0,0.1)] border-2' 
          : 'hover:bg-white hover:shadow-xl'
      }`}
      style={{
        borderColor: isSelected ? theme.primary : 'transparent',
        backgroundColor: isSelected ? 'white' : theme.light,
      }}
    >
      {/* Decorative background element for selection */}
      {isSelected && (
        <motion.div
          layoutId="selection-glow"
          className="absolute inset-0 rounded-3xl -z-10 blur-xl opacity-20"
          style={{ backgroundColor: theme.primary }}
        />
      )}

      {/* Realistic Icon Container with Reflection */}
      <div className="relative mb-6">
        <motion.div
          animate={isSelected ? { rotateY: 360 } : {}}
          transition={{ duration: 1, ease: "easeInOut" }}
          className={`w-20 h-20 rounded-2xl flex items-center justify-center transition-all duration-500 shadow-lg ${
            isSelected ? 'rotate-[-5deg] scale-110' : ''
          }`}
          style={{ 
            background: `linear-gradient(135deg, white 0%, ${theme.light} 100%)`,
            border: `2px solid ${theme.primary}20`
          }}
        >
        <Icon 
          className="w-10 h-10 transition-transform duration-300 group-hover:scale-110"
          style={{ color: theme.primary }}
          strokeWidth={2}
        />
        </motion.div>
        
        {/* Reflection effect */}
        <div 
          className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-16 h-8 opacity-10 blur-md pointer-events-none"
          style={{ 
            background: `linear-gradient(to bottom, ${theme.primary}, transparent)`,
            transform: 'translateX(-50%) scaleY(-1) skewX(10deg)'
          }}
        />
      </div>

      <div className="text-center px-2">
        <span className={`block font-sans font-extrabold text-xl leading-tight transition-colors duration-300`}
          style={{ color: theme.dark }}
        >
          {label.split('\n').map((line, i) => (
            <span key={i} className="block">{line}</span>
          ))}
        </span>
        {subLabel && (
          <span className="text-xs text-gray-400 mt-1 block uppercase tracking-widest">{subLabel}</span>
        )}
      </div>

      {/* Selection indicator */}
      {isSelected && (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="absolute -top-2 -right-2 w-8 h-8 rounded-full border-4 border-white shadow-lg flex items-center justify-center"
          style={{ backgroundColor: theme.primary }}
        >
          <Check className="w-4 h-4 text-white" strokeWidth={4} />
        </motion.div>
      )}
    </motion.button>
  );
}
