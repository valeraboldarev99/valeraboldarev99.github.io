class MenuItem extends React.Component {
    render() {
        return element(
            'li', null, element(
                    'a', {href: "#"}, this.props.link_name
                )
        );
    }
}

function HeaderMenu()
{
    return (
        <nav className="header__menu">
            <ul className="header__menu_list">
                <MenuItem link_name="Новинки"/>
                <MenuItem link_name="Фильмы"/>
                <MenuItem link_name="Сериалы"/>
                <MenuItem link_name="ТВ-Каналы"/>
                <MenuItem link_name="Мультфильмы"/>
            </ul>
        </nav>
    );
}

function SidebarMenu()
{
    return (
        <nav className="sidebar__menu">
            <ul className="header__menu_list">
                <MenuItem link_name="О нас"/>
                <MenuItem link_name="Контакты"/>
                <MenuItem link_name="Партнерам"/>
            </ul>
        </nav>
    );
}

function FooterMenu()
{
    return (
        <nav className="footer__menu">
            <ul className="header__menu_list">
                <MenuItem link_name="Фантастика"/>
                <MenuItem link_name="Боевики"/>
                <MenuItem link_name="Научные"/>
            </ul>
        </nav>
    );
}

