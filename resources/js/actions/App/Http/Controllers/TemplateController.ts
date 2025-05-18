import { queryParams, type QueryParams } from './../../../../wayfinder'

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

/**
 * @see \App\Http\Controllers\TemplateController::create
 * @see app/Http/Controllers/TemplateController.php:35
 * @route /{slug}/templates/create
 */
export const create = (args: { slug: string | number } | [slug: string | number] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: create.url(args, options),
    method: 'get',
})

create.definition = {
    methods: ['get','head'],
    url: '\/{slug}\/templates\/create',
}

/**
 * @see \App\Http\Controllers\TemplateController::create
 * @see app/Http/Controllers/TemplateController.php:35
 * @route /{slug}/templates/create
 */
create.url = (args: { slug: string | number } | [slug: string | number] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
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

    return create.definition.url
            .replace('{slug}', parsedArgs.slug.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
 * @see \App\Http\Controllers\TemplateController::create
 * @see app/Http/Controllers/TemplateController.php:35
 * @route /{slug}/templates/create
 */
create.get = (args: { slug: string | number } | [slug: string | number] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: create.url(args, options),
    method: 'get',
})

/**
 * @see \App\Http\Controllers\TemplateController::create
 * @see app/Http/Controllers/TemplateController.php:35
 * @route /{slug}/templates/create
 */
create.head = (args: { slug: string | number } | [slug: string | number] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: create.url(args, options),
    method: 'head',
})

/**
 * @see \App\Http\Controllers\TemplateController::store
 * @see app/Http/Controllers/TemplateController.php:43
 * @route /{slug}/templates
 */
export const store = (args: { slug: string | number } | [slug: string | number] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'post',
} => ({
    url: store.url(args, options),
    method: 'post',
})

store.definition = {
    methods: ['post'],
    url: '\/{slug}\/templates',
}

/**
 * @see \App\Http\Controllers\TemplateController::store
 * @see app/Http/Controllers/TemplateController.php:43
 * @route /{slug}/templates
 */
store.url = (args: { slug: string | number } | [slug: string | number] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
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

    return store.definition.url
            .replace('{slug}', parsedArgs.slug.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
 * @see \App\Http\Controllers\TemplateController::store
 * @see app/Http/Controllers/TemplateController.php:43
 * @route /{slug}/templates
 */
store.post = (args: { slug: string | number } | [slug: string | number] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'post',
} => ({
    url: store.url(args, options),
    method: 'post',
})

/**
 * @see \App\Http\Controllers\TemplateController::update
 * @see app/Http/Controllers/TemplateController.php:99
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
 * @see app/Http/Controllers/TemplateController.php:99
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
 * @see app/Http/Controllers/TemplateController.php:99
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
 * @see app/Http/Controllers/TemplateController.php:99
 * @route /{slug}/templates/{template}
 */
update.patch = (args: { slug: string | number, template: string | { id: string } } | [slug: string | number, template: string | { id: string }], options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'patch',
} => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
 * @see \App\Http\Controllers\TemplateController::destroy
 * @see app/Http/Controllers/TemplateController.php:107
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
 * @see app/Http/Controllers/TemplateController.php:107
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
 * @see app/Http/Controllers/TemplateController.php:107
 * @route /{slug}/templates/{template}
 */
destroy.delete = (args: { slug: string | number, template: string | { id: string } } | [slug: string | number, template: string | { id: string }], options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'delete',
} => ({
    url: destroy.url(args, options),
    method: 'delete',
})

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

const TemplateController = { index, create, store, update, destroy, edit, show }

export default TemplateController