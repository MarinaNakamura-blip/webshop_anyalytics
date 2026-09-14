document.getElementById("add_to_cart").addEventListener("click", function () {
    dataLayer.push({ ecommerce: null });
    dataLayer.push({
        event: "add_to_cart",
        ecommerce: {
            currency: "SEK",
            value: 3499,
            items: [
                {
                    item_id: "CT_OLYMPIA",
                    item_name: "Klösträd Olympia",
                    item_category: "Klösträd",
                    price: 3499,
                    quantity: 1
                }
            ]
        }
    });
});
 