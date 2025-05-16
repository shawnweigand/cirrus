import { queryParams, type QueryParams } from './../../../wayfinder'

/**
 * @see \App\Http\Controllers\TemplateController::show
 * @see app/Http/Controllers/TemplateController.php:51
 * @route /{slug}/templates/{template_slug}
 */
export const show = (args: { slug: string | number, template_slug: string | number } | [slug: string | number, template_slug: string | number], options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ['get','head'],
    url: '\/{slug}\/templates\/{template_slug}',
}

/**
 * @see \App\Http\Controllers\TemplateController::show
 * @see app/Http/Controllers/TemplateController.php:51
 * @route /{slug}/templates/{template_slug}
 */
show.url = (args: { slug: string | number, template_slug: string | number } | [slug: string | number, template_slug: string | number], options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
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

    return show.definition.url
            .replace('{slug}', parsedArgs.slug.toString())
            .replace('{template_slug}', parsedArgs.template_slug.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
 * @see \App\Http\Controllers\TemplateController::show
 * @see app/Http/Controllers/TemplateController.php:51
 * @route /{slug}/templates/{template_slug}
 */
show.get = (args: { slug: string | number, template_slug: string | number } | [slug: string | number, template_slug: string | number], options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: show.url(args, options),
    method: 'get',
})

/**
 * @see \App\Http\Controllers\TemplateController::show
 * @see app/Http/Controllers/TemplateController.php:51
 * @route /{slug}/templates/{template_slug}
 */
show.head = (args: { slug: string | number, template_slug: string | number } | [slug: string | number, template_slug: string | number], options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: show.url(args, options),
    method: 'head',
})

export default show