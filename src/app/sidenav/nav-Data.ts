import { INavbarData } from "./helper"

export const navbarData : INavbarData[] =[
    {
        routerLink : 'dashboard',
        icon : 'fal fa-home',
        label : 'Dashboard'
    },
    {
        routerLink : 'home',
        icon : 'fal fa-box-open',
        label : 'Etage 1',
        items: [ 
            {
                routerLink: 'home/Bureau1',
                label: 'Bureau',
                items: [
                    {
                        routerLink: 'etage2/Bureau1.2',
                        label: 'Module Climatique'
                    },
                    {
                        routerLink: 'etage2/Bureau1.3',
                        label: 'Module de présence'
                    },
                    {
                        routerLink: 'etage2/Bureau1.4',
                        label: 'Module de confort'
                    }
                ]
            }, 
            {
                routerLink :"home/Liste",
                label: "Commande Module "
            }

        ]
    },
    {
        routerLink : 'etage2',
        icon : 'fal fa-chart-bar',
        label : 'Etage 2',
        items :[
            {
                routerLink : 'etage2/Bureau1',
                label : 'Bureau 1', 
                 items: [
                    {
                        routerLink: 'etage2/Bureau1.2',
                        label: 'Module Climatique'
                    },
                    {
                        routerLink: 'etage2/Bureau1.3',
                        label: 'Module de présence'
                    },
                    {
                        routerLink: 'etage2/Bureau1.4',
                        label: 'Module de confort'
                    }
                ]
            },
            {
                routerLink : 'Etage 2/Bureau 2',
                label : 'Bureau 2 ',
                items: [
                    {
                        routerLink: 'Etage 1/Module1',
                        label: 'Module Climatique',
                    },
                    {
                        routerLink: 'Etage 1/Module2',
                        label: 'Module de présence',
                    },
                    {
                        routerLink: 'Etage 1/Module3',
                        label: 'Module de confort',
                    }
                ]
            }
        ] 
    },
    {
        routerLink : 'addmodule',
        icon : 'fal fa-chart-bar',
        label : 'Add New Model'
    },
    {
        routerLink : 'dropdown',
        icon : 'fal fa-cog',
        label : 'Station PV',
        items: [
            {
                routerLink: 'dropdown/create',
                label: 'Data'
            },
            {
                routerLink: 'dropdown/historique',
                label: 'Historique'
            }
        ]
    },
    {
        routerLink : 'settings',
        icon : 'fal fa-cog',
        label : 'Settings',
        expanded: false,
        items: [
            {
                routerLink: 'settings/register',
                label: 'Add New User'
            },
            {
                routerLink: 'settings/model',
                label: 'Model List'
            },
            {
                routerLink: 'settings/customize',
                label: 'Customize'
            }
        ]
    },

];