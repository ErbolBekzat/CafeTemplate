// Define the MenuItem class (you can use the previously defined class)
class MenuItem {
    constructor(title, price, description = "", ingredients = [], weight = "") {
        this.title = title;
        this.price = price;
        this.description = description;
        this.ingredients = ingredients;
        this.weight = weight;
    }

    // Method to generate HTML for the menu item
    toHTML(path) {
        let itemHTML = `<div class="menu-item">
                            <img src="${path}" alt="Image">
                            <h3>${this.title}</h3>
                            <hr style="width: 100%; color: black; height: 1px; background-color:black;">
                            <p>Ingredients: ${this.ingredients.join(", ")}</p>
                            <hr style="width: 100%; color: black; height: 1px; background-color:black;">
                            <p>Price: $${this.price}</p>
                            <p>Weight: ${this.weight} grams</p>
                        </div>`;
        return itemHTML;
    }
    
}
