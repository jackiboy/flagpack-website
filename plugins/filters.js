import Vue from 'vue'

Vue.filter('lowercase', string => {
  if (string)
   return string.toLowerCase();
})

Vue.filter('truncate', (string, stop, clamp) => {
  if (string)
    return string.slice(0, stop) + (stop < string.length ? clamp || '...' : '')
})