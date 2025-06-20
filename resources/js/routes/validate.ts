import { queryParams, type QueryParams } from './../wayfinder'

/**
 * @see \App\Http\Controllers\FormValidationController::validate
 * @see app/Http/Controllers/FormValidationController.php:11
 * @route /validate
 */
export const validate = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'post',
} => ({
    url: validate.url(options),
    method: 'post',
})

validate.definition = {
    methods: ['post'],
    url: '\/validate',
}

/**
 * @see \App\Http\Controllers\FormValidationController::validate
 * @see app/Http/Controllers/FormValidationController.php:11
 * @route /validate
 */
validate.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return validate.definition.url + queryParams(options)
}

/**
 * @see \App\Http\Controllers\FormValidationController::validate
 * @see app/Http/Controllers/FormValidationController.php:11
 * @route /validate
 */
validate.post = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'post',
} => ({
    url: validate.url(options),
    method: 'post',
})

export default validate