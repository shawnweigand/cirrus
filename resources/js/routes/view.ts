import { queryParams, type QueryParams } from './../wayfinder'

/**
 * @see routes/web.php:53
 * @route /view
 */
export const view = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: view.url(options),
    method: 'get',
})

view.definition = {
    methods: ['get','head'],
    url: '\/view',
}

/**
 * @see routes/web.php:53
 * @route /view
 */
view.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return view.definition.url + queryParams(options)
}

/**
 * @see routes/web.php:53
 * @route /view
 */
view.get = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: view.url(options),
    method: 'get',
})

/**
 * @see routes/web.php:53
 * @route /view
 */
view.head = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: view.url(options),
    method: 'head',
})

export default view