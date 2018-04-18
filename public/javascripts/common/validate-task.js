/*
var validateTask = function(task) {
  return true;
}

*/

/*
var validateTask = function(task) {
  if(task)
    return true;
  return false;
}
*/

/*
var validateTask = function(task) {
  if(task && task.name)
    return true;
  return false;
}
*/

/*
var validateTask = function(task) {
  if(task && task.name &&
    task.month && !isNaN(task.month))
    return true;
  return false;
}
*/

var validateTask = function(task) {
  if (task && task.name &&
    task.month && !isNaN(task.month) &&
    task.day && !isNaN(task.day) &&
    task.year && !isNaN(task.year))
    return true;

  return false;
};
(typeof module !== 'undefined') && (module.exports = validateTask);
