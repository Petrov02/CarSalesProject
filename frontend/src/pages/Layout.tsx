import {Link, Outlet} from "react-router-dom";
export const Layout = () => {
    return (
        <>
        <ul className={"Navigation"}>
<div className="header">
  <Link to="/Home" className="logo">Car Market</Link>
  <div className="header-right">
    <Link to="/Home" className="active">Начало</Link>
    <Link to="/Contacts" className="contacts">Контакти</Link>
    <Link to="/Services" className="service">Обяви</Link>
    <Link to="/Form" className="login-btn">Вход</Link>
    <Link to="/Register" className="register">Регистрация</Link>
  </div>
</div>

        </ul>
            
            <Outlet/>
        </>
    )
}