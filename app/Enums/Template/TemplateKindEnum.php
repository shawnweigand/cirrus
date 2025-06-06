<?php declare(strict_types=1);

namespace App\Enums\Template;

use BenSampo\Enum\Enum;

/**
 * @method static static OptionOne()
 * @method static static OptionTwo()
 * @method static static OptionThree()
 */
final class TemplateKindEnum extends Enum
{
    const TERRAFORM = 0;
}
