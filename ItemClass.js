/*  Shaked Gafter 208752691
    Chen Ravuna 209190289
    Shoval Nakash 207207838
 */
class ItemClass {
    constructor(_date, _name, _cost, _payment, _category, _description) {
        this.date = _date;
        this.name = _name;
        this.cost = _cost;
        this.payment = _payment;
        this.category = _category;
        this.description = _description;
    }

    /*The createItem function in the ItemClass is an asynchronous function
    that creates an item object based on the data passed to the constructor of the ItemClass.
    The function checks if all the fields are not empty.
    If any of these fields are empty, it displays an "invalid cost, please complete the fields" alert.
    If all fields are filled in, the function creates a new instance of myStorage with "costs" as an argument,
    and adds the ItemClass instance to the storage using the addCost function.*/
    async createItem() {
        if (this.date === "" || this.name === "" || this.cost === "" || this.payment === "" || this.category === ""){
            alert("invalid cost, please complete the fields");
        }
        else{
            const storage = new myStorage("costs");
            await storage.addCost(this);
        }
    }
}





