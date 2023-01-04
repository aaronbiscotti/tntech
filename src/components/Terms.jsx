import React from "react";
import Nav from "./Nav.jsx";

const sections = [
  {
    heading: "Definitions & Interpretation",
    text: `"In the following Terms and Conditions of sale, unless the context requires otherwise\n\n
            (a) "Shop" means Shop Pty Ltd ABN 11 222 333 444;
            (b) "Customer" means the person or corporation placing an order for the purchase of goods or services from Shop;
            (c) "Products" means any goods, materials, equipment or services provided to the Customer by Shop;
            (d) if the Customer comprises more than one person, each of those person’s liability is joint and several;
            (e) references to a party or a person includes any form of entity and their respective successors, assigns and representatives; 
            (f) for all periods and times specified in clauses 5 and 11, time is of the essence; and
            (g) all references to currency are references to Australian dollars. "`,
  },
  {
    heading: "General",
    text: "By ordering the Products and/or accepting delivery of the Products from Shop, the Customer agrees that it is bound by these Terms and Conditions of sale. Customer orders, including orders placed via the internet, are subject to acceptance by Shop. The acceptance of the Customer's order by Shop is expressly made conditional upon the Customer's assent to these Terms and Conditions which will prevail notwithstanding anything that may be stated to the contrary on the Customer's order. Shop reserves the right to vary any of these terms at any time and any subsequent orders placed by the Customer will constitute an acceptance of the terms as varied. Once a Customer order has been placed and accepted by Shop, the Customer agrees that the Customer has no right to cancel or vary the order at any time, unless agreed upon in writing by both parties.",
  },
  {
    heading: "Quotations",
    text: "Any quotation by Shop to the Customer will be open for acceptance by the Customer within the period stated in the quotation or, where no period is stated, within seven (7) days from the date of the quotation. Thereafter, prices stated in the quotation may be varied by Shop without notice to the Customer.",
  },
  {
    heading: "Prices / Taxes",
    text: "The prices charged by and payable to Shop will be the ruling prices applicable at the time of order placement, provided that the Products are accepted for delivery within a reasonable time. Prices are subject to change without notice. Recommended retail prices are provided for indicative purposes only and there is no obligation for Shop to comply with that recommendation. It as agreed that should the Customer fail for any reason to acquire the quantity of Products sold then without limiting Shop' other rights and remedies the unit price charged for the goods sold may be amended to take into account any variation in the total quantity purchased by the Customer. Prices include GST, but do not include any other tax or duty, which is in addition to the price and is to be paid by the Customer at the time of payment for the Products.",
  },
  {
    heading: "Terms of Payment",
    text: "Credit Card Payments may attract a surcharge, and Shop will inform the Customer if this is to be the case before processing the transaction.\nUnless otherwise agreed in writing by Shop, where Shop has not agreed in writing to provide commercial credit to the Customer, the total purchase price for Products supplied will be due for payment in cash prior to delivery.\nWhere Shop has agreed in writing to provide commercial credit to the Customer, the Customer must make payments in accordance with the payment terms provided by Shop.\nWhere Shop has approved the provision of a commercial credit arrangement with the Customer but has not provided notice of the payment terms to the Customer, the Customer must pay the total purchase price for Products supplied within seven days of the statement date.\nCredit Card Payment at an Invoice or transaction level may also be offered to the Customer as a stand-alone payment method, or in conjunction with Credit Card Direct Debit Authorisation."
  },
  {
    heading: "Credit Accounts",
    text: "Any commercial credit arrangements that are provided to the Customer by Shop will continue until terminated by Shop at it sole discretion. In the event that Shop terminates the Customer's commercial credit arrangement, the Customer will be notified in writing and termination will take effect upon receipt of that notification by the Customer."
  },
  {
    heading: "Change of Ownership",
    text: "Trading accounts are approved by Shop based on the information supplied and the representations made by the Customer. In the event that there is a change in ownership of the Customer, whether total or partial, the Customer must immediately provide written notice to Shop informing Shop of these changes. Until Shop receives written notice from the Customer of a change in ownership, the Customer (including where it is a company or trustee, each of the Directors thereof) holds Shop indemnified against any and all losses, unpaid accounts, interest, damages, costs, charges, fees and expenses incurred or suffered by Shop in trading with any person, company (including the same company but with a different shareholder or shareholders) or other entity (including a trust) which may have purchased the Customer's business or any interest in the Customer's business or any of the shares in the Customer and used the Customer's previously approved account for trading.\nWhere a Customer has been authorised by Shop to make payments through Credit Card Direct Debit, the Customer must provide notice in writing at least five (5) days prior to any change in ownership of the business to allow Shop sufficient time to contact the new owner to obtain and confirm new Credit Card information if applicable."
  },
  {
    heading: "Information on the Products supplied",
    text: "All descriptive specifications, illustrations, drawings, data, dimensions and weights furnished by Shop or otherwise contained in catalogues or other advertising material are approximate only and are intended to be merely a general description of the goods, are not incorporated within this agreement and no not form part of the description of the goods sold under this or any other agreement unless otherwise agreed to in writing by Shop in which case such information will be subject to recognised trade tolerances."
  },
  {
    heading: "Delivery",
    text: "The means of delivering the Products to the Customer will be at Shop' discretion. Shop reserves the right to deliver Products in part deliveries. In the event that Shop incurs additional costs for meeting special (i.e. Tasmania / Northern Territory Deliveries) or urgent delivery arrangements, these additional costs may be charged to the Customer and may include the cost of airfreight where it is not the normal method of delivery. The Customer agrees to accept delivery of the Products sold at any time during normal business hours.\nShop will not be liable for any loss or damage resulting from any late delivery of the Products and late delivery will not entitle the Customer to rescind or repudiate the Customer's order for the Products."
  }
];
const Terms = () => {
  return (
    <div className="text-black">
      <Nav />
      <h1 className="text-black text-2xl mb-6 mx-48">
        Shop Terms & Conditions
      </h1>
      <h1 className="text-black text-xl mb-6 mx-48">
        GENERAL TERMS AND CONDITIONS FOR SALE OF PRODUCTS AND SERVICES
      </h1>

      <div className="mx-48">
        {sections.map(section => (
          <div>
            <h3 className="font-medium">{section.heading}</h3>
            <br></br>
            <p>{section.text}</p>
            <br></br>
          </div>
        ))}
      </div>

      <div>
        
      </div>
    </div>
  );
};

export default Terms;
