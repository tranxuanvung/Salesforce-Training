import { LightningElement, api } from 'lwc';

export default class Button extends LightningElement {
    @api label;
    @api icon;
    handleButton(event) {
        this.dispatchEvent(new CustomEvent('buttonclick',{
            // Tại sao phải bubles ở đây?
            //- trong control.html chúng ta đặt onbuttonclick={handleMultiply} ơr trong <lightning-layout-item> chứ không phải trong <c-button> nên phải buble lên <lightning-layout-item> khi thực hiện thao tác onclick trên button
            // Vậy đặt onbuttonclick={handleMultiply} trong <c-button> có được không?
            // - Được và vẫn chạy bình thường nhưng việc đặt bubble như trên giúp code được clean và nhanh hơn => nên dùng bubble khi mà dùng vòng for để tạo các component con
            bubbles: true
        }));
    }
}