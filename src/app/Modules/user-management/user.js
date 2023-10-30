import { approvedLoansData, getAllLoans, loansRequestsData, usersData } from "../../data/data";
import { Loan } from "../Loan/loan"

export class User {
    static #hash = Date.now().toString(32);

    /** @type {string} */
    username

    /** @type {string} */
    name

    /** @type {'admin'|'customer'} */
    type

    /** @type {string} */
    email

    /** @type {string} */
    mobile

    constructor(username) {
        if(this.validateUserName(username)) {
            this.username = this.name = username
            this.type = type
        }
    }

    /** @param {string} username @returns {boolean}*/
    static validateUserName(username) {
        let user = usersData.find(u=> (u.username === username));
        return !user;
    }

    /**
     * @param {string} username 
     * @param {'admin'|'customer'} type 
     * @returns {User}
     */
    static register(username, type) {
        if(this.validateUserName(username)) {
            let user = new User(this.#hash);
            this.username = user.name = username
            user.type = type
            return user
        }
        return null;
    }

    updateName(name) {
        this.name = name;
        return this;
    }

    updateEmail(email) {
        this.email = email;
        return this;
    }
    updateMobile(mobile) {
        this.mobile = mobile;
        return this;
    }
}

export class Customer extends User {

    static register(username, type) {
        
    }

    /**
     * 
     * @param {number} amount 
     * @param {number} tenure @desc number of years 
     * @param {string} admin_id 
     */
    requestLoan(amount, tenure, admin_id) {
        loansRequestsData.push(Loan.create(amount, tenure*12, admin_id));
    }
}

export class Admin extends User {

    fetchAllLoans() {
        return getAllLoans();
    }

    /** @param {Loan} loan  */
    allowLoanRequest(loan) {

    }
}

