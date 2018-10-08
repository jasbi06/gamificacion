'use strict';

module.exports = function(Juego) {
/**
 * Devuelve el nombre del Juego
 * @param {Function(Error, string)} callback
 */

Juego.prototype.getNombre = function(callback) {  
  callback(null, this.nombre);
};
};
