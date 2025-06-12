import { queryParams, type QueryParams } from './../../../../wayfinder'

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

/**
 * @see \App\Http\Controllers\SubmissionController::create
 * @see app/Http/Controllers/SubmissionController.php:23
 * @route /{slug}/submissions/create
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
    url: '\/{slug}\/submissions\/create',
}

/**
 * @see \App\Http\Controllers\SubmissionController::create
 * @see app/Http/Controllers/SubmissionController.php:23
 * @route /{slug}/submissions/create
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
 * @see \App\Http\Controllers\SubmissionController::create
 * @see app/Http/Controllers/SubmissionController.php:23
 * @route /{slug}/submissions/create
 */
create.get = (args: { slug: string | number } | [slug: string | number] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: create.url(args, options),
    method: 'get',
})

/**
 * @see \App\Http\Controllers\SubmissionController::create
 * @see app/Http/Controllers/SubmissionController.php:23
 * @route /{slug}/submissions/create
 */
create.head = (args: { slug: string | number } | [slug: string | number] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: create.url(args, options),
    method: 'head',
})

/**
 * @see \App\Http\Controllers\SubmissionController::store
 * @see app/Http/Controllers/SubmissionController.php:31
 * @route /{slug}/submissions
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
    url: '\/{slug}\/submissions',
}

/**
 * @see \App\Http\Controllers\SubmissionController::store
 * @see app/Http/Controllers/SubmissionController.php:31
 * @route /{slug}/submissions
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
 * @see \App\Http\Controllers\SubmissionController::store
 * @see app/Http/Controllers/SubmissionController.php:31
 * @route /{slug}/submissions
 */
store.post = (args: { slug: string | number } | [slug: string | number] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'post',
} => ({
    url: store.url(args, options),
    method: 'post',
})

/**
 * @see \App\Http\Controllers\SubmissionController::show
 * @see app/Http/Controllers/SubmissionController.php:51
 * @route /{slug}/submissions/{submission}
 */
export const show = (args: { slug: string | number, submission: string | { id: string } } | [slug: string | number, submission: string | { id: string }], options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ['get','head'],
    url: '\/{slug}\/submissions\/{submission}',
}

/**
 * @see \App\Http\Controllers\SubmissionController::show
 * @see app/Http/Controllers/SubmissionController.php:51
 * @route /{slug}/submissions/{submission}
 */
show.url = (args: { slug: string | number, submission: string | { id: string } } | [slug: string | number, submission: string | { id: string }], options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
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

    return show.definition.url
            .replace('{slug}', parsedArgs.slug.toString())
            .replace('{submission}', parsedArgs.submission.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
 * @see \App\Http\Controllers\SubmissionController::show
 * @see app/Http/Controllers/SubmissionController.php:51
 * @route /{slug}/submissions/{submission}
 */
show.get = (args: { slug: string | number, submission: string | { id: string } } | [slug: string | number, submission: string | { id: string }], options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: show.url(args, options),
    method: 'get',
})

/**
 * @see \App\Http\Controllers\SubmissionController::show
 * @see app/Http/Controllers/SubmissionController.php:51
 * @route /{slug}/submissions/{submission}
 */
show.head = (args: { slug: string | number, submission: string | { id: string } } | [slug: string | number, submission: string | { id: string }], options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: show.url(args, options),
    method: 'head',
})

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

/**
 * @see \App\Http\Controllers\SubmissionController::update
 * @see app/Http/Controllers/SubmissionController.php:67
 * @route /{slug}/submissions/{submission}
 */
export const update = (args: { slug: string | number, submission: string | { id: string } } | [slug: string | number, submission: string | { id: string }], options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'put',
} => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ['put','patch'],
    url: '\/{slug}\/submissions\/{submission}',
}

/**
 * @see \App\Http\Controllers\SubmissionController::update
 * @see app/Http/Controllers/SubmissionController.php:67
 * @route /{slug}/submissions/{submission}
 */
update.url = (args: { slug: string | number, submission: string | { id: string } } | [slug: string | number, submission: string | { id: string }], options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
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

    return update.definition.url
            .replace('{slug}', parsedArgs.slug.toString())
            .replace('{submission}', parsedArgs.submission.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
 * @see \App\Http\Controllers\SubmissionController::update
 * @see app/Http/Controllers/SubmissionController.php:67
 * @route /{slug}/submissions/{submission}
 */
update.put = (args: { slug: string | number, submission: string | { id: string } } | [slug: string | number, submission: string | { id: string }], options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'put',
} => ({
    url: update.url(args, options),
    method: 'put',
})

/**
 * @see \App\Http\Controllers\SubmissionController::update
 * @see app/Http/Controllers/SubmissionController.php:67
 * @route /{slug}/submissions/{submission}
 */
update.patch = (args: { slug: string | number, submission: string | { id: string } } | [slug: string | number, submission: string | { id: string }], options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'patch',
} => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
 * @see \App\Http\Controllers\SubmissionController::destroy
 * @see app/Http/Controllers/SubmissionController.php:75
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
 * @see app/Http/Controllers/SubmissionController.php:75
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
 * @see app/Http/Controllers/SubmissionController.php:75
 * @route /{slug}/submissions/{submission}
 */
destroy.delete = (args: { slug: string | number, submission: string | { id: string } } | [slug: string | number, submission: string | { id: string }], options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'delete',
} => ({
    url: destroy.url(args, options),
    method: 'delete',
})

const SubmissionController = { index, create, store, show, edit, update, destroy }

export default SubmissionController