/**
 * Extract a property from a list of objects.
 */
module.exports = function plck(prop, list) {
  if (!list) return [];
  return Array.prototype.map.call(list, function(obj) {
    return obj[prop];
  });
};
