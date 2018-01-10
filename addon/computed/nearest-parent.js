import Ember from "ember";

const getOwner = Ember.getOwner;
const computed = Ember.computed;

export default function(type) {
  return computed({
    get() {
      var typeClass = getOwner(this).factoryFor('component:' + type) ||
                      getOwner(this).factoryFor('view:' + type);
      return this.nearestOfType(typeClass);
    }
  });
}
