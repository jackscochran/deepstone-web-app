var expect = require('chai').expect;
var axios = require('axios').default;

API_URL = 'http://127.0.0.1:5000'

describe('API Routes', () => {
    before(() => {});

    describe('GET /trending', () => {
        it('should return a list of 20 stocks if no n argument was passed', () => {
            return axios.get(API_URL + '/api/trending').then(response => {
                bodyObject = response.data
                expect(bodyObject.length).to.equal(20)
            })
        });
        it('should return a list of 2 stocks if n = 2', () => {
            return axios.get(API_URL + '/api/trending?n=2').then(response => {
                bodyObject = response.data
                expect(bodyObject.length).to.equal(2)
            })
        });
    });

    describe('GET /company', () => {
        it('should retun company with correct keys', () => {
            return axios.get(API_URL + '/api/company?ticker=aapl').then(response => {
                bodyObject = response.data
                expect(bodyObject[0]).to.have.all.keys('_id', 'ticker', 'companyName', 'sector', 'industry', 'profile');
            });
        });
        it('should retun a json with correct company information', () => {
            return axios.get(API_URL + '/api/company?ticker=amzn').then(response => {
                bodyObject = response.data
                expect(bodyObject[0]).to.include({ticker: 'amzn', companyName: 'Amazon.com, Inc.', sector: 'Consumer Cyclical', industry: 'Internet Retail'});
            });
        });
        it('should retun an empty list for non existant company', () => {
            return axios.get(API_URL + '/api/company?ticker=neticker').then(response => {
                bodyObject = response.data
                expect(bodyObject).to.deep.equal([]);
            });
        });
    });

    describe('GET /financials', () => {
        it('should retun financials with correct keys', () => {
            return axios.get(API_URL + '/api/financials?ticker=aapl&date=2000-04-19&period=quarter').then(response => {
                bodyObject = response.data
                expect(bodyObject).to.have.all.keys('_id', 'ticker', 'date', 'period', 'incomeStatement', 'balanceSheet', 'cashflowStatement', 'financialMetrics');
            });
        });
        it('should retun a json with correct company information', () => {
            return axios.get(API_URL + '/api/financials?ticker=amzn&date=2022-04-19&period=annual').then(response => {
                bodyObject = response.data
                expect(bodyObject).to.include({ticker: 'amzn', date: '2021-12-31', period: 'annual'});
            });
        });
        it('should retun an empty list for non existant financials', () => {
            return axios.get(API_URL + '/api/financials?ticker=neticker&date=2022-04-19&period=annual').then(response => {
                bodyObject = response.data
                expect(bodyObject).to.equal(null);
            });
        });
    });

    describe('GET /market-price', () => {
        it('should return the correct price for a given date', () => {
            return axios.get(API_URL + '/api/market-price?ticker=tsla&date=2022-04-13', ).then(response => {
                bodyObject = response.data
                expect(bodyObject).to.include({value: 1022.37});
            });
        });
    });

    describe('GET /market-prices', () => {
        it('should return a non empty time series list of prices', () => {
            return axios.get(API_URL + '/api/market-prices?ticker=aapl&startDate=1990-01-01&endDate=2000-01-01').then(response => {
                bodyObject = response.data
                expect(bodyObject).to.have.lengthOf.above(0)
            });
        });
    });

    describe('POST /register', () => {
        it('should return true if user was registered properly', () => {
            return axios.post(
                API_URL + '/api/register',
                {
                    username: 'fakeUser1',
                    email: 'fakeUser1@test.com',
                    password: 'password'
                })
                .then(response => {
                    bodyObject = response.data;
                    expect(bodyObject.message).to.equal('Success');
                });
        });
        it('should return false if user is already registered', () => {
            return axios.post(
                API_URL + '/api/register',
                {
                    username: 'fakeUser2',
                    email: 'fakeUser1@test.com',
                    password: 'password'
                })
                .then(response => {
                    expect(response.data.message).to.equal('User already exists') 
                });
        });


    });

    describe('POST /login', () => {
        it('should return a user with correct email if correct email and password', () => {
            return axios.post(
                API_URL + '/api/login',
                {
                    email: 'fakeUser1@test.com',
                    password: 'password'
                })
                .then(response => {
                    expect(response.data.data.email).to.equal('fakeUser1@test.com')
                })
        })
        it('should return false if password is incorrect', () => {
            return axios.post(
                API_URL + '/api/login',
                {
                    email: 'fakeUser1@test.com',
                    password: 'wrongPassword'
                })
                .then(response => {
                    expect(response.data.message).to.equal('Incorrect password')
                })  
        })
        it('should return false if email does not exist', () => {
            return axios.post(
                API_URL + '/api/login',
                {
                    email: 'fakeUser2@test.com',
                    password: 'password'
                })
                .then(response => {
                    expect(response.data.message).to.equal('User does not exist')
                })
        })
    });

    // describe('POST /update-user', () => {
    //     it('should change use attributes in database collection to new values')
    //     it('should return false if user DNE')
    // });

    describe('GET /user-exists', () => {
        it('should return true if user exists', () => {
            return axios.get(API_URL + '/api/user-exists?email=fakeUser1@test.com').then(response => {
                expect(response.data).to.equal(true)
            })
        })
        it('should return false if user does not exist', () => {
            return axios.get(API_URL + '/api/user-exists?email=fakeUser2@test.com').then(response => {
                expect(response.data).to.equal(false)
            })
        })
    });

    describe('DELETE /delete-user', () => {
        it('should return false if password is incorrect', () => {
            return axios.post(
                API_URL + '/api/delete-user',
                {
                    email: 'fakeUser1@test.com',
                    password: 'wrongPassword'
                })
                .then(response => {
                    expect(response.data.message).to.equal('Incorrect password')
                })
        })

        it('should return true if user is deleted', () => {
            return axios.post(
                API_URL + '/api/delete-user',
                {
                    email: 'fakeUser1@test.com',
                    password: 'password'
                })
                .then(response => {
                    expect(response.data.message).to.equal('Success')
                })
        })

        it('should delete a user after being called', () => {
            return axios.get(API_URL + '/api/user-exists?email=fakeUser1@test.com').then(response => {
                expect(response.data).to.equal(false)
            })
        })
        it('should return false if user DNE', () => {
            return axios.post(
                API_URL + '/api/delete-user',
                {
                    email: 'fakeUser1@test.com',
                    password: 'password'
                })
                .then(response => {
                    expect(response.data.message).to.equal('User does not exist')
                })
        })
    });



    after( () => {
        // Delete users that were added
        const usersAdded = ['fakeUser1@test.com']; //already deleted
    });
})