function angkaPrim1(bilangan) {
    if (bilangan <= 1) {
        return false;
    }

    for (let m = 2; m <= Math.sqrt(bilangan); m++) {
        if (bilangan % m === 0) {
            return false;
        }
    }
    return true;
}

function AngkaPrima(s, t) {
    let angkaPrima = [];

    for (let n = s; n <= t; n++) {
        if (angkaPrim1(n)) {
            angkaPrima.push(n);
        }
    }
    return angkaPrima;
}

let angkaPrima = AngkaPrima(1, 1000);
console.log("Bilangan prima: ");
console.log(angkaPrima);
