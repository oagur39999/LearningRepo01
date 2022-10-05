function MovieCard(){
    const {imgSrc}=props
    return <div className="w-[310px] h-[465px]">
        <img src={imgSrc} alt="" className="w-[310px] h-[465px] object-cover"></img>
    </div>
}


export default MovieCard
