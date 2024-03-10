const { I } = inject();
const elementPage = require('../page-objects/element-page')
const homePage = require('../page-objects/home-page')

Given('I remove ad from page', async function(card){
    await I.switchTo(homePage.iframe.googleFrame.frameId)
    await I.executeScript(function(){
            this.document.querySelectorAll('div[id="google_center_div"]').style.visibility = 'hidden'
    })
    await I.switchTo()
  });

Given('I navigate to site home page', async function(card){
  await I.amOnPage(process.env.url)
});

Given('I click on card {string}', async function(card){
    await I.click(locate(homePage.card.element).withText(card))
    await I.seeInCurrentUrl('/' + card.toLowerCase())
  });
