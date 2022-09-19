import './header.css'
const Header = () => {
    return <div className="flex flex-row justify-between p-3 bg-black">
        <div className="flex flex-row gap-3 px-4">NETFLIX</div>
        <div className="flex flex-row gap-3 text-white text-[15px]">
            <div>Home</div>
            <div>TV Shows</div>
            <div>Movies</div>
            <div>Recently added</div>
            <div>My lists</div>
        </div>
        <div className="flex flex-row text-white gap-3">
            <div>ICONS</div>
            <div>KIDS</div>
            <div>DVD</div>
            <div className="h-[30px] w-[30px] rounded-sm"> </div>
        </div>
    </div>

}

export default Header