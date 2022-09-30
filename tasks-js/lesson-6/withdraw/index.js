// put your code here
function withdraw(clients, balances, client, amount) {
  let res = 0;
  for (let i = 0; i < clients.length; i += 1) {
    if (balances[i] < amount) {
      return -1;
    }
    if (clients[i] === client) {
      res = balances[i] - amount;
      balances[i] = balances[i] - amount;
    }
  }
  return res;
}

console.log(withdraw(['Ann', 'John', 'User'], [1400, 47, -6], 'John', 50));
