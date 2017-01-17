Vue.component('employee-row', {
  template: '#employee-row',
  props: {
    employee: Object
  }
})


var employees = new Vue({
  el: '#employees',
  data: {
    employees: []
  },
  ready: function() {
    var that;
    that = this;
    $.ajax({
      url: '/employees.json',
      success: function(res) {
        that.employees = res;
      }
    });
  }
});
