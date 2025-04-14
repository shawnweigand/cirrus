<?php declare(strict_types=1);

namespace App\Enums\Organization;

use BenSampo\Enum\Enum;

/**
 * @method static static OptionOne()
 * @method static static OptionTwo()
 * @method static static OptionThree()
 */
final class OrganizationRolesEnum extends Enum
{
    const READER = 0;
    const MEMBER = 1;
    const CONTRIBUTOR = 2;
    const OWNER = 3;
    const ADMIN = 4;
}
