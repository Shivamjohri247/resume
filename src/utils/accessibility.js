/**
 * Accessibility Utilities
 * WCAG 2.1 AA Compliance Helpers
 */

/**
 * Check if user prefers reduced motion
 * @returns {boolean}
 */
export const prefersReducedMotion = () => {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

/**
 * Check if device is touch-enabled
 * @returns {boolean}
 */
export const isTouchDevice = () => {
  return window.matchMedia('(hover: none)').matches;
};

/**
 * Generate unique ID for accessibility attributes
 * @param {string} prefix
 * @returns {string}
 */
export const generateId = (prefix = 'a11y') => {
  return `${prefix}-${Math.random().toString(36).substr(2, 9)}`;
};

/**
 * Announce message to screen readers
 * @param {string} message
 */
export const announceToScreenReader = (message) => {
  const announcement = document.createElement('div');
  announcement.setAttribute('role', 'status');
  announcement.setAttribute('aria-live', 'polite');
  announcement.setAttribute('aria-atomic', 'true');
  announcement.className = 'sr-only';
  announcement.textContent = message;

  document.body.appendChild(announcement);

  // Remove after announcement
  setTimeout(() => {
    document.body.removeChild(announcement);
  }, 1000);
};

/**
 * Trap focus within a container (for modals, dropdowns)
 * @param {HTMLElement} container
 * @returns {Function} cleanup function
 */
export const trapFocus = (container) => {
  const focusableElements = container.querySelectorAll(
    'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'
  );

  const firstElement = focusableElements[0];
  const lastElement = focusableElements[focusableElements.length - 1];

  const handleTabKey = (e) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  firstElement?.focus();

  return () => {
    container.removeEventListener('keydown', handleTabKey);
  };
};

/**
 * Check color contrast ratio (WCAG AA requires 4.5:1 for normal text)
 * @param {string} foreground - hex color
 * @param {string} background - hex color
 * @returns {number} contrast ratio
 */
export const getContrastRatio = (foreground, background) => {
  const getLuminance = (hex) => {
    const rgb = parseInt(hex.slice(1), 16);
    const r = ((rgb >> 16) & 0xff) / 255;
    const g = ((rgb >> 8) & 0xff) / 255;
    const b = (rgb & 0xff) / 255;

    const [rLinear, gLinear, bLinear] = [r, g, b].map((val) => {
      return val <= 0.03928 ? val / 12.92 : Math.pow((val + 0.055) / 1.055, 2.4);
    });

    return 0.2126 * rLinear + 0.7152 * gLinear + 0.0722 * bLinear;
  };

  const lum1 = getLuminance(foreground);
  const lum2 = getLuminance(background);
  const lighter = Math.max(lum1, lum2);
  const darker = Math.min(lum1, lum2);

  return (lighter + 0.05) / (darker + 0.05);
};

/**
 * Validate ARIA attributes
 * @param {HTMLElement} element
 * @returns {Array<string>} array of errors
 */
export const validateAria = (element) => {
  const errors = [];

  // Check for aria-label on interactive elements without text content
  const interactiveElements = element.querySelectorAll('button, a, [role="button"]');
  interactiveElements.forEach((el) => {
    const hasText = el.textContent.trim().length > 0;
    const hasLabel = el.getAttribute('aria-label');
    const hasLabelledBy = el.getAttribute('aria-labelledby');

    if (!hasText && !hasLabel && !hasLabelledBy) {
      errors.push(`${el.tagName} element missing accessible label`);
    }
  });

  // Check for invalid ARIA roles
  const allElements = element.querySelectorAll('[role]');
  const validRoles = [
    'alert', 'alertdialog', 'application', 'article', 'banner', 'button',
    'cell', 'checkbox', 'columnheader', 'combobox', 'complementary', 'contentinfo',
    'definition', 'dialog', 'directory', 'document', 'feed', 'figure', 'form',
    'grid', 'gridcell', 'group', 'heading', 'img', 'link', 'list', 'listbox',
    'listitem', 'log', 'main', 'marquee', 'math', 'menu', 'menubar', 'menuitem',
    'menuitemcheckbox', 'menuitemradio', 'navigation', 'none', 'note', 'option',
    'presentation', 'progressbar', 'radio', 'radiogroup', 'region', 'row',
    'rowgroup', 'rowheader', 'scrollbar', 'search', 'searchbox', 'separator',
    'slider', 'spinbutton', 'status', 'switch', 'tab', 'table', 'tablist',
    'tabpanel', 'term', 'textbox', 'timer', 'toolbar', 'tooltip', 'tree', 'treegrid',
    'treeitem'
  ];

  allElements.forEach((el) => {
    const role = el.getAttribute('role');
    if (!validRoles.includes(role)) {
      errors.push(`Invalid ARIA role: ${role}`);
    }
  });

  return errors;
};

/**
 * Set up keyboard navigation for custom components
 * @param {HTMLElement} element
 * @param {Object} options
 */
export const setupKeyboardNav = (element, options = {}) => {
  const {
    onSelect,
    onCancel,
    orientation = 'vertical',
  } = options;

  const handleKeyDown = (e) => {
    switch (e.key) {
      case 'Enter':
      case ' ':
        e.preventDefault();
        onSelect?.(e);
        break;
      case 'Escape':
        e.preventDefault();
        onCancel?.(e);
        break;
      case 'ArrowDown':
        if (orientation === 'vertical') {
          e.preventDefault();
          // Navigate to next item
          const next = element.nextElementSibling;
          if (next) next.focus();
        }
        break;
      case 'ArrowUp':
        if (orientation === 'vertical') {
          e.preventDefault();
          // Navigate to previous item
          const prev = element.previousElementSibling;
          if (prev) prev.focus();
        }
        break;
      case 'ArrowRight':
        if (orientation === 'horizontal') {
          e.preventDefault();
          const next = element.nextElementSibling;
          if (next) next.focus();
        }
        break;
      case 'ArrowLeft':
        if (orientation === 'horizontal') {
          e.preventDefault();
          const prev = element.previousElementSibling;
          if (prev) prev.focus();
        }
        break;
    }
  };

  element.addEventListener('keydown', handleKeyDown);

  return () => {
    element.removeEventListener('keydown', handleKeyDown);
  };
};
