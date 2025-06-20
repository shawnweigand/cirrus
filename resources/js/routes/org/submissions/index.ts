import create from './create'
import store from './store'
import show from './show'
import edit from './edit'
import update from './update'
import destroy from './destroy'
import { queryParams, type QueryParams } from './../../../wayfinder'

/**
 * @see \App\Http\Controllers\SubmissionController::index
 * @see app/Http/Controllers/SubmissionController.php:15
 * @route /{slug}/submissions
 */
export const index = (args: { slug: string | number } | [slug: string | number] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: index.url(args, options),
    method: 'get',
})

index.definition = {
    methods: ['get','head'],
    url: '\/{slug}\/submissions',
}

/**
 * @see \App\Http\Controllers\SubmissionController::index
 * @see app/Http/Controllers/SubmissionController.php:15
 * @route /{slug}/submissions
 */
index.url = (args: { slug: string | number } | [slug: string | number] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
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

    return index.definition.url
            .replace('{slug}', parsedArgs.slug.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
 * @see \App\Http\Controllers\SubmissionController::index
 * @see app/Http/Controllers/SubmissionController.php:15
 * @route /{slug}/submissions
 */
index.get = (args: { slug: string | number } | [slug: string | number] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: index.url(args, options),
    method: 'get',
})

/**
 * @see \App\Http\Controllers\SubmissionController::index
 * @see app/Http/Controllers/SubmissionController.php:15
 * @route /{slug}/submissions
 */
index.head = (args: { slug: string | number } | [slug: string | number] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: index.url(args, options),
    method: 'head',
})

const submissions = {
    index, 
    create, 
    store, 
    show, 
    edit, 
    update, 
    destroy,
}

export default submissions