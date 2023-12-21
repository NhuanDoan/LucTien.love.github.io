const albums = $('.gallery-fancybox');

const apps = {
    products: [
        
        { img: "https://nhuandoan.github.io/Album.github.io/Album/KTIU2754.jpg"},
        { img: "https://nhuandoan.github.io/Album.github.io/Album/KTIU2868.jpg"},
        { img: "https://nhuandoan.github.io/Album.github.io/Album/KTIU3407.jpg"},
        { img: "https://nhuandoan.github.io/Album.github.io/Album/KTIU2516.jpg"},
        
        { img: "https://nhuandoan.github.io/Album.github.io/Album/KTIU2923.jpg"},
        
        { img: "https://nhuandoan.github.io/Album.github.io/Album/KTIU3560.jpg"},
       
        { img: "https://nhuandoan.github.io/Album.github.io/Album/KTIU3585.jpg"},
        
        { img: "https://nhuandoan.github.io/Album.github.io/Album/KTIU5141.jpg"},
        { img: "https://nhuandoan.github.io/Album.github.io/Album/KTIU3565.jpg"},
        { img: "https://nhuandoan.github.io/Album.github.io/Album/KTIU5973.jpg"},
        { img: "https://nhuandoan.github.io/Album.github.io/Album/KTIU4321a.jpg"},
        
       
        { img: "https://nhuandoan.github.io/Album.github.io/Album/KTIU3949.jpg"},
        { img: "https://nhuandoan.github.io/Album.github.io/Album/KTIU3974.jpg"},
        
        { img: "https://nhuandoan.github.io/Album.github.io/Album/KTIU4464.jpg"},
        { img: "https://nhuandoan.github.io/Album.github.io/Album/KTIU4568 1318.jpg"},
        { img: "https://nhuandoan.github.io/Album.github.io/Album/KTIU4958.jpg"},
        { img: "https://nhuandoan.github.io/Album.github.io/Album/KTIU4732.jpg"},
        { img: "https://nhuandoan.github.io/Album.github.io/Album/KTIU4796.jpg"},
        { img: "https://nhuandoan.github.io/Album.github.io/Album/KTIU4732.jpg"},
        { img: "https://nhuandoan.github.io/Album.github.io/Album/KTIU4993.jpg"},
        { img: "https://nhuandoan.github.io/Album.github.io/Album/KTIU5980.jpg"},
        
        { img: "https://nhuandoan.github.io/Album.github.io/Album/KTIU5746.jpg"},
        
        
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