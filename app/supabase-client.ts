import { createClient } from "@supabase/supabase-js";

// const supabaseUrl = process.env.SUPABASE_URL!;
// const supabase_anon_key = process.env.SUPABASE_ANON_KEY!;

export const supabase = createClient(
  "https://ecrsooxvgriplornrrph.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVjcnNvb3h2Z3JpcGxvcm5ycnBoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI1MDE0NjcsImV4cCI6MjA2ODA3NzQ2N30.DsenZ1_Y756XDCKiQbVSikbCG1utzelv_kp91bHuaZg",
);
