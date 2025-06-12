import { queryParams, type QueryParams } from './../../../wayfinder'

/**
 * @see \App\Http\Controllers\SubmissionController::show
 * @see app/Http/Controllers/SubmissionController.php:51
 * @route /{slug}/submissions/{submission}
 */
export const show = (args: { slug: string | number, submission: string | { id: string } } | [slug: string | number, submission: string | { id: string }], options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ['get','head'],
    url: '\/{slug}\/submissions\/{submission}',
}

/**
 * @see \App\Http\Controllers\SubmissionController::show
 * @see app/Http/Controllers/SubmissionController.php:51
 * @route /{slug}/submissions/{submission}
 */
show.url = (args: { slug: string | number, submission: string | { id: string } } | [slug: string | number, submission: string | { id: string }], options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    if (Array.isArray(args)) {
        args = {
            slug: args[0],
            submission: args[1],
        }
    }

    const parsedArgs = {
        slug: args.slug,
        submission: typeof args.submission === 'object'
            ? args.submission.id
            : args.submission,
    }

    return show.definition.url
            .replace('{slug}', parsedArgs.slug.toString())
            .replace('{submission}', parsedArgs.submission.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
 * @see \App\Http\Controllers\SubmissionController::show
 * @see app/Http/Controllers/SubmissionController.php:51
 * @route /{slug}/submissions/{submission}
 */
show.get = (args: { slug: string | number, submission: string | { id: string } } | [slug: string | number, submission: string | { id: string }], options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: show.url(args, options),
    method: 'get',
})

/**
 * @see \App\Http\Controllers\SubmissionController::show
 * @see app/Http/Controllers/SubmissionController.php:51
 * @route /{slug}/submissions/{submission}
 */
show.head = (args: { slug: string | number, submission: string | { id: string } } | [slug: string | number, submission: string | { id: string }], options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: show.url(args, options),
    method: 'head',
})

export default show