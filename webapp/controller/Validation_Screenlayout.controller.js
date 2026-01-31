sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox"
], (Controller, MessageBox) => {
    "use strict";

    return Controller.extend("org.index.it.employeedata.controller.Validation_Screenlayout", {
        onInit() {
        },
        onSave() {
            var empID = this.getView().byId("_IDGenEmployeeId");
            var empName = this.getView().byId("_IDGenEmployeeName");
            var salary = this.getView().byId("_IDGenEmployeeSalary");

            var id = empID.getValue();
            var name = empName.getValue();
            var pay = salary.getValue();

            if (!/^[0-9]{5}$/.test(id)) {
                empID.setValueState("Error");
                empID.setValueStateText("Employee ID contains five digits");
                return;
            } else {
                empID.setValueState("None");
            }


            
            if (!/^[A-Z ]+$/.test(name)) {
                empName.setValueState("Error");
                empName.setValueStateText("Name should be in capitals");
                return;
            } else {
                empName.setValueState("None");
            }

            if (!/^[0-9]+$/.test(pay)) {
                salary.setValueState("Error");
                salary.setValueStateText("Salary should not be in words");
                return;
            } else {
                salary.setValueState("None");
            }

            MessageBox.success("Employee data saved successfully");
            this.getView().byId("_IDGenEmployeeId").setValue();
            this.getView().byId("_IDGenEmployeeName").setValue();
            this.getView().byId("_IDGenEmployeeSalary").setValue();
        }
    });
});