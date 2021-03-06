const getValue = require('get-property-value');


module.exports = class Store {

  /**
   * @param {Object} rawContent       Initial content
   */
  constructor(rawContent = {}) {
    this.rawContent = rawContent;
  }

  /**
   * @param {String} path
   *
   * @return {Mixed}
   */
  get(path) {
    return getValue(this.rawContent, path);
  }

  /**
   * @param {Object} sections       Top level sections of content
   */
  setSections(sections) {
    Object.assign(this.rawContent, sections);
  }

};
