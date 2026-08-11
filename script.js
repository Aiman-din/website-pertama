function pesanWhatsApp() {

    const nomorWhatsApp = "6289672760113";

    const pesan =
        "Halo, saya ingin memesan:%0A%0A" +
        "Produk: Es Teh Sejaya%0A" +
        "Jumlah: 1%0A" +
        "Harga: Rp3.000%0A%0A" +
        "Mohon konfirmasi pesanan saya. Terima kasih.";

    const link =
        "https://wa.me/" +
        nomorWhatsApp +
        "?text=" +
        pesan;

    window.open(link, "_blank");
}
