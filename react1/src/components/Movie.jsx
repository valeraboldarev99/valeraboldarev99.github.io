class Movie extends React.Component {
    render() {
        return element(
            'div', {className: "movies__item"}, element(
                'div', {className: "movies__item_pic"}, element(
                    'img', {src: this.props.imgsrc}, null
                    )
                ),
                element('div', {className: "movies__item_text"}, this.props.name),
                element('div', {className: "movies__item_text"}, element(
                    'span', null, 'Год: '
                    ), 
                    this.props.year)
        );
    }
}

function MovieList()
{
    return (
        <div className="movies__items">
            <Movie imgsrc="src/img/one_plus_one.jpg" name="(1 + 1) Неприкасаемые" year="2011" />
            <Movie imgsrc="src/img/operaciya_y.jpg" name="Операция 'Ы' и другие приключения Шурика" year="1965" />
            <Movie imgsrc="src/img/gran_torino.jpg" name="Гран Торино" year="2008" />
            <Movie imgsrc="src/img/va_bank.jpg" name="Ва-банк" year="2013" />
            <Movie imgsrc="src/img/green_mile.jpg" name="Зеленая миля" year="1999" />
        </div>
    );
}
