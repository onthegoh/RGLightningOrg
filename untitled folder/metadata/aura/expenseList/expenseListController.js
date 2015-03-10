({
    update: function(component, evt, helper) {
      var expense = component.get("v.expense");
      var updateEvent = $A.get("e.rgohLightning:updateExpenseItem");
      updateEvent.setParams({ "expense": expense }).fire();
    }
})