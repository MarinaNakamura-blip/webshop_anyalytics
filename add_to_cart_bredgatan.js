document.getElementById("add-to-cart").addEventListener("click", function () {
    dataLayer.push({ ecommerce: null });
    dataLayer.push({
        event: "add_to_cart",
        ecommerce: {
            currency: "SEK",
            value: 2999,
            items: [
                {
                    item_id: "CT_BREDGATAN",
                    item_name: "Klösträd Bredgatan",
                    item_category: "Klösträd",
                    price: 2999,
                    quantity: 1
                }
            ]
        }
    });
});