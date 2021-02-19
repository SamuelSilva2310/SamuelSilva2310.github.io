//Selectors
const expenseName = document.querySelector(".expenseText-input"); 
const expenseDate = document.querySelector(".expenseDate-input"); 
const expenseAmount = document.querySelector(".expenseAmount-input"); 
const expenseButton = document.querySelector(".expense-button"); 

//Table Body Container
const tableContainer = document.querySelector(".expense-container"); 
const tablePlaceholder = document.querySelector(".table-placeholder"); 


//Event listeners
expenseButton.addEventListener('click',addExpense);
tableContainer.addEventListener('click', deleteExpense);
//Functions




/*----------------------
        ADD EXPENSE
//----------------------*/

//THIS IS WHAT WE NEED TO ADD EVERY NEW EXPENSE
//----------------------------------------------

    // <tr class="expense">
    //     <td class="expenseName">KFC</td>
    //     <td class="expenseAmount">30.5</td>
    //     <td class="expenseDate">22/5/2021</td>
    //     <td class="expenseDelete"><button class="delete-btn"><i class="fas fa-trash"></i></button></td>
    // </tr>

//--------------------------------------------
function addExpense(e){
    //Prevent form from submiting
    e.preventDefault();

    //Remove PlaceHolder when 1 or more Expense is in table
    if(tableContainer.contains(tablePlaceholder)){
        tablePlaceholder.remove();
    }

    //Create Table Row
    const tbRow = document.createElement("tr");
    tbRow.classList.add("expense");

    //Create Table Entrys  -> <td> value </td>

        //Expense Name
        const expName = document.createElement("td");
        expName.classList.add("expenseName");
        expName.innerText = expenseName.value;

        tbRow.appendChild(expName);//Append the item (tb) with the name into the (tr)

        //Expense Amount
        const expAmount = document.createElement("td");
        expAmount.classList.add("expenseAmount");
        expAmount.innerText = String(expenseAmount.value) + "€";

        tbRow.appendChild(expAmount);//Append the item (tb) with the Amount into the (tr)

        //Expense Date
        const expDate = document.createElement("td");
        expDate.classList.add("expenseDate");
        expDate.innerText = expenseDate.value;

        tbRow.appendChild(expDate);//Append the item (tb) with the Date into the (tr)

        //DELETE EXPENSE BUTTON
            //Create (td) for button
            const expDelete = document.createElement("td");
            expDelete.classList.add("expenseDelete");

            //Create (button) and append inside the (td)
            const expDelete_btn = document.createElement("button");
            expDelete_btn.classList.add("delete-btn");
            expDelete_btn.innerHTML = '<i class="fas fa-trash"></i>';

            expDelete.appendChild(expDelete_btn);

            tbRow.appendChild(expDelete);//Append the item (tb) with the Delete button into the (tr)


        //Append new Expense to the Table
        tableContainer.appendChild(tbRow);

        //Clear Inputs
        expenseName.value="";
        expenseAmount.value="";
        expenseDate.value="";
}


/*----------------------
     DELETE EXPENSE
//----------------------*/

function deleteExpense(e){

    const item = e.target;
    
    
    //Delete
   if(item.classList[0] === 'delete-btn'){
    const expense = item.parentElement.parentElement;
    console.log(expense);
    
    expense.remove();
       
    }

    //Remove PlaceHolder when 1 or more Expense is in table
    if(!tableContainer.contains(document.querySelector(".expense"))){
        tableContainer.append(tablePlaceholder);
    }

}