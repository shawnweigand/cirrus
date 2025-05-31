import { queryParams, type QueryParams } from './../../../wayfinder'

/**
 * @see \App\Http\Controllers\SubmissionController::edit
 * @see app/Http/Controllers/SubmissionController.php:59
 * @route /{slug}/submissions/{submission}/edit
 */
export const edit = (args: { slug: string | number, submission: string | { id: string } } | [slug: string | number, submission: string | { id: string }], options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ['get','head'],
    url: '\/{slug}\/submissions\/{submission}\/edit',
}

/**
 * @see \App\Http\Controllers\SubmissionController::edit
 * @see app/Http/Controllers/SubmissionController.php:59
 * @route /{slug}/submissions/{submission}/edit
 */
edit.url = (args: { slug: string | number, submission: string | { id: string } } | [slug: string | number, submission: string | { id: string }], options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
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

    return edit.definition.url
            .replace('{slug}', parsedArgs.slug.toString())
            .replace('{submission}', parsedArgs.submission.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
 * @see \App\Http\Controllers\SubmissionController::edit
 * @see app/Http/Controllers/SubmissionController.php:59
 * @route /{slug}/submissions/{submission}/edit
 */
edit.get = (args: { slug: string | number, submission: string | { id: string } } | [slug: string | number, submission: string | { id: string }], options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
 * @see \App\Http\Controllers\SubmissionController::edit
 * @see app/Http/Controllers/SubmissionController.php:59
 * @route /{slug}/submissions/{submission}/edit
 */
edit.head = (args: { slug: string | number, submission: string | { id: string } } | [slug: string | number, submission: string | { id: string }], options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: edit.url(args, options),
    method: 'head',
})

export default edit