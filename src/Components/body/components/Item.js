const Item = () => {
    return new Promise((resolve, reject) => {
        const object = [
            {
                id: "1",
                name: "Auriculares G733",
                price: "$16.335",
                img: "https://http2.mlstatic.com/D_NQ_NP_798552-MLA44771577101_022021-O.webp",
                description: `Son unos auriculares blancos`,
                stock: "Stock disponible: 1",
            },
            {
                id: "2",
                name: "Logitech G903",
                price: "$10.346",
                img: "https://http2.mlstatic.com/D_NQ_NP_974506-MLA32148386648_092019-O.webp",
                description: `Es un mouse inalámbrico`,
                stock: "Stock disponible: 2",
            },
            {
                id: "3",
                name: "Teclado Logitech G915",
                price: "$23.254",
                img: "https://http2.mlstatic.com/D_NQ_NP_939703-MLA43754579245_102020-O.webp",
                description: "Es un teclado inalámbrico",
                stock: "Stock disponible: 3",
            },
            {
                id: "4",
                name: "RTX 2060",
                price: "$155.000",
                img: "https://http2.mlstatic.com/D_NQ_NP_989904-MLA43401240797_092020-O.webp",
                description: "Tarjeta de video",
                stock: "Stock disponible: 4",
            },
            {
                id: "5",
                name: "Ryzen 7 1700x",
                price: "$42.270",
                img: "https://http2.mlstatic.com/D_NQ_NP_997649-MLA48160857755_112021-O.webp",
                description: "Es un procesador",
                stock: "Stock disponible: 5",
            },
        ];
        setTimeout(() => resolve(object), 2000);
    });
};

export default Item;
