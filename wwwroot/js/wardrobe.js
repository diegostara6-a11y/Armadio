window.atelierWardrobe = {
    load: () => localStorage.getItem("atelier-wardrobe-v1"),
    save: (value) => localStorage.setItem("atelier-wardrobe-v1", value)
};
