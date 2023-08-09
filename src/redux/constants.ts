// export const api = 'http://192.168.50.52:8080/api/v1'
export const api = 'http://192.168.50.50:8080/api/v1'
export const api_img = 'http://192.168.50.50:9000'

// export const api = 'https://api-somagep.mylogineo.com/api/v1'
// export const api_img = 'https://edm-files.mylogineo.com'

export const auth = `${api}/auth`
export const api_user = `${api}/users`
export const api_news = `${api}/actualities`
export const api_information = `${api}/informations`
export const api_town = `${api}/cities`
export const api_devis = `${api}/devis`
export const api_invoice = `${api}/invoices`
export const api_isago = `${api}/isago`
export const api_stat = `${api}/stats/count`
export const api_stat_devis = `${api}/stats/count-devis`
export const api_stat_post_paid = `${api}/stats/count-postpaid`
export const api_stat_isago = `${api}/stats/count-prepaid`
export const api_assistance = `${api}/assistances`
export const api_quarter = `${api}/quarters`
export const api_commune = `${api}/communes`

// admin auth
export const LOADING_USER: string = 'LOADING_USER'
export const ERROR_USER: string = 'ERROR_USER'
export const EMPTY_ERROR_USER: string = 'EMPTY_ERROR_USER'
export const IS_CONNECTED: string = 'IS_CONNECTED'

export const GET_ADMIN_BY_USERNAME_OR_PHONE: string = 'GET_ADMIN_BY_USERNAME_OR_PHONE'
export const EMPTY_ADMIN_BY_USERNAME_OR_PHONE: string = 'EMPTY_ADMIN_BY_USERNAME_OR_PHONE'
export const SEND_PIN: string = 'SEND_PIN'
export const RESET_FORGET: string = 'RESET_FORGET'
export const RESEND_CODE: string = 'RESEND_CODE'
export const RESET_PASSWORD: string = 'RESET_PASSWORD'

// admin and user
export const ADD_ADMIN: string = 'ADD_ADMIN'
export const GET_ADMIN: string = 'GET_ADMIN'
export const GET_ALL_ADMINS: string = 'GET_ALL_ADMINS'
export const GET_ALL_USERS: string = 'GET_ALL_USERS'
export const EDIT_ADMIN: string = 'EDIT_ADMIN'
export const DELETE_ADMIN: string = 'DELETE_ADMIN'
export const ACTIVE_ADMIN_USER: string = 'ACTIVE_ADMIN_USER'
export const FILTER_CLIENT: string = 'FILTER_CLIENT'

// new
export const LOADING_NEWS: string = 'LOADING_NEWS'
export const ERROR_NEWS: string = 'ERROR_NEWS'
export const GET_ALL_NEWS: string = 'GET_ALL_NEWS'
export const ADD_NEWS: string = 'ADD_NEWS'
export const EDIT_NEWS: string = 'EDIT_NEWS'
export const DELETE_NEWS: string = 'DELETE_NEWS'

// information
export const LOADING_INFORMATION: string = 'LOADING_INFORMATION'
export const ERROR_INFORMATION: string = 'ERROR_INFORMATION'
export const GET_ALL_INFORMATIONS: string = 'GET_ALL_INFORMATIONS'
export const ADD_INFORMATION: string = 'ADD_INFORMATION'
export const EDIT_INFORMATION: string = 'EDIT_INFORMATION'
export const DELETE_INFORMATION: string = 'DELETE_INFORMATION'

// town
export const LOADING_TOWN: string = 'LOADING_TOWN'
export const ERROR_TOWN: string = 'ERROR_TOWN'
export const GET_TOWN: string = 'GET_TOWN'
export const GET_ALL_TOWNS: string = 'GET_ALL_TOWNS'
export const ADD_TOWN: string = 'ADD_TOWN'
export const EDIT_TOWN: string = 'EDIT_TOWN'
export const DELETE_TOWN: string = 'DELETE_TOWN'

// devis
export const LOADING_DEVIS: string = 'LOADING_DEVIS'
export const ERROR_DEVIS: string = 'ERROR_DEVIS'
export const GET_ALL_DEVIS: string = 'GET_ALL_DEVIS'
export const VALIDATE_DEVIS: string = 'VALIDATE_DEVIS'
export const FILTER_DEVIS: string = 'FILTER_DEVIS'
export const EXPORT_DEVIS: string = 'EXPORT_DEVIS'
export const IMPORT_DEVIS: string = 'IMPORT_DEVIS'

