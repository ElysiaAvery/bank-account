// Business logic

function BankAccount(name, deposit) {
  this.accountName = name;
  this.accountInitialDeposit = deposit;
  this.accountDeposit = [];
  this.accountWithdraw = [];
};

BankAccount.prototype.accountAdd = function() {
  return this.accountInitialDeposit += this.accountDeposit[0];
}

BankAccount.prototype.accountSubtract = function() {
  return this.accountInitialDeposit -= this.accountWithdraw[0];
}

var resetFields = function() {
  $("input#name").val("")
  $("input#initial-deposit").val("")
  $("input#deposit").val("");
  $("input#withdrawal").val("");
}

//UI Logic
$(document).ready(function() {
  $("form#initiate").submit(function(event){
    event.preventDefault();
    var inputtedName = $("input#name").val();
    var inputtedInitialDeposit = parseInt($("input#initial-deposit").val());

    var newAccount = new BankAccount(inputtedName, inputtedInitialDeposit);

    $("#account").append("<li><span class='account-list'>See " + newAccount.accountName + "'s balance</span></li>");
    $(".account-list").last().click(function() {
    $("#show-account").show();
    $("#show-account h2").text(newAccount.accountName);
    $("#display-name").text(newAccount.accountName);
    $("#enter-balance").text(newAccount.accountInitialDeposit);
    $("#doing-work").unbind();
  $("#doing-work").submit(function(event){
    event.preventDefault();
    var inputtedDeposit = parseInt($("input#deposit").val());
    var inputtedWithdrawal = parseInt($("input#withdrawal").val());
    if (inputtedDeposit){
      newAccount.accountDeposit.unshift(inputtedDeposit);
      newAccount.accountAdd();
    }
    if (inputtedWithdrawal){
      newAccount.accountWithdraw.unshift(inputtedWithdrawal);
      newAccount.accountSubtract();
    }
    console.log(newAccount.accountDeposit);
    console.log(newAccount);
    $("#enter-balance").text(newAccount.accountInitialDeposit);
    resetFields();
    })
  })
  resetFields();
  });
});
