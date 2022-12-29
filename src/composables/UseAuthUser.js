import useSupabase from "@/composables/UseSupabase";
import { ref } from "vue";

const user = ref(null);

export default function useAuthUser() {
    const supabase = useSupabase();
    const login = async ({ email, password }) => {
        const { user, error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
        return user;
    };

    const isLoggedIn = () => {
        return !!user.value;
    };

    const logout = async () => {
        const { error } = supabase.auth.signOut();
        if (error) throw error;
    };

    const register = async ({ email, password, ...meta }) => {
        const { user, error } = await supabase.auth.signUp(
            { email, password },
            {
                //arbitrary meta data is passed as the second argument under a data key
                // to the Supabase signUp method
                data: meta,
                // the to redirect to after the user confirms their email
                redirectTo: `${window.location.origin}/profile?fromEmail=registrationConfirmation"`,
            }
        );
        if (error) throw error;
        return user;
    };

    /**
     * Update user email, password, or meta data
     */
    const update = async (data) => {
        const { user, error } = await supabase.auth.update(data);
        if (error) throw error;
        return user;
    };

    /**
     * Send user an email to reset their password
     * (ie. support "Forgot Password?")
     */
    const sendPasswordRestEmail = async (email) => {
        const { user, error } = await supabase.auth.api.resetPasswordForEmail(
            email
        );
        if (error) throw error;
        return user;
    };

    const loginWithRefreshToken = async (token) => {
        const { user, error } = await supabase.auth.signIn({ refreshToken: token });
        if (error) throw error;
        return user;
    };

    const maybeHandleEmailConfirmation = async (route) => {};
    return {
        user,
        login,
        loginWithRefreshToken,
        isLoggedIn,
        logout,
        register,
        update,
        sendPasswordRestEmail,
        maybeHandleEmailConfirmation,
    };
}