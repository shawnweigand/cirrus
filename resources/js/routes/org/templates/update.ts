import { queryParams, type QueryParams } from './../../../wayfinder'

/**
 * @see \App\Http\Controllers\TemplateController::update
 * @see app/Http/Controllers/TemplateController.php:66
 * @route /{slug}/templates/{template}
 */
export const update = (args: { slug: string | number, template: string | { id: string } } | [slug: string | number, template: string | { id: string }], options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'put',
} => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ['put','patch'],
    url: '\/{slug}\/templates\/{template}',
}

/**
 * @see \App\Http\Controllers\TemplateController::update
 * @see app/Http/Controllers/TemplateController.php:66
 * @route /{slug}/templates/{template}
 */
update.url = (args: { slug: string | number, template: string | { id: string } } | [slug: string | number, template: string | { id: string }], options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
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

    return update.definition.url
            .replace('{slug}', parsedArgs.slug.toString())
            .replace('{template}', parsedArgs.template.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
 * @see \App\Http\Controllers\TemplateController::update
 * @see app/Http/Controllers/TemplateController.php:66
 * @route /{slug}/templates/{template}
 */
update.put = (args: { slug: string | number, template: string | { id: string } } | [slug: string | number, template: string | { id: string }], options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'put',
} => ({
    url: update.url(args, options),
    method: 'put',
})

/**
 * @see \App\Http\Controllers\TemplateController::update
 * @see app/Http/Controllers/TemplateController.php:66
 * @route /{slug}/templates/{template}
 */
update.patch = (args: { slug: string | number, template: string | { id: string } } | [slug: string | number, template: string | { id: string }], options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'patch',
} => ({
    url: update.url(args, options),
    method: 'patch',
})

export default update