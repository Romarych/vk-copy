import * as Icons from "@material-ui/icons"
import { IMenuItem } from "../../../types"

export const dataMenu: IMenuItem[] = [
    {
        title: 'Моя страница',
        link: '/',
        icon: Icons.Home

    },
    {
        title: 'Друзья',
        link: '/friends',
        icon: Icons.People

    },
    {
        title: 'Новости',
        link: '/news',
        icon: Icons.Description
    },
]