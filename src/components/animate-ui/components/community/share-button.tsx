'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { Share2, Check, Copy } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export interface ShareButtonProps {
    size?: 'sm' | 'md' | 'lg';
    icon?: React.ReactNode;
    children: React.ReactNode;
    url?: string;
    title?: string;
    text?: string;
    className?: string;
}

const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
};

export const ShareButton: React.FC<ShareButtonProps> = ({
    size = 'md',
    icon,
    children,
    url,
    title = 'Check out my portfolio!',
    text = 'Take a look at my work',
    className = '',
}) => {
    const [isShared, setIsShared] = React.useState(false);
    const { toast } = useToast();

    const handleShare = async () => {
        const shareUrl = url || window.location.href;

        try {
            // Try Web Share API first (mobile)
            if (navigator.share) {
                await navigator.share({
                    title,
                    text,
                    url: shareUrl,
                });
                setIsShared(true);
                setTimeout(() => setIsShared(false), 2000);
            } else {
                // Fallback to clipboard
                await navigator.clipboard.writeText(shareUrl);
                toast({
                    title: 'Link copied!',
                    description: 'Portfolio link copied to clipboard',
                    duration: 3000,
                });
                setIsShared(true);
                setTimeout(() => setIsShared(false), 2000);
            }
        } catch (error) {
            // If share was cancelled or failed
            console.error('Share failed:', error);
        }
    };

    return (
        <motion.button
            onClick={handleShare}
            className={`inline-flex items-center gap-2 ${sizeClasses[size]} 
        bg-gradient-to-r from-primary to-secondary text-primary-foreground
        rounded-full font-medium shadow-lg hover:shadow-xl
        transition-all duration-300 relative overflow-hidden group
        ${className}`}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            disabled={isShared}
        >
            {/* Animated background gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Content */}
            <span className="relative z-10 flex items-center gap-2">
                {isShared ? (
                    <motion.span
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="flex items-center gap-2"
                    >
                        <Check className="w-4 h-4" />
                        {navigator.share ? 'Shared!' : 'Copied!'}
                    </motion.span>
                ) : (
                    <>
                        {icon || <Share2 className="w-4 h-4" />}
                        {children}
                    </>
                )}
            </span>

            {/* Glow effect */}
            <div className="absolute inset-0 rounded-full blur-lg bg-primary/30 group-hover:bg-primary/50 transition-all duration-300 -z-10" />
        </motion.button>
    );
};

export default ShareButton;
