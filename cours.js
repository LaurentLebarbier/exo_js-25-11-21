class Bank{
static total=0;
    depose(depot){
       Bank.total += depot;
    }
}



edouard = new Bank();
edouard.depose(552);

alain = new Bank();
alain.depose(552);

julia = new Bank();
julia.depose(552);

console.log(Bank.total);