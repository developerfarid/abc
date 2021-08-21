
let bestPrice = document.getElementById('bestCost');
let memoryPrice = document.getElementById('extraMemory');
let storagePrice = document.getElementById('extraStorage');
let deliveryCharge = document.getElementById('extraDelivery');
let displayPrice = document.getElementById('totalPrice');
let finalCost = document.getElementById('footerFinalCost');
let promoInput = document.getElementById('promoInput');
let promoCode = "stevekaku";

function extraProductCost(product, price) {
    if (product == 'memory') {
        memoryPrice.innerText = price;
    } else if (product == 'storage') {
        storagePrice.innerText = price;
    } else if (product == 'deliveryCost') {
        deliveryCharge.innerText = price;
    }
    let totalPrice = parseInt(bestPrice.innerText) + parseInt(memoryPrice.innerText) + parseInt(storagePrice.innerText) + parseInt(deliveryCharge.innerText);
    displayPrice.innerText = totalPrice;
    finalCost.innerText = totalPrice;
}

function applyPromo(interPromo, off) {
    if (interPromo.value == promoCode) {
        if (finalCost.innerText == displayPrice.innerText) {
            let overAllCost = parseInt(finalCost.innerText);
            let twentyPercentOff = (off / 100) * overAllCost;
            overAllCost = overAllCost - twentyPercentOff;
            finalCost.innerText = overAllCost;
        } else {
            alert('Promo Code Already Applied.');
        }
    } else {
        alert('Incorrect Promo Code.');
    }
    document.getElementById('promoInput').value = '';
}

// Extra Memory Price Calculation.
document.getElementById('eightGbMemory').addEventListener('click', function () {
    extraProductCost('memory', 0);
});
document.getElementById('sixteenGbMemory').addEventListener('click', function () {
    extraProductCost('memory', 180);
});
// Extra Storage Price Calculation.
document.getElementById('storage256').addEventListener('click', function () {
    extraProductCost('storage', 0);
});
document.getElementById('storage512').addEventListener('click', function () {
    extraProductCost('storage', 100);
});

document.getElementById('storage1tb').addEventListener('click', function () {
    extraProductCost('storage', 180);
});
// Extra Delivery Price Calculation.
document.getElementById('freeDelivery').addEventListener('click', function () {
    extraProductCost('deliveryCost', 0);
});
document.getElementById('premiumDelivery')
    .addEventListener('click', function () {
        extraProductCost('deliveryCost', 20);
    });
// 20% Off Promo Code Price Calculation.
document.querySelector('.promo-button').addEventListener('click', function () {
    applyPromo(promoInput, 20);
});

