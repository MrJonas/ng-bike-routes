export const getAppUrl = () => process.env.NODE_ENV === 'production' ?
    'https://test.dviraciumarsrutai.lt/' : 'http://localhost:3000/';