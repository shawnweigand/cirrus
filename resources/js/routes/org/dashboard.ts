import { queryParams, type QueryParams } from './../../wayfinder'

/**
 * @see routes/web.php:36
 * @route /{org}/dashboard
 */
export const dashboard = (args: { org: string | number } | [org: string | number] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: dashboard.url(args, options),
    method: 'get',
})

dashboard.definition = {
    methods: ['get','head'],
    url: '\/{org}\/dashboard',
}

/**
 * @see routes/web.php:36
 * @route /{org}/dashboard
 */
dashboard.url = (args: { org: string | number } | [org: string | number] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { org: args }
    }

    if (Array.isArray(args)) {
        args = {
            org: args[0],
        }
    }

    const parsedArgs = {
        org: args.org,
    }

    return dashboard.definition.url
            .replace('{org}', parsedArgs.org.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
 * @see routes/web.php:36
 * @route /{org}/dashboard
 */
dashboard.get = (args: { org: string | number } | [org: string | number] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: dashboard.url(args, options),
    method: 'get',
})

/**
 * @see routes/web.php:36
 * @route /{org}/dashboard
 */
dashboard.head = (args: { org: string | number } | [org: string | number] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: dashboard.url(args, options),
    method: 'head',
})

export default dashboard