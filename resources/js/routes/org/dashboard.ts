import { queryParams, type QueryParams } from './../../wayfinder'

/**
 * @see routes/web.php:19
 * @route /{slug}/dashboard
 */
export const dashboard = (args: { slug: string | number } | [slug: string | number] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: dashboard.url(args, options),
    method: 'get',
})

dashboard.definition = {
    methods: ['get','head'],
    url: '\/{slug}\/dashboard',
}

/**
 * @see routes/web.php:19
 * @route /{slug}/dashboard
 */
dashboard.url = (args: { slug: string | number } | [slug: string | number] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { slug: args }
    }

    if (Array.isArray(args)) {
        args = {
            slug: args[0],
        }
    }

    const parsedArgs = {
        slug: args.slug,
    }

    return dashboard.definition.url
            .replace('{slug}', parsedArgs.slug.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
 * @see routes/web.php:19
 * @route /{slug}/dashboard
 */
dashboard.get = (args: { slug: string | number } | [slug: string | number] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: dashboard.url(args, options),
    method: 'get',
})

/**
 * @see routes/web.php:19
 * @route /{slug}/dashboard
 */
dashboard.head = (args: { slug: string | number } | [slug: string | number] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: dashboard.url(args, options),
    method: 'head',
})

export default dashboard