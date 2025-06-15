import { queryParams, type QueryParams } from './../../../../wayfinder'

/**
 * @see \App\Http\Controllers\FormValidationController::validateForm
 * @see app/Http/Controllers/FormValidationController.php:11
 * @route /validate
 */
export const validateForm = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'post',
} => ({
    url: validateForm.url(options),
    method: 'post',
})

validateForm.definition = {
    methods: ['post'],
    url: '\/validate',
}

/**
 * @see \App\Http\Controllers\FormValidationController::validateForm
 * @see app/Http/Controllers/FormValidationController.php:11
 * @route /validate
 */
validateForm.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return validateForm.definition.url + queryParams(options)
}

/**
 * @see \App\Http\Controllers\FormValidationController::validateForm
 * @see app/Http/Controllers/FormValidationController.php:11
 * @route /validate
 */
validateForm.post = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'post',
} => ({
    url: validateForm.url(options),
    method: 'post',
})

const FormValidationController = { validateForm }

export default FormValidationController