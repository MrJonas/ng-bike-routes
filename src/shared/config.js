export const getAppUrl = () => process.env.NODE_ENV === 'production' ?
    'https://dviraciumarsrutai.lt/' : 'http://localhost:3010/';