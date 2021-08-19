import { LightningElement,wire,track  } from "lwc";
import getAcc from '@salesforce/apex/accController.getAcc';
import getCon from '@salesforce/apex/accController.getCon';
export default class CustomIteration extends(LightningElement)
{
    accounts;
    contacts;
    @track isModalOpen = false;
    connectedCallback()
    {
        getAcc({}).then(result => 
            {
                this.accounts = result;
            });
    }
    handleClick(event)
    {
        
        const selectedId = event.target.name;
        this.isModalOpen = true;
        getCon({accId : selectedId}).then(result => 
            {
                this.contacts = result;
            });
            
            
    }
    closeModal()
    {
        this.isModalOpen = false;
    }
}
