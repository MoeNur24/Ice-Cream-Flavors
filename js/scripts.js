window.onload = function(e) {
    e.preventDefault();

    const favoriteFlavors = ['Chocolate', 'Vanilla', 'Strawberry', 'Mint Chocolate Chip', 'Cookies and Cream'];
    const flavorList = document.getElementById('flavorList');
    const body = document.querySelector("body");
    body.append(flavorList);
    
    favoriteFlavors.forEach(function(flavor) {
        const li = document.createElement("li");
        li.append(flavor);
        flavorList.append(li);
    });
}