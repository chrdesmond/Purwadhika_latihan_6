//1 hitung data siswa dengan objek nama,email, age,score. hasilnya harus ada highest, lowest, average
function calculateAge(birthDate){
    return Math.floor((new Date() - birthDate) / (365 * 24 * 60 * 60 * 1000))
}

function calculateDataStudent(arrStudents){

    let result = {
        score:{
            highest:arrStudents[0].score, //untuk mencari kandidat yang terbesar, cari yang di indek ke 0 duli yaitu object pertama
            lowest:arrStudents[0].score, //untuk mencari kandidat yang terkecil
            avg:0
        },
        age:{
            highest:calculateAge(arrStudents[0].birthDate),
            lowest:calculateAge(arrStudents[0].birthDate),
            avg:0
        }
    }

    let totalScore = 0
    let totalAge = 0

    for(let i = 0; i < arrStudents.length; i++) {
        if(arrStudents[i].score > result.score.highest) {
            result.score.highest = arrStudents[i].score
        }
        if(arrStudents[i].score < result.score.lowest){
            result.score.lowest = arrStudents[i].score
        }

        //console.log(calculateAge(arrStudents[i].birthDate))
        if(calculateAge(arrStudents[i].birthDate) > result.age.highest){
            result.age.highest = calculateAge(arrStudents[i].birthDate)
        }

        if(calculateAge(arrStudents[i].birthDate) < result.age.lowest){
            result.age.lowest = calculateAge(arrStudents[i].birthDate)
        }

        totalScore += arrStudents[i].score
        totalAge += calculateAge(arrStudents[i].birthDate)
    }
    let avgScore = Math.floor(totalScore / arrStudents.length)
    let avgAge = Math.floor(totalAge / arrStudents.length)

    result.score.avg = avgScore
    result.age.avg = avgAge

    return result

}

calculateDataStudent

console.log(calculateDataStudent([
    {
        name:"Aries Dimas",
        email:"aries@purwadhika.com",
        birthDate:new Date("1992-10-10"),
        score:98
    },
    {
        name:"Firdaus",
        email:"firdaus@purwadhika.com",
        birthDate:new Date("1994-10-10"),
        score:89
    },
    {
        name:"indriyanus",
        email:"indrianus@purwadhika.com",
        birthDate:new Date("1990-10-10"),
        score:94
    },
    {
        name:"Petrus",
        email:"indrianus@purwadhika.com",
        birthDate:new Date("1999-10-10"),
        score:90
    }
])

)

//2
class Product {

    #name = ""
    #price = 0

    set productName(name){
        if(!name){
            return "name must be filled"
        }

        if(name.length <= 3){
            return "name must be more than 3 characters"
        }
        this.#name = name
    }

    get productName(){
        return this.#name
    }

    set productPrice(price){
        this.#price = price
    }

    get productPrice(){
        return this.#price
    }

    static warehouse = []

    productDetail(){
        return{
            name: this.#name,
            price: this.#price
        }
    }
}

let rtx4070 = new Product()
rtx4070.productName = "GPU RTX 4070 16 GB ROG"
rtx4070.productPrice = 11000000

let keyboard = new Product()
keyboard.productName = "Asus ROG EVangelion Keyboard"
keyboard.productPrice = 5000000

let processor = new Product()
processor.productName = "Intel Core i9"
processor.productPrice = 9000000

Product.warehouse.push(rtx4070, keyboard, processor)

console.log(rtx4070.productName, rtx4070.productPrice)
console.log(Product.warehouse)

class Transaction {
    #total = 0
    cart = []
    addToCart(product){
        this.cart.push(product)
        this.#total += product.total
    }
    get showTotal(){
        return this.#total
    }

    get checkout(){
        return {
            cart: this.cart,
            total: this.#total
        }
    }
}

let transaction = new Transaction()

transaction.addToCart({
    name:Product.warehouse[0].productName,
    price:Product.warehouse[0].productPrice,
    qty: 5,
    total: Product.warehouse[0].productPrice * 5
})

transaction.addToCart({
    name:Product.warehouse[2].productName,
    price:Product.warehouse[2].productPrice,
    qty: 2,
    total: Product.warehouse[2].productPrice * 2
})

console.log(transaction.cart)
console.log(transaction.showTotal)
console.log(transaction.checkout)

