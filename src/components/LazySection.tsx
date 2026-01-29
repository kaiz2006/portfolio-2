import React, { useEffect, useRef, useState } from 'react';

interface LazySectionProps {
    children: React.ReactNode;
    className?: string;
    threshold?: number;
    rootMargin?: string;
}

/**
 * LazySection - A wrapper component that loads content only when it's about to be visible
 * Uses Intersection Observer API to detect when the section enters the viewport
 */
export const LazySection: React.FC<LazySectionProps> = ({
    children,
    className = '',
    threshold = 0.1,
    rootMargin = '200px', // Start loading 200px before entering viewport
}) => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    // Once visible, stop observing
                    if (sectionRef.current) {
                        observer.unobserve(sectionRef.current);
                    }
                }
            },
            {
                threshold,
                rootMargin,
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, [threshold, rootMargin]);

    return (
        <div ref={sectionRef} className={className}>
            {isVisible ? (
                children
            ) : (
                // Skeleton/placeholder while loading
                <div className="min-h-[400px] flex items-center justify-center">
                    <div className="animate-pulse flex space-x-4">
                        <div className="flex-1 space-y-4 py-1">
                            <div className="h-4 bg-muted rounded w-3/4 mx-auto"></div>
                            <div className="space-y-3">
                                <div className="h-4 bg-muted rounded"></div>
                                <div className="h-4 bg-muted rounded w-5/6 mx-auto"></div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default LazySection;
