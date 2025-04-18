import create from './create'
import store from './store'
import show from './show'
import edit from './edit'
import update from './update'
import destroy from './destroy'
import { queryParams, type QueryParams } from './../../../wayfinder'

/**
 * @see \App\Http\Controllers\TemplateController::index
 * @see app/Http/Controllers/TemplateController.php:17
 * @route /{slug}/templates
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
    url: '\/{slug}\/templates',
}

/**
 * @see \App\Http\Controllers\TemplateController::index
 * @see app/Http/Controllers/TemplateController.php:17
 * @route /{slug}/templates
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
 * @see \App\Http\Controllers\TemplateController::index
 * @see app/Http/Controllers/TemplateController.php:17
 * @route /{slug}/templates
 */
index.get = (args: { slug: string | number } | [slug: string | number] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: index.url(args, options),
    method: 'get',
})

/**
 * @see \App\Http\Controllers\TemplateController::index
 * @see app/Http/Controllers/TemplateController.php:17
 * @route /{slug}/templates
 */
index.head = (args: { slug: string | number } | [slug: string | number] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: index.url(args, options),
    method: 'head',
})

const templates = {
    index, 
    create, 
    store, 
    show, 
    edit, 
    update, 
    destroy,
}

export default templates