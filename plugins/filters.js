import Vue from 'vue'

Vue.filter('lowercase', string => {
  if (string)
   return string.toLowerCase();
})