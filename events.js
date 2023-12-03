/*  Shaked Gafter 208752691
    Chen Ravuna 209190289
    Shoval Nakash 207207838
 */
const init = function () {
    let add_btn = document.querySelector("#add_btn");
    add_btn.addEventListener("click", async function () {
        let date = document.querySelector("#id_dateOb").value;
        let name = document.querySelector("#id_name").value;
        let cost = document.querySelector("#id_price").value;
        let payment = document.querySelector("#id_pay").value;
        let category = document.querySelector("#id_category").value;
        let description = document.querySelector("#id_describe").value;
        let item = new ItemClass(date, name, cost, payment, category, description);
        await item.createItem();
    });
}

//The report function prints the information in the local storage in an HTML table
// It checks that the month of the cost is the same as the month the user chose to view and that he really chose a month
// otherwise it displays an error message
const report = function () {
    let id_pres = document.querySelector("#id_present");
    let id_tb = document.querySelector("#id_tb");
    let id_total = document.querySelector("#id_total");
    let id_err = document.querySelector("#id_err");
    id_pres.addEventListener("click", function () {
        let total = 0;
        id_total.innerHTML = "Total costs:";
        const storage = new myStorage("costs");
        let arr = storage.getCost();
        if(arr.length !== 0) {
            let month = document.querySelector("#id_date").value.split('-')[1];
            let year = document.querySelector("#id_date").value.split('-')[0];
            id_err.innerHTML = "";
            id_tb.innerHTML = "";
            id_tb.innerHTML = `<tr><td> Date </td><td> Name </td><td> Cost </td><td> Payment </td>` +
                `<td> Category </td><td> Description </td></tr>`
            for (let i = 0; i < arr.length; i++) {
                let yearOb = arr[i].date.split('-')[0];
                let monthOb = arr[i].date.split('-')[1];
                if (month == null || year == null)
                    id_err.innerHTML = `Please enter date! <br>`;
                else if (monthOb === month && yearOb === year) {
                    id_err.innerHTML = "";
                    total += parseInt(arr[i].cost);
                    id_tb.innerHTML += `<tr><td>${arr[i].date}</td><td>${arr[i].name}</td><td>${arr[i].cost}</td><td>${arr[i].payment}</td>
                        <td>${arr[i].category}</td><td>${arr[i].description}</td></tr>`
                }
            }
            id_total.innerHTML += total;
            if(total === 0 && month != null && year != null)
                id_err.innerHTML = `No costs in this month!<br>`;
        }
        else{
            id_err.innerHTML = `You do not enter any cost to application <br>`;
        }
    });
}



