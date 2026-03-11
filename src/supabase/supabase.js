import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://wpoivtngvxmpxrezycei.supabase.co"
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Indwb2l2dG5ndnhtcHhyZXp5Y2VpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzIzODE5OTksImV4cCI6MjA4Nzk1Nzk5OX0.0P6i5moRSUJeUQ4lqPuah5spausy0zMSC43jScT9SzA"

export const supabase = createClient(supabaseUrl, supabaseKey)