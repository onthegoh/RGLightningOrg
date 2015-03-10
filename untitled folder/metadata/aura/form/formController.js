({
	doInit : function(component, event, helper) {
		helper.getExpenses(component);
	},
    
    createExpense : function(component, event, helper) {
    var amtField = component.find("amount");
    var amt = amtField.get("v.value");
    if (isNaN(amt)||amt==''){
        amtField.setValid("v.value", false);
        amtField.addErrors("v.value", [{message:"Enter an expense amount."}]);
    }
    else {
        amtField.setValid("v.value", true);
        var newExpense = component.get("v.newExpense");
        helper.createExpense(component, newExpense);
        }
},//Delimiter for future code
    
	updateEvent : function(component, event, helper) {
    	helper.upsertExpense(component, event.getParam("expense"));
	}    
    
})