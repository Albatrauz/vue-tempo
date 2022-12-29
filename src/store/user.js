// import { defineStore } from "pinia";
// // import { UseSupabase } from "@/composables/UseSupabase";
//
// export const useSessionStore = defineStore("sessionStore", {
//     state: () => ({
//         session: {},
//         isAuthenticated: false,
//     }),
//     actions: {
//         async handleLogin(email) {
//             try {
//                 const { error, user } = await supabase.auth.signInWithOtp({ email: email });
//             } catch (error) {
//                 if (error instanceof Error) {
//                     alert(error.message);
//                 }
//             } finally {
//                 supabase.auth.getSession().then(({ data }) => {
//                     this.session = data.session;
//                 });
//                 supabase.auth.onAuthStateChange((_, _session) => {
//                     this.session = _session;
//                     console.log(_session);
//                 });
//             }
//         }
//     }
// })