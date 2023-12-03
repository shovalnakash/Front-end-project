/*  Shaked Gafter 208752691
    Chen Ravuna 209190289
    Shoval Nakash 207207838
 */
// Library for wrapping local storage
//The myStorage class is used to manage storage in the local storage of a web browser. It has two main functions: addCost and getCost.
class myStorage {
    constructor(_key) {
        this.key = _key;
    }
// The addCost function is an asynchronous function and used to add a new item to the storage.
// If there is an existing storage, it parses the data and saves it in an array save_arr.
    async addCost(_obj) {
        let save_arr = [];
        if (localStorage[this.key])
            save_arr = JSON.parse(localStorage.getItem(this.key));
        if(save_arr.find(item => item.date === _obj.date && item.name === _obj.name && item.cost === _obj.cost))
        {
            alert(`The product already in the list :)`);
            window.location.reload();
            return;
        }
        else
            save_arr.push(_obj);
        await localStorage.setItem(this.key, JSON.stringify(save_arr));
        alert(`The product was added to the list :)`);
        window.location.reload();
    }
    // The getCost function is used to retrieve the stored data.
    // It retrieves the data from local storage using the specified key, parses it, and returns it as an array.
    getCost() {
        let local_arr = [];
        if (localStorage[this.key])
            local_arr = JSON.parse(localStorage[this.key]);
        return local_arr;
    }
}