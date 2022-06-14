import headerStyles from'./Header.module.css';
import logo from "../../assets/logo.png";


export function Header() {
    return (
        <>
            <header className={headerStyles.header}>
                <img src={logo} alt="logo" />
                <h4 className={headerStyles.logo}> Ignite Feed</h4>
                

            </header>
        </>
    )   
}