// facutre post-pay
export const LOADING_POST_PAY: string = 'LOADING_POST_PAY'
export const ERROR_POST_PAY: string = 'ERROR_POST_PAY'
export const GET_ALL_POST_PAYS: string = 'GET_ALL_POST_PAYS'
export const FILTER_POST_PAY: string = 'FILTER_POST_PAY'
export const EXPORT_POST_PAY: string = 'EXPORT_POST_PAY'

// facutre pre-pay
export const LOADING_PRE_PAY: string = 'LOADING_PRE_PAY'
export const ERROR_PRE_PAY: string = 'ERROR_PRE_PAY'
export const GET_ALL_PRE_PAYS: string = 'GET_ALL_PRE_PAYS'
export const FILTER_PRE_PAY: string = 'FILTER_PRE_PAY'
export const EXPORT_PRE_PAY: string = 'EXPORT_PRE_PAY'

// statistique
export const LOADING_STAT: string = 'LOADING_STAT'
export const ERROR_STAT: string = 'ERROR_STAT'
export const GET_ALL_STATS: string = 'GET_ALL_STATS'

// statistique by year
// DEVIS
export const LOADING_STAT_DEVIS_BY_YEAR: string = 'LOADING_STAT_DEVIS_BY_YEAR'
export const ERROR_STAT_DEVIS_BY_YEAR: string = 'ERROR_STAT_DEVIS_BY_YEAR'
export const GET_ALL_STATS_DEVIS_BY_YEAR: string = 'GET_ALL_STATS_DEVIS_BY_YEAR'

// POST PAID
export const LOADING_STAT_POST_PAY_BY_YEAR: string = 'LOADING_STAT_POST_PAY_BY_YEAR'
export const ERROR_STAT_POST_PAY_BY_YEAR: string = 'ERROR_STAT_POST_PAY_BY_YEAR'
export const GET_ALL_STATS_POST_PAY_BY_YEAR: string = 'GET_ALL_STATS_POST_PAY_BY_YEAR'

// PRE PAID
export const LOADING_STAT_PRE_PAY_BY_YEAR: string = 'LOADING_STAT_PRE_PAY_BY_YEAR'
export const ERROR_STAT_PRE_PAY_BY_YEAR: string = 'ERROR_STAT_PRE_PAY_BY_YEAR'
export const GET_ALL_STATS_PRE_PAY_BY_YEAR: string = 'GET_ALL_STATS_PRE_PAY_BY_YEAR'

// ASSISTANCE
export const LOADING_ASSISTANCE: string = 'LOADING_ASSISTANCE'
export const ERROR_ASSISTANCE: string = 'ERROR_ASSISTANCE'
export const GET_ASSISTANCE: string = 'GET_ASSISTANCE'
export const GET_ALL_ASSISTANCES: string = 'GET_ALL_ASSISTANCES'
export const REPLY_ASSISTANCE: string = 'REPLY_ASSISTANCE'

// COMMUNE
export const LOADING_COMMUNE: string = 'LOADING_COMMUNE'
export const ERROR_COMMUNE: string = 'ERROR_COMMUNE'
export const GET_COMMUNE: string = 'GET_COMMUNE'
export const GET_ALL_COMMUNES: string = 'GET_ALL_COMMUNES'
export const ADD_COMMUNE: string = 'ADD_COMMUNE'
export const EDIT_COMMUNE: string = 'EDIT_COMMUNE'
export const DELETE_COMMUNE: string = 'DELETE_COMMUNE'

// QUARTIER
export const LOADING_QUARTER: string = 'LOADING_QUARTER'
export const ERROR_QUARTER: string = 'ERROR_QUARTER'
export const GET_QUARTER: string = 'GET_QUARTER'
export const GET_ALL_QUARTERS: string = 'GET_ALL_QUARTERS'
export const ADD_QUARTER: string = 'ADD_QUARTER'
export const EDIT_QUARTER: string = 'EDIT_QUARTER'
export const DELETE_QUARTER: string = 'DELETE_QUARTER'

// statistique by year
export const LOADING_STAT_BY_YEAR: string = 'LOADING_STAT_BY_YEAR'
export const ERROR_STAT_BY_YEAR: string = 'ERROR_STAT_BY_YEAR'
export const GET_ALL_STATS_BY_YEAR: string = 'GET_ALL_STATS_BY_YEAR'
