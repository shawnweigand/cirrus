import { queryParams, type QueryParams } from './../../../wayfinder'

/**
 * @see \App\Http\Controllers\SubmissionController::destroy
 * @see app/Http/Controllers/SubmissionController.php:61
 * @route /{slug}/submissions/{submission}
 */
export const destroy = (args: { slug: string | number, submission: string | { id: string } } | [slug: string | number, submission: string | { id: string }], options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'delete',
} => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ['delete'],
    url: '\/{slug}\/submissions\/{submission}',
}

/**
 * @see \App\Http\Controllers\SubmissionController::destroy
 * @see app/Http/Controllers/SubmissionController.php:61
 * @route /{slug}/submissions/{submission}
 */
destroy.url = (args: { slug: string | number, submission: string | { id: string } } | [slug: string | number, submission: string | { id: string }], options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
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

    return destroy.definition.url
            .replace('{slug}', parsedArgs.slug.toString())
            .replace('{submission}', parsedArgs.submission.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
 * @see \App\Http\Controllers\SubmissionController::destroy
 * @see app/Http/Controllers/SubmissionController.php:61
 * @route /{slug}/submissions/{submission}
 */
destroy.delete = (args: { slug: string | number, submission: string | { id: string } } | [slug: string | number, submission: string | { id: string }], options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'delete',
} => ({
    url: destroy.url(args, options),
    method: 'delete',
})

export default destroy