import { queryParams, type QueryParams } from './../../../wayfinder'

/**
 * @see \App\Http\Controllers\SubmissionController::create
 * @see app/Http/Controllers/SubmissionController.php:23
 * @route /{slug}/submissions/create
 */
export const create = (args: { slug: string | number } | [slug: string | number] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: create.url(args, options),
    method: 'get',
})

create.definition = {
    methods: ['get','head'],
    url: '\/{slug}\/submissions\/create',
}

/**
 * @see \App\Http\Controllers\SubmissionController::create
 * @see app/Http/Controllers/SubmissionController.php:23
 * @route /{slug}/submissions/create
 */
create.url = (args: { slug: string | number } | [slug: string | number] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
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

    return create.definition.url
            .replace('{slug}', parsedArgs.slug.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
 * @see \App\Http\Controllers\SubmissionController::create
 * @see app/Http/Controllers/SubmissionController.php:23
 * @route /{slug}/submissions/create
 */
create.get = (args: { slug: string | number } | [slug: string | number] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: create.url(args, options),
    method: 'get',
})

/**
 * @see \App\Http\Controllers\SubmissionController::create
 * @see app/Http/Controllers/SubmissionController.php:23
 * @route /{slug}/submissions/create
 */
create.head = (args: { slug: string | number } | [slug: string | number] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: create.url(args, options),
    method: 'head',
})

export default create