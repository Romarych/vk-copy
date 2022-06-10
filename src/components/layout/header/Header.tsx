import React, { ChangeEvent, FC, useState } from "react"
import styles from "./Header.module.css"
import vkLogo from "./vk-logo.png"
import { Search } from "@material-ui/icons"

const Header: FC = () => {
    const [isSearchActive, setIsSearchActive] = useState(false)

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        let value = e.target.value.length
        if (value == 0) {
            setIsSearchActive(false)
        } else if (value > 0) {
            setIsSearchActive(true)
        }
        
    }

    return (
        <header  className={styles.header}>
            <div className={styles.logoWrapper}>
                <img className={styles.logo} src={vkLogo} />
            </div>
            <div className={styles.inputWrapper}>
                {!isSearchActive &&
                <Search />
                }
                <input 
                    onChange={(e) => onChange(e)}  
                    type="text" 
                    placeholder="Поиск"
                    />
            </div>
        </header>
    )
}

export default Header





