// import { createClient } from '@supabase/supabase-js';
// import useAuthUser from "@/composables/UseAuthUser";
//
// // Create a single supabase client for interacting with your database
//
// const supabase = createClient(
//     import.meta.env.VITE_SUPABASE_URL,
//     import.meta.env.VITE_SUPABASE_KEY
// );
// supabase.auth.onAuthStateChange((event, session) => {
//     // the "event" is a string indicating what trigger the state change (ie. SIGN_IN, SIGN_OUT, etc)
//     // the session contains info about the current session most importanly the user dat
//     const { user } = useAuthUser();
//
//     // if the user exists in the session we're logged in
//     // and we can set our user reactive ref
//     user.value = session?.user || null;
// });
//
// export default function useSupabase() {
//     return { supabase };
// }
// UseSupabase.js
import { createClient } from "@supabase/supabase-js";
import useAuthUser from "@/composables/UseAuthUser";

// these can come from an environment variable if desired
// not required however as they are 100% exposed on the client side anyway
// and that's ok, Supabase expects this
const supabaseUrl = "https://vynzhafghpxgnpafhhsk.supabase.co";
const supabaseKey =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ5bnpoYWZnaHB4Z25wYWZoaHNrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjU0Njk3MjUsImV4cCI6MTk4MTA0NTcyNX0.QPZkI-XK1bZm907N1xG0tzu1zY44PP427WkYZbZ4_Mw";

// setup client
const supabase = createClient(supabaseUrl, supabaseKey);

// setup auth state listener
supabase.auth.onAuthStateChange((event, session) => {
    // the "event" is a string indicating what trigger the state change (ie. SIGN_IN, SIGN_OUT, etc)
    // the session contains info about the current session most importanly the user dat
    const { user } = useAuthUser();

    // if the user exists in the session we're logged in
    // and we can set our user reactive ref
    user.value = session?.user || null;
});

// expose supabase client
export default function useSupabase() {
    return { supabase };
}
