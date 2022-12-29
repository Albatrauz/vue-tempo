import { createRouter, createWebHistory } from "vue-router";
import useAuthUser from "@/composables/UseAuthUser";

const routes = [
    {
        name: "EmailConfirmation",
        path: "/email-confirmation",
        component: () => import("@/pages/EmailConfirmation.vue"),
    },
    {
        name: "Dashboard",
        path: "/",
        component: () => import("@/pages/Dashboard.vue"),
    },
    {
        name: "Profile",
        path: "/profile",
        meta: {
            requiresAuth: true,
        },
        component: () => import("@/pages/Profile.vue"),
    },
    {
        name: "Login",
        path: "/login",
        component: () => import("@/pages/Login.vue"),
    },
    {
        name: "ForgotPassword",
        path: "/forgotPassword",
        component: () => import("@/pages/ForgotPassword.vue"),
    },
    {
        name: "Logout",
        path: "/logout",
        beforeEnter: async () => {
            const { logout } = useAuthUser();
            await logout();
            return { name: "Dashboard" };
        },
    },
    {
        name: "Register",
        path: "/register",
        component: () => import("@/pages/Register.vue"),
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to) => {
    const { isLoggedIn } = useAuthUser();
    if (
        !isLoggedIn() &&
        to.meta.requiresAuth &&
        !Object.keys(to.query).includes("fromEmail")
    ) {
        return { name: "Login" };
    }
});

export default router;
