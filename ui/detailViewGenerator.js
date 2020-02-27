export function details() {
    let detailsTable = document.createElement("TABLE");
    detailsTable.setAttribute("id", "myTable");


    let trTable = document.createElement("TR");
    trTable.setAttribute("id", "myTR");
    detailsTable.appendChild(trTable);

    let tdTable = document.createElement("TD");
    let tableContent = document.createTextNode("");
    tdTable.appendChild(tableContent);
    trTable.appendChild(tdTable)

    return detailsTable;


}