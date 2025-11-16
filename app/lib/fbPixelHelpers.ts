/**
 * Facebook Pixel Advanced Tracking Helpers
 * Pour améliorer la qualité de correspondance (Match Quality)
 */

/**
 * Hash une chaîne en SHA-256 (format requis par Facebook)
 * @param value - La valeur à hasher (email, téléphone, nom, etc.)
 * @returns Promise<string> - Le hash SHA-256
 */
export async function hashValue(value: string | null | undefined): Promise<string | undefined> {
  if (!value) return undefined;
  
  // Normaliser la valeur (minuscules, sans espaces)
  const normalized = value.toLowerCase().trim();
  if (!normalized) return undefined;

  // Utiliser l'API Web Crypto pour hasher
  const encoder = new TextEncoder();
  const data = encoder.encode(normalized);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
  
  return hashHex;
}

/**
 * Hash plusieurs paramètres utilisateur pour Facebook Pixel
 * @param userData - Les données utilisateur à hasher
 * @returns Promise<object> - Les données hashées
 */
export async function hashUserData(userData: {
  email?: string;
  phone?: string;
  firstName?: string;
  lastName?: string;
  city?: string;
  state?: string;
  zip?: string;
  country?: string;
}) {
  const hashed: any = {};

  if (userData.email) {
    hashed.em = await hashValue(userData.email);
  }
  if (userData.phone) {
    // Retirer tous les caractères non-numériques
    const phoneDigits = userData.phone.replace(/\D/g, '');
    hashed.ph = await hashValue(phoneDigits);
  }
  if (userData.firstName) {
    hashed.fn = await hashValue(userData.firstName);
  }
  if (userData.lastName) {
    hashed.ln = await hashValue(userData.lastName);
  }
  if (userData.city) {
    hashed.ct = await hashValue(userData.city);
  }
  if (userData.state) {
    hashed.st = await hashValue(userData.state);
  }
  if (userData.zip) {
    hashed.zp = await hashValue(userData.zip);
  }
  if (userData.country) {
    hashed.country = await hashValue(userData.country);
  }

  return hashed;
}

/**
 * Track un événement Facebook avec des données utilisateur avancées
 * @param eventName - Le nom de l'événement (Purchase, AddToCart, etc.)
 * @param eventData - Les données de l'événement (value, currency, etc.)
 * @param userData - Les données utilisateur à hasher
 */
export async function trackEventWithUserData(
  eventName: string,
  eventData?: {
    content_name?: string;
    content_type?: string;
    value?: number;
    currency?: string;
    [key: string]: any;
  },
  userData?: {
    email?: string;
    phone?: string;
    firstName?: string;
    lastName?: string;
    city?: string;
    state?: string;
    zip?: string;
    country?: string;
  }
) {
  if (typeof window === 'undefined' || !window.fbq) {
    console.warn('Facebook Pixel not loaded');
    return;
  }

  // Si on a des données utilisateur, les hasher
  if (userData) {
    const hashedUserData = await hashUserData(userData);
    
    // Tracker l'événement avec les données hashées
    window.fbq('track', eventName, eventData, hashedUserData);
    
    if (process.env.NODE_ENV !== 'production') {
      console.log(`📊 Facebook Pixel - ${eventName} tracked with user data:`, {
        eventData,
        hashedUserData
      });
    }
  } else {
    // Tracker l'événement sans données utilisateur
    window.fbq('track', eventName, eventData);
    
    if (process.env.NODE_ENV !== 'production') {
      console.log(`📊 Facebook Pixel - ${eventName} tracked:`, eventData);
    }
  }
}
