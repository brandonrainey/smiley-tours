import '@testing-library/jest-dom';

global.IntersectionObserver = class IntersectionObserver {
    constructor() {}
  
    disconnect() {
      return null;
    }
  
    observe() {
      return null;
    }
  
    unobserve() {
      return null;
    }
  
    root = null;
    rootMargin = '';
    thresholds = [0];
    takeRecords = () => [];
  };

  window.HTMLElement.prototype.scrollIntoView = function() {};