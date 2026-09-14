document.getElementById("add_to_cart").addEventListener("click", function () {
    dataLayer.push({ ecommerce: null });
    dataLayer.push({
        event: "add_to_cart",
        ecommerce: {
            currency: "SEK",
            value: 1699,
            items: [
                {
                    item_id: "CT_MIATORP",
                    item_name: "Klösträd Miatorp",
                    item_category: "Klösträd",
                    price: 1699,
                    quantity: 1
                }
            ]
        }
    });
});