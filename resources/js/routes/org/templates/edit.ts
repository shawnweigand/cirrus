import { queryParams, type QueryParams } from './../../../wayfinder'

/**
 * @see \App\Http\Controllers\TemplateController::edit
 * @see app/Http/Controllers/TemplateController.php:75
 * @route /{slug}/templates/{template_slug}/edit
 */
export const edit = (args: { slug: string | number, template_slug: string | number } | [slug: string | number, template_slug: string | number], options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ['get','head'],
    url: '\/{slug}\/templates\/{template_slug}\/edit',
}

/**
 * @see \App\Http\Controllers\TemplateController::edit
 * @see app/Http/Controllers/TemplateController.php:75
 * @route /{slug}/templates/{template_slug}/edit
 */
edit.url = (args: { slug: string | number, template_slug: string | number } | [slug: string | number, template_slug: string | number], options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    if (Array.isArray(args)) {
        args = {
            slug: args[0],
            template_slug: args[1],
        }
    }

    const parsedArgs = {
        slug: args.slug,
        template_slug: args.template_slug,
    }

    return edit.definition.url
            .replace('{slug}', parsedArgs.slug.toString())
            .replace('{template_slug}', parsedArgs.template_slug.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
 * @see \App\Http\Controllers\TemplateController::edit
 * @see app/Http/Controllers/TemplateController.php:75
 * @route /{slug}/templates/{template_slug}/edit
 */
edit.get = (args: { slug: string | number, template_slug: string | number } | [slug: string | number, template_slug: string | number], options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
 * @see \App\Http\Controllers\TemplateController::edit
 * @see app/Http/Controllers/TemplateController.php:75
 * @route /{slug}/templates/{template_slug}/edit
 */
edit.head = (args: { slug: string | number, template_slug: string | number } | [slug: string | number, template_slug: string | number], options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: edit.url(args, options),
    method: 'head',
})

export default edit