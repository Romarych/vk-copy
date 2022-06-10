import Auth from "../pages/auth/Auth";
import Friends from "../pages/friends/Friends";
import Home from "../pages/home/Home";
import Conversation from "../pages/messages/Conversation";
import Messages from "../pages/messages/Messages";
import Profile from "../pages/profile/Profile";

export const routes = [
    {
        path: '/',
        component: Home,
        auth: true,
    },
    {
        path: '/profile',
        component: Profile,
        auth: true,
    },
    {
        path: '/profile/:id',
        component: Profile,
        auth: true,
    },
    {
        path: '/messages',
        component: Messages,
        auth: true,
    },
    {
        path: '/messages/:id',
        component: Conversation,
        auth: true,
    },
    {
        path: '/friends',
        component: Friends,
        auth: true,
    },
    {
        path: '/friends/:id',
        component: Friends,
        auth: true,
    },
    {
        path: '/auth',
        component: Auth,
        auth: false,
    }
]