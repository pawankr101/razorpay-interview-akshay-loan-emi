
export const usersData = [
    {
        name: 'Admin',
        username: 'admin001',
        type: 'admin',
        mobile: '9876543210',
        email: 'admin@user.com'
    }
]

export const loansRequestsData = [
    
]

export const approvedLoansData = [
    
]

export function getAllUsers() {
    return approvedLoansData;
}

export function getUserDetail(username) {
    return usersData.find(u => (u.username === username))
}

export function getAllLoans() {
    return approvedLoansData;
}

export function getLoanDetail(loan_id) {
    return approvedLoansData.find(l => (l.loan_id === loan_id))
}

export function getAllLoanRequests() {
    return loansRequestsData;
}

export function getLoanRequest(loan_id) {
    return loansRequestsData.find(l => (l.loan_id === loan_id));
}