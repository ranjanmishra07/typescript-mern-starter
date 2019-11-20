
export interface ILookupEmail {
    device: string,
    approverEmail1: string,
    escalationApprover1?: string,
    escalationApprover2?: string
} 

export const lookupRules: ILookupEmail[] = [
    {   device: "jira",
        approverEmail1: "ranjan.mishra@mygate.in",
        escalationApprover1: "ranjan.1js14ec079@gmail.com",
        escalationApprover2: "test@gmail.com"
    },
    {   device: "Sentry",
        approverEmail1: "ranjan.1js14ec079@gmail.com",
        escalationApprover1: "ranjan.1js14ec079@gmail.com",
        escalationApprover2: "test@gmail.com"
    },
]