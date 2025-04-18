import { queryParams, type QueryParams } from './../../../wayfinder'

/**
 * @see \App\Http\Controllers\TemplateController::edit
 * @see app/Http/Controllers/TemplateController.php:57
 * @route /{slug}/templates/{template}/edit
 */
export const edit = (args: { slug: string | number, template: string | { id: string } } | [slug: string | number, template: string | { id: string }], options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ['get','head'],
    url: '\/{slug}\/templates\/{template}\/edit',
}

/**
 * @see \App\Http\Controllers\TemplateController::edit
 * @see app/Http/Controllers/TemplateController.php:57
 * @route /{slug}/templates/{template}/edit
 */
edit.url = (args: { slug: string | number, template: string | { id: string } } | [slug: string | number, template: string | { id: string }], options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    if (Array.isArray(args)) {
        args = {
            slug: args[0],
            template: args[1],
        }
    }

    const parsedArgs = {
        slug: args.slug,
        template: typeof args.template === 'object'
            ? args.template.id
            : args.template,
    }

    return edit.definition.url
            .replace('{slug}', parsedArgs.slug.toString())
            .replace('{template}', parsedArgs.template.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
 * @see \App\Http\Controllers\TemplateController::edit
 * @see app/Http/Controllers/TemplateController.php:57
 * @route /{slug}/templates/{template}/edit
 */
edit.get = (args: { slug: string | number, template: string | { id: string } } | [slug: string | number, template: string | { id: string }], options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
 * @see \App\Http\Controllers\TemplateController::edit
 * @see app/Http/Controllers/TemplateController.php:57
 * @route /{slug}/templates/{template}/edit
 */
edit.head = (args: { slug: string | number, template: string | { id: string } } | [slug: string | number, template: string | { id: string }], options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: edit.url(args, options),
    method: 'head',
})

export default edit