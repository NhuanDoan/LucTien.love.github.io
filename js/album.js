const albums = $('.gallery-fancybox');

const apps = {
    products: [
        
        { img: "../img/Album/KTIU2754.jpg"},
        { img: "../img/Album/KTIU2868.jpg"},
        { img: "../img/Album/KTIU3407.jpg"},
        { img: "../img/Album/KTIU2516.jpg"},
        
        { img: "../img/Album/KTIU2923.jpg"},
        
        { img: "../img/Album/KTIU3560.jpg"},
       
        { img: "../img/Album/KTIU3585.jpg"},
        
        { img: "../img/Album/KTIU5141.jpg"},
        { img: "../img/Album/KTIU3565.jpg"},
        { img: "../img/Album/KTIU5973.jpg"},
        { img: "../img/Album/KTIU4321a.jpg"},
        
       
        { img: "../img/Album/KTIU3949.jpg"},
        { img: "../img/Album/KTIU3974.jpg"},
        
        { img: "../img/Album/KTIU4464.jpg"},
        { img: "../img/Album/KTIU4568 1318.jpg"},
        { img: "../img/Album/KTIU4958.jpg"},
        { img: "../img/Album/KTIU4732.jpg"},
        { img: "../img/Album/KTIU4796.jpg"},
        { img: "../img/Album/KTIU4732.jpg"},
        { img: "../img/Album/KTIU4993.jpg"},
        { img: "../img/Album/KTIU5980.jpg"},
        
        { img: "../img/Album/KTIU5746.jpg"},
        
        
    ],
    render: function () {
        const htmls = this.products.map((product, index) => {
            return `<div class="grid grid-item img-responsive">
                    <a href="https://cdn.biihappy.com/ziiweb/website/6409f0ee41a8b6a1810b90f4/galleries/640ef13d163263cb280030bf/large.jpg"
                        class="fancybox" data-fancybox="gallery" data-caption="Image 1">
                        <img src="${product.img}"
                            alt class="img img-fluid">
                    </a>
                </div>`
        });
        albums.html(htmls.join(''));
    }
}
apps.render();