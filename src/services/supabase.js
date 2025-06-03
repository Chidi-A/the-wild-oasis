import { createClient } from '@supabase/supabase-js';
export const supabaseUrl = 'https://cdgxexrmrsvxqmenyoxy.supabase.co';
export const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNkZ3hleHJtcnN2eHFtZW55b3h5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU3OTU0MTIsImV4cCI6MjA2MTM3MTQxMn0.iMTULkEj2h8AZEqJns-jQXIis-W5z--PMO675VyN_38';
export const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
