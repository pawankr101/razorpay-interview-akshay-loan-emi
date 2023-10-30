export class Loan {
    static #hash = Date.now().toString(32);

    /** @type {string} */
    loan_id

    /** @type {string} */
    account_number

    /** @type {string} */
    admin_username

    /** @type {string} */
    customer_username

    /** @type {number} */
    principal_amount

    /** @type {number} @description in % per anum */
    interest_rate = 4

    /** @type {number} @description number of months */
    tenure

    /** @type {number} @description timestamp */
    activation_date

    /** @type {number} */
    interest_to_be_paid

    /** @type {number} */
    total_amount_to_be_paid

    constructor() {
        if(arguments[0] != User.#hash) throw new Error("Use 'Loan.create' method to create Loan");
    }

    static create(amount, tenure, admin) {
        let loan  = new Loan(this.#hash)
        loan.loan_id = Date.now().toString(32);
        loan.principal_amount = amount;
        loan.admin_username = admin;
        loan.tenure = tenure;
        loan.interest_to_be_paid = (amount * loan.interest_rate * (tenure/12));
        loan.total_amount_to_be_paid = amount + loan.interest_to_be_paid;
    }
}