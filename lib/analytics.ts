export const trackEvent = (eventName: string, eventData?: Record<string, any>) => {
  if (typeof window !== 'undefined') {
    // Structure prête pour Google Analytics, LinkedIn Pixel, etc.
    console.log(`[Analytics] Event: ${eventName}`, eventData);
    // window.gtag('event', eventName, eventData);
  }
};
