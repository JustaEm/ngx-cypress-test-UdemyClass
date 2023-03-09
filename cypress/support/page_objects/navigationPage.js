

function selectGroupMenuItem(groupName) {
    cy.contains('a', groupName).then(menu => {
        cy.wrap(menu).find('.expand-state g g').invoke('attr', 'data-name').then(attr => {
            if (attr.includes('left')) {
                cy.wrap(menu).click()
            }
        })
    })
}

export class NavigationPage {

    formLayoutsPage() {  //Method responsible for actions
        selectGroupMenuItem('Form') //calling out on reusable function (above) :) groupName = Form
        cy.contains('Form Layouts').click()
    }

    datepickerPage() { //Method responsible for actions
        selectGroupMenuItem('Form') //groupName = Form
        cy.contains('Datepicker').click()
    }

    toasterPage() { //Method responsible for actions
        selectGroupMenuItem('Modal & Overlays') //groupName = Modal & Overlays
        cy.contains('Toastr').click()
    }

    smartTablePage() { //Method responsible for actions
        selectGroupMenuItem('Tables & Data') // groupName = Tables & Data
        cy.contains('Smart Table').click()
    }

    tooltipPage() { //Method responsible for actions
        selectGroupMenuItem('Modal & Overlays') //groupName = Modal & Overlays
        cy.contains('Tooltip').click()
    }

}

export const navigateTo = new NavigationPage() //Created instance of the class [above] (export class NavigationPage{)
//and assgned it to that object