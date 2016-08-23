// Business logic

var person = [];
function Account(name, balance, deposit, withdrawal) {
  this.name = name;
  this.balance = balance;
  this.deposit = deposit;
  this.withdrawal = withdrawal;
}

Account.prototype.total = function() {
  this.balance = this.balance - this.withdrawal + this.deposit;
  return this.balance;
}


//UI Logic
$(document).ready(function() {
  $("form").submit(function(event){
    event.preventDefault();
    var inputtedName = $("input#name").val();
    var inputtedInitialDeposit = parseInt($("input#initial-deposit").val());
    var inputtedDeposit = parseInt($("input#deposit").val());
    var inputtedWithdrawal = parseInt($("input#withdrawal").val());

    var newAccount = new Account(inputtedName, inputtedInitialDeposit, inputtedDeposit, inputtedWithdrawal);
    person.push(newAccount);


    $(".total-balance").append("<li><span class='account'>See " + newAccount.name + "'s balance</span></li>");

    $(".account").last().click(function() {
      $("#show-account").show();
      $("#show-account h2").text(newAccount.name);
      $(".balance").text(newAccount.total());

    })
  });
});
