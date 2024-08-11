let totalPrice = 0;
let cartTotalItems=document.getElementById("pagepay");
let localItems=JSON.parse(localStorage.getItem('rooms'));
        let cartTotalQuantity=0; 
        localItems.forEach(data=>{
        cartTotalQuantity+=data.quantity;
});
cartTotalItems.textContent=cartTotalQuantity;

// Function to calculate the number of nights between two dates
function calculateNumberOfNights(checkInDate, checkOutDate) {
    const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
    const startDate = new Date(checkInDate);
    const endDate = new Date(checkOutDate);
    const numberOfNights = Math.round(Math.abs((startDate - endDate) / oneDay));
    return numberOfNights;
}
    
// Function to update the total price in the cart based on the number of nights

function updateTotalPrice() {
    const cartItems = JSON.parse(localStorage.getItem('rooms'));
    const searchDates = JSON.parse(localStorage.getItem('searchdata'));

    if (cartItems && searchDates) {

        // Calculate total price based on the number of nights for each room
        cartItems.forEach(item => {
            const numberOfNights = calculateNumberOfNights(searchDates[0].checkindate, searchDates[0].checkoutdate);
            totalPrice += parseInt(item.price) * numberOfNights;
        });
    }
}
    
// Call the updateTotalPrice function to calculate and update the total price initially
updateTotalPrice();

document.getElementById("paypage").textContent='$'+totalPrice;
