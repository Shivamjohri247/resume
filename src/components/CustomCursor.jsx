import { useEffect, useRef, useState } from 'react';
import { prefersReducedMotion, isTouchDevice } from '../utils/accessibility';

const CustomCursor = () => {
    const cursorRef = useRef(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const rafRef = useRef(null);
    const targetPositionRef = useRef({ x: 0, y: 0 });
    const hasMovedRef = useRef(false);

    useEffect(() => {
        // Don't initialize on touch devices or if user prefers reduced motion
        if (isTouchDevice() || prefersReducedMotion()) {
            return;
        }

        const cursor = cursorRef.current;
        if (!cursor) return;

        // Hide default cursor
        document.body.style.cursor = 'none';

        // Smooth lag animation using requestAnimationFrame
        const animateCursor = () => {
            // Lerp (linear interpolation) for smooth lag effect
            const lerpFactor = 0.15; // Adjust for more/less lag (0.1 = more lag, 0.2 = less lag)

            targetPositionRef.current.x += (position.x - targetPositionRef.current.x) * lerpFactor;
            targetPositionRef.current.y += (position.y - targetPositionRef.current.y) * lerpFactor;

            cursor.style.transform = `translate(${targetPositionRef.current.x}px, ${targetPositionRef.current.y}px) scale(${isHovering ? 2.5 : 1})`;

            rafRef.current = requestAnimationFrame(animateCursor);
        };

        // Start animation loop
        animateCursor();

        // Mouse move handler with passive listener for performance
        const handleMouseMove = (e) => {
            // Show cursor on first mouse movement
            if (!hasMovedRef.current) {
                hasMovedRef.current = true;
                setIsVisible(true);
            }

            // Center the cursor on the mouse position (20px cursor / 2 = 10px offset)
            setPosition({ x: e.clientX - 10, y: e.clientY - 10 });
        };

        // Add hover state listeners to interactive elements
        const handleMouseEnter = () => setIsHovering(true);
        const handleMouseLeave = () => setIsHovering(false);

        // Select all interactive elements
        const interactiveElements = document.querySelectorAll('a, button, input, textarea, select, [role="button"], [tabindex]');

        interactiveElements.forEach(el => {
            el.addEventListener('mouseenter', handleMouseEnter, { passive: true });
            el.addEventListener('mouseleave', handleMouseLeave, { passive: true });
        });

        // Listen for mouse movement
        window.addEventListener('mousemove', handleMouseMove, { passive: true });

        // MutationObserver to detect dynamically added elements
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                mutation.addedNodes.forEach((node) => {
                    if (node.nodeType === 1) { // Element node
                        // Check if the added node or its children are interactive
                        const newInteractiveElements = node.querySelectorAll
                            ? node.querySelectorAll('a, button, input, textarea, select, [role="button"], [tabindex]')
                            : [];

                        // Check if the node itself is interactive
                        if (node.tagName && ['A', 'BUTTON', 'INPUT', 'TEXTAREA', 'SELECT'].includes(node.tagName)) {
                            newInteractiveElements.push(node);
                        }

                        newInteractiveElements.forEach(el => {
                            el.addEventListener('mouseenter', handleMouseEnter, { passive: true });
                            el.addEventListener('mouseleave', handleMouseLeave, { passive: true });
                        });
                    }
                });
            });
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });

        // Cleanup
        return () => {
            document.body.style.cursor = '';
            if (rafRef.current) {
                cancelAnimationFrame(rafRef.current);
            }
            window.removeEventListener('mousemove', handleMouseMove);
            observer.disconnect();

            // Remove listeners from all interactive elements
            const allInteractiveElements = document.querySelectorAll('a, button, input, textarea, select, [role="button"], [tabindex]');
            allInteractiveElements.forEach(el => {
                el.removeEventListener('mouseenter', handleMouseEnter);
                el.removeEventListener('mouseleave', handleMouseLeave);
            });
        };
    }, [position, isHovering]);

    // Don't render on touch devices or if reduced motion is preferred
    if (isTouchDevice() || prefersReducedMotion()) {
        return null;
    }

    return (
        <div
            ref={cursorRef}
            className="fixed top-0 left-0 w-5 h-5 bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference"
            style={{
                willChange: 'transform, opacity',
                transition: 'transform 0.1s ease-out, opacity 0.2s ease-out',
                opacity: isVisible ? 1 : 0,
            }}
            role="presentation"
            aria-hidden="true"
        />
    );
};

export default CustomCursor;
