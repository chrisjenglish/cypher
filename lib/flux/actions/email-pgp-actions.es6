// Expose missing Reflux
Reflux = require('nylas-exports').require('Reflux', '../node_modules/reflux');

var Actions = [
  'decryptMessage',
  'retryMessage'
];

Actions.forEach(key => {
  Actions[key] = Reflux.createAction(key);
});

export default Actions;