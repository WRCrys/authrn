interface Response {
    token: string;
    user: {
        name: string;
        email: string;
    };
}

export function signIn(): Promise<Response> {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({
                token: 'adsdasfasdfaasdasfasf',
                user: {
                    name: 'Bruce',
                    email: 'bruce@wrcrys.ca'
                },
            });
        }, 2000);
    });
}