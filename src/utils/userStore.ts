export interface UserDetails {
  name: string;
  phone: string;
}

const STORAGE_KEY = 'uptown_user_details';

export function getUserDetails(): UserDetails {
  if (typeof window === 'undefined') return { name: '', phone: '' };
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    if (data) {
      const parsed = JSON.parse(data);
      return {
        name: parsed.name || '',
        phone: parsed.phone || '',
      };
    }
  } catch {}
  return { name: '', phone: '' };
}

export function saveUserDetails(details: Partial<UserDetails>): void {
  if (typeof window === 'undefined') return;
  try {
    const current = getUserDetails();
    const updated = {
      name: details.name !== undefined ? details.name : current.name,
      phone: details.phone !== undefined ? details.phone : current.phone,
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  } catch {}
}
