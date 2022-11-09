const changeImg = ()=>{
    var id =[
        {
            imgID: 'itmImg1',
            costID: 'itmCst1'
            
        },
        {
            imgID: 'itmImg2',
            costID: 'itmCst2'
        },
        {
            imgID: 'itmImg3',
            costID: 'itmCst3'
        },
        {
            imgID: 'itmImg4',
            costID: 'itmCst4'
        },
        {
            imgID: 'itmImg5',
            costID: 'itmCst5'
        },
    ]
    setInterval(function(){
        for(var i in id){
            var imgEl = document.getElementById(`${id[i].imgID}`)
            var priceEl = document.getElementById(`${id[i].costID}`)

            const price = ["12,999,000", "10,999,000"]
            const priceColor = ["black", "red"]
            const priceBackground = ['#48adc9','greenyellow']
            const src_img = ["./img/img1.jpg","./img/img2.jpg"]

            var prcRand = Math.floor(Math.random() *2);
            var imgRand = src_img[Math.floor(Math.random() * src_img.length)];


            imgEl.src=imgRand
            priceEl.innerText=price[prcRand]
            priceEl.style.color=priceColor[prcRand]
            priceEl.style.backgroundColor=priceBackground[prcRand]
        }
    },1000)
}
changeImg()