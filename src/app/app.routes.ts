import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Dashboard } from './pages/dashboard/dashboard';
import { Login } from './pages/login/login';
import { Register } from './pages/register/register';
import { About } from './pages/about/about';
import { Contact } from './pages/contact/contact';
import { Feed } from './pages/posts/feed/feed';
import { Detail } from './pages/posts/detail/detail';
import { MyPosts } from './pages/dashboard/my-posts/my-posts';
import { authGuard } from './guards/auth-guard';
import { CreatePost } from './pages/posts/create-post/create-post';

export const routes: Routes = [
    { path: '', component: Feed },

    { path: 'home', component: Home },
    { path: 'feed', component: Feed },

    { path: 'posts/:id', component: Detail },

    { path: 'login', component: Login },
    { path: 'register', component: Register },

    {
        path: 'dashboard',
        canActivate: [authGuard],
        children: [
            { path: '', component: Dashboard },
            { path: 'my-posts', component: MyPosts },
            { path: 'create-post', component: CreatePost },
        ]
    },

    { path: 'about', component: About },
    { path: 'contact', component: Contact },
];