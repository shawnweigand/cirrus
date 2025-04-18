import { queryParams, type QueryParams } from './../../../wayfinder'

/**
 * @see \App\Http\Controllers\TemplateController::destroy
 * @see app/Http/Controllers/TemplateController.php:74
 * @route /{slug}/templates/{template}
 */
export const destroy = (args: { slug: string | number, template: string | { id: string } } | [slug: string | number, template: string | { id: string }], options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'delete',
} => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ['delete'],
    url: '\/{slug}\/templates\/{template}',
}

/**
 * @see \App\Http\Controllers\TemplateController::destroy
 * @see app/Http/Controllers/TemplateController.php:74
 * @route /{slug}/templates/{template}
 */
destroy.url = (args: { slug: string | number, template: string | { id: string } } | [slug: string | number, template: string | { id: string }], options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
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

    return destroy.definition.url
            .replace('{slug}', parsedArgs.slug.toString())
            .replace('{template}', parsedArgs.template.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
 * @see \App\Http\Controllers\TemplateController::destroy
 * @see app/Http/Controllers/TemplateController.php:74
 * @route /{slug}/templates/{template}
 */
destroy.delete = (args: { slug: string | number, template: string | { id: string } } | [slug: string | number, template: string | { id: string }], options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'delete',
} => ({
    url: destroy.url(args, options),
    method: 'delete',
})

export default destroy