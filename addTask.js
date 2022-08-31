const addBtn = document.getElementById('add-btn');
const table = document.querySelector('.my-table');






function addRow() {
    const tableBody = document.querySelector('.table-body');
    tableBody.innerHTML += `
    <tr class="tr width100">
    <td class="" contenteditable="true">Test 1</td>
    <td class="text-center" contenteditable="true">1</td>
    <td class="text-center" contenteditable="true">0%</td>
    <td class="text-center" contenteditable="true">50%</td>
    <td class="text-center" class="studPro"><i class="ri-delete-bin-line del-btn icon-clr cursor1"></i></td>
  </tr>
    `;
}


function deleteRow(event) {
    if (!event.target.classList.contains('del-btn')) {
        return
    }
    const delBtn = event.target;
    delBtn.closest('tr').remove();
}




addBtn.addEventListener('click', () => {
    addRow();


});



table.addEventListener('click', deleteRow);
