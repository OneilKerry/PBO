class Payment{
        constructor(){
            this.CreditCardPayment = 5000000;
            this.EWalletPayment = 1000000;
            this.BankTransferPayment = 2000000;
        }
        process(){
    }
}

class CreditCardPayment extends Payment{
    process(){
        return console.log(`Membayar Rp${this.CreditCardPayment} menggunakan Kartu Kredit`);
    }
}

class EWalletPayment extends Payment{
    process(){
        return console.log(`Membayar Rp${this.EWalletPayment} menggunakan E-Wallet`);
    }
}

class BankTransferPayment extends Payment{
    process(){
        return console.log(`Membayar Rp${this.BankTransferPayment} menggunakan Transfer Bank`);
    }
}

const paymentCredit = new CreditCardPayment;
paymentCredit.process();

const paymentEWallet = new EWalletPayment;
paymentEWallet.process();

const paymentBank = new BankTransferPayment;
paymentBank.process();