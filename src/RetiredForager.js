var RetiredForagerBee = function() {
  ForagerBee.call(this);
  this.age = 40;
  this.job = 'gamble';
  this.canFly = false;
  this.color = 'grey';

};

ForagerBee.prototype = Object.create(RetiredForagerBee.prototype);
ForagerBee.prototype.constructor = ForagerBee;

RetiredForagerBee.prototype.forage = function(){
  return "I am too old, let me play cards instead";
}

RetiredForagerBee.prototype.gamble = 


