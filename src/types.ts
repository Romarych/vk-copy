import React, { Dispatch, SetStateAction, ReactSVG } from "react";
import { SvgIconTypeMap } from "@material-ui/core";
import { OverridableComponent } from "@material-ui/core/OverridableComponent";

export type TypeSetState<T> = Dispatch<SetStateAction<T>>

export interface IUser {
    avatar: string
    name: string
    isInNetwork?: boolean
    _id: string
}

export interface IPost {
    author: IUser
    createdAt: string
    content: string
    images?: string[]
}

export interface IMenuItem {
    title: string
    link: string
    icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>
}

export interface IMessage {
    user: IUser
    message: string
    createdAt: string
}

