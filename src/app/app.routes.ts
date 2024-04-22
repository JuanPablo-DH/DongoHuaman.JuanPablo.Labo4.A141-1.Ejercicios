import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: "bienvenida",

        // Sin lazyLoading
        // path: "bienvenido",
        // component: BienvenidoComponent

        // Con lazyLoading Forma 1 (necesario poner export default en los .ts)
        // loadComponent: () => import("./components/bienvenida/bienvenida.component")

        // Con lazyLoading Forma 2 (quitar export default en los .ts)
        loadComponent: () => import("./components/bienvenida/bienvenida.component").then((m) => m.BienvenidaComponent)
    },
    {
        path: "login",

        // Sin lazyLoading
        // component: LoginComponent

        // Con lazyLoading Forma 1 (necesario poner export default en los .ts)
        // loadComponent: () => import("./componentes/login/login.component")

        // Con lazyLoading Forma 2 (quitar export default en los .ts)
        loadComponent: () => import("./components/login/login.component").then((m) => m.LoginComponent)
    },
    {
        path: "registro",

        // Sin lazyLoading
        // component: LoginComponent

        // Con lazyLoading Forma 1 (necesario poner export default en los .ts)
        // loadComponent: () => import("./componentes/login/login.component")

        // Con lazyLoading Forma 2 (quitar export default en los .ts)
        loadComponent: () => import("./components/registro/registro.component").then((m) => m.RegistroComponent)
    },
    {
        path: "error",

        // Sin lazyLoading
        // component: ErrorComponent

        // Con lazyLoading Forma 1 (necesario poner export default en los .ts)
        // loadComponent: () => import("./componentes/error/error.component")

        // Con lazyLoading Forma 2 (quitar export default en los .ts)
        loadComponent: () => import("./components/error/error.component").then((m) => m.ErrorComponent)
    },
    {
        path: "calculos-edad",

        // Sin lazyLoading
        // component: CalculosEdadComponent

        // Con lazyLoading Forma 1 (necesario poner export default en los .ts)
        // loadComponent: () => import("./components/calculos-edad/calculos-edad.component")

        // Con lazyLoading Forma 2 (quitar export default en los .ts)
        loadComponent: () => import("./components/calculos-edad/calculos-edad.component").then((m) => m.CalculosEdadComponent)
    },
    {
        path: "",

        // Sin lazyLoading
        // component: BienvenidoComponent

        // Con lazyLoading Forma 1 (necesario poner export default en los .ts)
        // loadComponent: () => import("./componentes/bienvenido/bienvenido.component")

        // Con lazyLoading Forma 2 (quitar export default en los .ts)
        loadComponent: () => import("./components/bienvenida/bienvenida.component").then((m) => m.BienvenidaComponent)
    },
    {
        path: "bienvenido",

        // Sin lazyLoading
        // redirectTo: ""

        // Con lazyLoading Forma 1 (necesario poner export default en los .ts)
        // loadComponent: () => import("./componentes/bienvenido/bienvenido.component")

        // Con lazyLoading Forma 2 (quitar export default en los .ts)
        loadComponent: () => import("./components/bienvenida/bienvenida.component").then((m) => m.BienvenidaComponent)
    },
    {
        
        path: "**", // En caso de usar el ** ponerlo final del array SIEMPRE

        // Sin lazyLoading
        // redirectTo: "error"

        // Con lazyLoading Forma 1 (necesario poner export default en los .ts)
        // loadComponent: () => import("./componentes/error/error.component")

        // Con lazyLoading Forma 2 (quitar export default en los .ts)
        loadComponent: () => import("./components/error/error.component").then((m) => m.ErrorComponent)
    }
];
