const { I } = inject();
const elementPage = require('../page-objects/element-page')

Given('I perform right click', async function(){
    await I.rightClick(elementPage.elements.buttonSection.rightClick)
});

Given('I validate right click is successful', async function(){
    await I.seeTextEquals('You have done a right click', elementPage.elements.buttonSection.rightClickMsg)
});

Given('I perform double click', async function(card){
    await I.doubleClick(elementPage.elements.buttonSection.doubleClick)
});

Given('I validate doule click is successful', async function(){
    await I.seeTextEquals('You have done a double click',elementPage.elements.buttonSection.doubleClickMsg)
});

Given('I click on button section', async function(){
    await I.click(elementPage.elements.button)
});
