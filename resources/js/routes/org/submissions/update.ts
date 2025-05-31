import { queryParams, type QueryParams } from './../../../wayfinder'

/**
 * @see \App\Http\Controllers\SubmissionController::update
 * @see app/Http/Controllers/SubmissionController.php:67
 * @route /{slug}/submissions/{submission}
 */
export const update = (args: { slug: string | number, submission: string | { id: string } } | [slug: string | number, submission: string | { id: string }], options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'put',
} => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ['put','patch'],
    url: '\/{slug}\/submissions\/{submission}',
}

/**
 * @see \App\Http\Controllers\SubmissionController::update
 * @see app/Http/Controllers/SubmissionController.php:67
 * @route /{slug}/submissions/{submission}
 */
update.url = (args: { slug: string | number, submission: string | { id: string } } | [slug: string | number, submission: string | { id: string }], options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
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

    return update.definition.url
            .replace('{slug}', parsedArgs.slug.toString())
            .replace('{submission}', parsedArgs.submission.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
 * @see \App\Http\Controllers\SubmissionController::update
 * @see app/Http/Controllers/SubmissionController.php:67
 * @route /{slug}/submissions/{submission}
 */
update.put = (args: { slug: string | number, submission: string | { id: string } } | [slug: string | number, submission: string | { id: string }], options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'put',
} => ({
    url: update.url(args, options),
    method: 'put',
})

/**
 * @see \App\Http\Controllers\SubmissionController::update
 * @see app/Http/Controllers/SubmissionController.php:67
 * @route /{slug}/submissions/{submission}
 */
update.patch = (args: { slug: string | number, submission: string | { id: string } } | [slug: string | number, submission: string | { id: string }], options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'patch',
} => ({
    url: update.url(args, options),
    method: 'patch',
})

export default update