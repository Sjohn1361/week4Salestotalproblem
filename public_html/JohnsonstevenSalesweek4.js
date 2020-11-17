
getSales();

function getSales () {
    var daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    var sales = [];
    var totalSales = 0;
    
for (let i = 0; i < daysOfWeek.length; i++) {
  
      sales[i] = window.prompt("Enter the total sales for " + daysOfWeek[i] + ":");
      totalSales += parseFloat(sales[i]);

}

document.write("your sales total for the week is: $" + totalSales.toFixed(2));
    

}

   