class StoreItem {
    constructor(nama, price) {
        this.nama = nama;
        this.price = price;
    }

    info() {
        return `nama barang adalah ${this.nama}, dengan harga ${this.price}`;
    }
}

const Item = new StoreItem("Selotip", "5000");

console.log(Item.info());