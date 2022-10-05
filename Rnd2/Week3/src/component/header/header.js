import './style.css'
import HeaderButton from './HeaderButton.js'

const Header = () => {
    return (
        <div className="header">
            <div className="header-left">React</div>
            <div className="header-center">
                <HeaderButton>Docs</HeaderButton>
                <HeaderButton>2</HeaderButton>
                <HeaderButton>3</HeaderButton>
                <HeaderButton>4</HeaderButton>
            </div>
            <div>Input here</div>
            <div className="header-right">
                <div>v18.2.0</div>
                <div>Language</div>
                <div>GitHub</div>
            </div>
        </div>
    )
}