declare global {
  interface Window {
    dataLayer: Record<string, unknown>[];
  }
}

export const GTM_ID = 'GTM-P83FBRBC';
export const GA4_MEASUREMENT_ID = 'G-6EQQH9QR1J';

/**
 * Safely push an event to Google Tag Manager dataLayer
 */
export const pushToDataLayer = (
  event: string,
  parameters: Record<string, unknown> = {}
): void => {
  if (typeof window === 'undefined') return;
  window.dataLayer = window.dataLayer || [];

  window.dataLayer.push({
    event,
    ...parameters,
  });
};

/**
 * Track phone call clicks
 */
export const trackCallClick = (phoneNumber: string = '+919786223334'): void => {
  pushToDataLayer('call_click', {
    method: 'phone',
    phone_number: phoneNumber,
  });
};

/**
 * Track WhatsApp CTA clicks
 */
export const trackWhatsAppClick = (phoneNumber: string = '+919786223334'): void => {
  pushToDataLayer('whatsapp_click', {
    method: 'whatsapp',
    phone_number: phoneNumber,
  });
};

/**
 * Track booking CTA clicks
 */
export const trackBookingClick = (
  method: 'website_booking' | 'whatsapp_booking' = 'website_booking'
): void => {
  pushToDataLayer('booking_click', {
    method,
  });
};

/**
 * Track successful contact form submissions
 */
export const trackContactFormSubmit = (): void => {
  pushToDataLayer('generate_lead', {
    lead_method: 'contact_form',
  });
};

/**
 * Track service CTA clicks
 */
export const trackServiceClick = (serviceName: string): void => {
  pushToDataLayer('service_click', {
    service_name: serviceName,
  });
};
