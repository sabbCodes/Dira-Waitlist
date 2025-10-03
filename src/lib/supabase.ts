import { createClient } from '@supabase/supabase-js';

// These values should be stored in your environment variables
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: false, // We don't need session persistence for a simple waitlist
  },
});

export interface WaitlistEntry {
  id?: string;
  email: string;
  created_at?: string;
  metadata?: {
    user_agent?: string;
    referrer?: string;
    ip_address?: string;
  };
}

interface WaitlistResponse {
  id: string;
  email: string;
  created_at: string;
  metadata: {
    user_agent?: string;
    referrer?: string;
    ip_address?: string;
  };
}

export const addToWaitlist = async (email: string): Promise<{ data: WaitlistResponse | null, error: Error | null }> => {
  try {
    const { data, error } = await supabase
      .from('waitlist')
      .insert([
        { 
          email: email.toLowerCase().trim(),
          metadata: {
            user_agent: navigator.userAgent,
            referrer: document.referrer || 'direct',
            // Note: IP address would be captured by a Supabase Edge Function or server-side
          }
        },
      ])
      .select()
      .single();

    if (error) {
      return { data: null, error };
    }

    return { data: data as unknown as WaitlistResponse, error: null };
  } catch (error) {
    console.error('Error adding to waitlist:', error);
    return { data: null, error: error as Error };
  }
};
