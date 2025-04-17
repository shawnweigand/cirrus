<?php declare(strict_types=1);

namespace App\Enums\Template;

use BenSampo\Enum\Enum;

/**
 * @method static static OptionOne()
 * @method static static OptionTwo()
 * @method static static OptionThree()
 */
final class TemplateCategoryEnum extends Enum
{
    const COMPUTE = 0;
    const STORAGE = 1;
    const NETWORK = 2;
    const DATABASE = 3;
    const IDENTITY = 4;
    const MONITORING = 5;
    const SECURITY = 6;
    const DEVOPS = 7;
    const ANALYTICS = 8;
    const AIML = 9;
    const EVENTING = 10;
    const COST = 11;
    const MANAGEMENT = 12;
}
