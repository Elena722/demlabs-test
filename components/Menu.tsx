import Link from "next/link";
import {Navigation} from './Navigation';

const navItems=[
    {label:'Wallet', href:'/wallet', img:"/landing/wallet.svg"},
    {label:'DEX', href:'/pricing', img:"/landing/DEX.svg"},
    {label:'TX explorer', href:'/tx-explorer', img:"/landing/explorer.svg"},
    {label:'Certificates', href:'/certificates', img:"/landing/certificates.svg"},
    {label:'Tokens', href:'/tokens', img:"/landing/tokens.svg"},
    {label:'VPN client', href:'/vpn-client', img:"/landing/vpn.svg"},
    {label:'VPN service', href:'/vpn-service', img:"/landing/vpn-service.svg"},
    {label:'Console', href:'/console', img:"/landing/console.svg"},
    {label:'Logs', href:'/logs', img:"/landing/logs.svg"},
    {label:'Settings', href:'/settings', img:"/landing/settings.svg"},
    {label:'dApps', href:'/dapps', img:"/landing/dapps.svg"},
]

const Menu = ()=>{
    return (
        <div className="menu">
                <div className="menu-logo">
                    <div className="menu-logo__img">
                        <img src="/landing/cellframe-logo-dashboard.svg" alt="" />
                    </div>
                </div>
                <Navigation navLinks={navItems}/>
            </div>
    )
}

export { Menu };