import Ember from "ember";
import computed from 'ember-computed';

const getOwner = Ember.getOwner;

export default function (type) {
  return computed({
    get() {
      let typeClass = getOwner(this).factoryFor('component:' + type) ||
                      getOwner(this).factoryFor('view:' + type);
      return this.nearestOfType(typeClass);
    }
  });
}
